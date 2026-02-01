export interface MusicImage {
  url: string
  alt?: string
}

export interface MusicPost {
  $id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  coverImage?: MusicImage
  images?: MusicImage[]
  $createdAt?: string
  $updatedAt?: string
}
