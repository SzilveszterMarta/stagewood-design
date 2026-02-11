import { Query } from 'appwrite';
import type { Post, PostImage } from '~/types/post';
import { createAppwriteClient } from '~/lib/appwrite';

export const usePost = (type: 'music' | 'woodwork') => {
  const config = useRuntimeConfig();
  const { databases, storage } = createAppwriteClient();

  const databaseId = config.public.appwriteDatabaseId as string;
  const bucketId = config.public.appwriteBucketId as string;
  const collectionId =
    type === 'music'
      ? (config.public.appwriteMusicCollectionId as string)
      : (config.public.appwriteWoodworkCollectionId as string);

  const mapCoverImage = (fileId?: string): PostImage | undefined => {
    if (!fileId) return undefined;
    return {
      id: fileId,
      url: storage.getFileView(bucketId, fileId),
    };
  };

  const mapImages = (ids?: string[] | string): PostImage[] | undefined => {
    if (!ids) return undefined;
    let rawIds: string[] = [];
    if (Array.isArray(ids)) {
      rawIds = ids;
    } else if (typeof ids === 'string') {
      rawIds = [ids];
    }
    const fileIds = rawIds
      .flatMap((id) => id.split(','))
      .map((id) => id.trim())
      .filter((id) => id.length > 0);
    if (!fileIds.length) return undefined;
    return fileIds.map((id) => ({
      id,
      url: storage.getFileView(bucketId, id),
    }));
  };

  const mapPost = (doc: any): Post => ({
    $id: doc.$id,
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    content: doc.content,
    coverImage: mapCoverImage(doc.coverImage),
    images: mapImages(doc.images),
    $createdAt: doc.$createdAt,
    $updatedAt: doc.$updatedAt,
  });

  const getAll = async (): Promise<Post[]> => {
    const res = await databases.listDocuments(databaseId, collectionId, [
      Query.orderDesc('$createdAt'),
    ]);
    return res.documents.map(mapPost);
  };

  const searchByTitle = async (search: string): Promise<Post[]> => {
    if (!search.trim()) return [];

    const res = await databases.listDocuments(databaseId, collectionId, [
      Query.search('title', search),
      Query.orderDesc('$createdAt'),
    ]);

    return res.documents.map(mapPost);
  };

  const getBySlug = async (slug: string) => {
    const res = await databases.listDocuments(databaseId, collectionId, [
      Query.equal('slug', slug),
      Query.limit(1),
    ]);

    if (!res.documents.length) return null;
    return mapPost(res.documents[0]);
  };

  return {
    getAll,
    getBySlug,
    searchByTitle,
  };
};
