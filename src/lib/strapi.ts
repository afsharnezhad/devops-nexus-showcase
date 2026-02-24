// Strapi CMS API Layer
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "";

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface StrapiResponse<T> {
  data: StrapiItem<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: StrapiItem<T>;
}

export interface StrapiItem<T> {
  id: number;
  attributes: T;
}

// ===== Content Type Interfaces =====

export interface StrapiClient {
  name: string;
  description: string;
  website: string;
  project_type: string;
  testimonial?: string;
  order: number;
  logo: { data: StrapiItem<StrapiMedia> | null };
  createdAt: string;
  updatedAt: string;
}

export interface StrapiCaseStudy {
  title: string;
  slug: string;
  summary: string;
  challenge: any[]; // Strapi rich text blocks
  solution: any[];
  result: any[];
  metrics: Record<string, string | number> | null;
  thumbnail_image: { data: StrapiItem<StrapiMedia> | null };
  gallery: { data: StrapiItem<StrapiMedia>[] | null };
  tags: string[];
  publishedAt: string;
  client?: { data: StrapiItem<StrapiClient> | null };
}

export interface StrapiLearningResource {
  title: string;
  category: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  content: any[]; // Strapi rich text blocks
  video_url?: string;
  cover_image: { data: StrapiItem<StrapiMedia> | null };
  tags: string[];
  publishedAt: string;
}

export interface StrapiBlog {
  title: string;
  slug: string;
  category: string;
  content: any[]; // Strapi rich text blocks
  author_name: string;
  reading_time: number;
  cover_image: { data: StrapiItem<StrapiMedia> | null };
  tags: string[];
  publishedAt: string;
}

// ===== API Helpers =====

export function getStrapiMediaUrl(media: StrapiMedia | null | undefined): string {
  if (!media?.url) return "/placeholder.svg";
  if (media.url.startsWith("http")) return media.url;
  return `${STRAPI_URL}${media.url}`;
}

export function getMediaFromField(field: { data: StrapiItem<StrapiMedia> | null } | undefined): string {
  if (!field?.data) return "/placeholder.svg";
  return getStrapiMediaUrl(field.data.attributes);
}

export function getMultiMediaFromField(field: { data: StrapiItem<StrapiMedia>[] | null } | undefined): string[] {
  if (!field?.data) return [];
  return field.data.map((item) => getStrapiMediaUrl(item.attributes));
}

export async function fetchStrapi<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<T> {
  const url = new URL(`${STRAPI_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
