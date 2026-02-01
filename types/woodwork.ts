export interface WoodworkImage {
  id: string
  url: string
  alt?: string
}

export interface WoodworkPost {
  $id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  coverImage?: WoodworkImage
  images?: WoodworkImage[]
  $createdAt?: string
  $updatedAt?: string
}
