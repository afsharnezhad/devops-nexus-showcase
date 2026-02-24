import { useQuery } from "@tanstack/react-query";
import {
  fetchStrapi,
  StrapiResponse,
  StrapiSingleResponse,
  StrapiClient,
  StrapiCaseStudy,
  StrapiLearningResource,
  StrapiBlog,
} from "@/lib/strapi";

// ===== Clients =====
export function useClients() {
  return useQuery({
    queryKey: ["strapi-clients"],
    queryFn: () =>
      fetchStrapi<StrapiResponse<StrapiClient>>("/api/clients", {
        "populate": "*",
        "sort": "order:asc",
      }),
  });
}

// ===== Case Studies =====
export function useCaseStudies() {
  return useQuery({
    queryKey: ["strapi-case-studies"],
    queryFn: () =>
      fetchStrapi<StrapiResponse<StrapiCaseStudy>>("/api/case-studies", {
        "populate": "*",
        "sort": "publishedAt:desc",
      }),
  });
}

export function useCaseStudy(slug: string) {
  return useQuery({
    queryKey: ["strapi-case-study", slug],
    queryFn: () =>
      fetchStrapi<StrapiResponse<StrapiCaseStudy>>("/api/case-studies", {
        "populate": "*",
        "filters[slug][$eq]": slug,
      }),
    enabled: !!slug,
  });
}

// ===== Learning Resources =====
export function useLearningResources(filters?: { category?: string; search?: string }) {
  return useQuery({
    queryKey: ["strapi-learning", filters],
    queryFn: () => {
      const params: Record<string, string> = { "populate": "*", "sort": "publishedAt:desc" };
      if (filters?.category) params["filters[category][$eq]"] = filters.category;
      if (filters?.search) params["filters[title][$containsi]"] = filters.search;
      return fetchStrapi<StrapiResponse<StrapiLearningResource>>("/api/learning-resources", params);
    },
  });
}

export function useLearningResource(id: string) {
  return useQuery({
    queryKey: ["strapi-learning-resource", id],
    queryFn: () =>
      fetchStrapi<StrapiSingleResponse<StrapiLearningResource>>(`/api/learning-resources/${id}`, {
        "populate": "*",
      }),
    enabled: !!id,
  });
}

// ===== Blog =====
export function useBlogs(filters?: { category?: string; search?: string }) {
  return useQuery({
    queryKey: ["strapi-blogs", filters],
    queryFn: () => {
      const params: Record<string, string> = { "populate": "*", "sort": "publishedAt:desc" };
      if (filters?.category) params["filters[category][$eq]"] = filters.category;
      if (filters?.search) params["filters[title][$containsi]"] = filters.search;
      return fetchStrapi<StrapiResponse<StrapiBlog>>("/api/blogs", params);
    },
  });
}

export function useBlog(slug: string) {
  return useQuery({
    queryKey: ["strapi-blog", slug],
    queryFn: () =>
      fetchStrapi<StrapiResponse<StrapiBlog>>("/api/blogs", {
        "populate": "*",
        "filters[slug][$eq]": slug,
      }),
    enabled: !!slug,
  });
}
