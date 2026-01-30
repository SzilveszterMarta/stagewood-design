// types/woodwork.ts
export interface WoodworkImage {
  url: string
  alt?: string
}

export interface WoodworkPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  coverImage?: WoodworkImage
  images?: WoodworkImage[]
  publishedAt?: string
}
