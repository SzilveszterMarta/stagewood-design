import { Query } from 'appwrite'
import type { WoodworkPost } from '~/types/woodwork'
import { createAppwriteClient } from '~/lib/appwrite'

export const useWoodworkPosts = () => {
  const config = useRuntimeConfig()
  const { databases } = createAppwriteClient()

  const databaseId = config.public.appwriteDatabaseId as string
  const collectionId = config.public.appwriteWoodworkCollectionId as string

  const mapPost = (doc: any): WoodworkPost => ({
    $id: doc.$id,
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    content: doc.content,
    $createdAt: doc.$createdAt,
    $updatedAt: doc.$updatedAt
  })

  const getAll = async (): Promise<WoodworkPost[]> => {
    const res = await databases.listDocuments(
      databaseId,
      collectionId,
      [Query.orderDesc('$createdAt')]
    )

    return res.documents.map(mapPost)
  }

  const getBySlug = async (slug: string) => {
    const res = await databases.listDocuments(
        databaseId,
        collectionId,
        [
        Query.equal('slug', slug),
        Query.limit(1)
        ]
    )

    if (!res.documents.length) return null
    return mapPost(res.documents[0])
    }


  return {
    getAll,
    getBySlug
  }
}
