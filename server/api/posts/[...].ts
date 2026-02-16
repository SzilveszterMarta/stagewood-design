import { Client, Databases, Storage, Query } from 'node-appwrite';

export default defineEventHandler(async (event) => {
  // Parse the URL path
  const pathSegments = event.path
    .replace('/api/posts/', '')
    .split('/')
    .filter(Boolean);

  if (pathSegments.length !== 2) {
    throw createError({
      statusCode: 400,
      message: 'Invalid request format. Expected: /api/posts/{type}/{slug}',
    });
  }

  const [type, slug] = pathSegments;
  const config = useRuntimeConfig();

  // Validate type
  if (type !== 'music' && type !== 'woodwork') {
    throw createError({
      statusCode: 400,
      message: 'Invalid post type. Must be "music" or "woodwork"',
    });
  }

  // Initialize Appwrite with API key (server-side only)
  const client = new Client()
    .setEndpoint(config.public.appwriteEndpoint)
    .setProject(config.public.appwriteProjectId)
    .setKey(config.appwriteApiKey);

  const databases = new Databases(client);

  const databaseId = config.public.appwriteDatabaseId;
  const bucketId = config.public.appwriteBucketId;
  const collectionId =
    type === 'music'
      ? config.public.appwriteMusicCollectionId
      : config.public.appwriteWoodworkCollectionId;

  // Helper to construct file view URL manually
  const getFileViewUrl = (fileId: string): string => {
    const endpoint = config.public.appwriteEndpoint;
    const projectId = config.public.appwriteProjectId;
    return `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/view?project=${projectId}`;
  };

  try {
    // Fetch post by slug
    const res = await databases.listDocuments(databaseId, collectionId, [
      Query.equal('slug', slug || ''),
      Query.limit(1),
    ]);

    if (!res.documents.length) {
      throw createError({
        statusCode: 404,
        message: 'Post not found',
      });
    }

    const doc = res.documents[0];

    // Map cover image
    const mapCoverImage = (fileId?: string) => {
      if (!fileId) return undefined;
      return {
        id: fileId,
        url: getFileViewUrl(fileId),
      };
    };

    // Map images
    const mapImages = (ids?: string[] | string) => {
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
        url: getFileViewUrl(id),
      }));
    };

    // Return mapped post
    return {
      $id: doc?.$id,
      title: doc?.title,
      slug: doc?.slug,
      excerpt: doc?.excerpt,
      content: doc?.content,
      coverImage: mapCoverImage(doc?.coverImage),
      images: mapImages(doc?.images),
      $createdAt: doc?.$createdAt,
      $updatedAt: doc?.$updatedAt,
    };
  } catch (error: any) {
    console.error('Error fetching post:', error);

    if (error.statusCode) throw error;

    throw createError({
      statusCode: 500,
      message: 'Failed to fetch post',
    });
  }
});
