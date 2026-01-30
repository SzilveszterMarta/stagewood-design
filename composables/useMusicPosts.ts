import { collection, getDocs, query, where } from 'firebase/firestore'
import type { Post } from '~/types/post'

export const useMusicPosts = async () => {
  const posts = ref<Post[]>([])

  if (!process.client) return posts

  const { $firestore } = useNuxtApp()

  const q = query(
    collection($firestore, 'music'),
    where('published', '==', true)
  )

  const snapshot = await getDocs(q)

  posts.value = snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Post, 'id'>)
  }))

  return posts
}
