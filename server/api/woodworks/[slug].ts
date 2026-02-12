import { Query } from 'node-appwrite'
import { createServerAppwrite } from '~/server/lib/appwrite'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug parameter is required',
    })
  }

  const config = useRuntimeConfig()
  const { databases } = createServerAppwrite()

  const res = await databases.listDocuments(
    config.appwriteDatabaseId,
    config.appwriteWoodworkCollectionId,
    [
      Query.equal('slug', slug),
      Query.limit(1),
    ]
  )

  if (!res.documents.length) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found',
    })
  }

  return res.documents[0]
})
