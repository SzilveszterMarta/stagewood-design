export interface PostImage {
  id: string;
  url: string;
  alt?: string;
}

export interface Post {
  $id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage?: PostImage;
  images?: PostImage[];
  videoUrl?: string;
  audio?: string;
  $createdAt?: string;
  $updatedAt?: string;
}
