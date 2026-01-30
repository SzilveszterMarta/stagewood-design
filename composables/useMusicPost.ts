import { collection, getDocs, query, where, limit } from 'firebase/firestore'
import type { Post } from '~/types/post'

export const useMusicPost = async (slug: string) => {
  const post = ref<Post | null>(null)

  if (!process.client) return post

  const { $firestore } = useNuxtApp()

  const q = query(
    collection($firestore, 'music'),
    where('slug', '==', slug),
    where('published', '==', true),
    limit(1)
  )

  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    const doc = snapshot.docs[0]
    if(doc)
    post.value = {
      id: doc.id,
      ...(doc.data() as Omit<Post, 'id'>)
    }
  }

  return post
}
