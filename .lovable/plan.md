

# Plan: Full Strapi CMS Integration for Auto Ops Website

## Overview

This plan connects the existing Auto Ops website to a live Strapi CMS instance. The four dynamic sections (Clients, Case Studies, Learning Hub, Blog) will fetch data from Strapi APIs, with list pages, detail pages, loading skeletons, error states, and search/filter capabilities.

## Prerequisites

- You need to provide your Strapi instance URL (e.g., `https://your-strapi.com`) as a secret named `VITE_STRAPI_URL`
- Your Strapi instance must have the four collections created (clients, case-studies, learning-resources, blogs) with the fields you specified
- Strapi API permissions must be set to allow public read access for these collections

---

## What Will Be Built

### 1. Strapi API Layer

**New file: `src/lib/strapi.ts`**
- Central API wrapper with base URL from `VITE_STRAPI_URL`
- Generic `fetchStrapi<T>(endpoint, params)` function
- Media URL helper (`getStrapiMediaUrl`)
- Error handling utilities
- TypeScript interfaces for all four content types

### 2. React Query Hooks

**New file: `src/hooks/useStrapi.ts`**
- `useClients()` — fetches `/api/clients?populate=*&sort=order:asc`
- `useCaseStudies()` — fetches `/api/case-studies?populate=*`
- `useCaseStudy(slug)` — fetches single case study by slug
- `useLearningResources(filters)` — fetches with category/search filters
- `useLearningResource(id)` — fetches single resource
- `useBlogs(filters)` — fetches with category/search filters
- `useBlog(slug)` — fetches single blog by slug

### 3. Reusable Card Components

**New files:**
- `src/components/strapi/ClientCard.tsx` — client logo, name, description, project type
- `src/components/strapi/CaseStudyCard.tsx` — thumbnail, title, summary, tags, metrics preview
- `src/components/strapi/LearningCard.tsx` — cover image, title, category, difficulty badge
- `src/components/strapi/BlogCard.tsx` — cover image, title, category, author, reading time
- `src/components/strapi/ContentSkeleton.tsx` — reusable loading skeleton for all card types
- `src/components/strapi/ErrorState.tsx` — reusable error display with retry button

### 4. Updated Section Components

**Modify existing files to use Strapi data:**

- **`src/components/sections/Clients.tsx`** — Replace hardcoded projects array with `useClients()` hook. Add Embla carousel slider view alongside grid view. Show skeletons while loading.

- **`src/components/sections/CaseStudies.tsx`** — Replace hardcoded array with `useCaseStudies()`. Each card links to `/case-study/[slug]`. Show metrics from JSON field.

- **`src/components/sections/LearningHub.tsx`** — Replace hardcoded content with `useLearningResources()`. Add search input and category filter buttons. Each card links to `/learning/[id]`.

- **`src/components/sections/Blog.tsx`** — Replace hardcoded posts with `useBlogs()`. Keep existing search/filter UI but wire to Strapi. Each card links to `/blog/[slug]`.

### 5. Detail Pages (New Routes)

**New page files:**
- `src/pages/CaseStudyDetail.tsx` — Full case study with challenge/solution/result rich text, metrics visualization (using recharts), image gallery, related case studies
- `src/pages/LearningDetail.tsx` — Full resource with rich text content, embedded video player, difficulty badge, related resources
- `src/pages/BlogPost.tsx` — Full blog post with rich text rendering, author info, tags, reading time

### 6. Route Updates

**Modify `src/App.tsx`:**
```
/case-study/:slug  → CaseStudyDetail
/learning/:id      → LearningDetail
/blog/:slug        → BlogPost
```

### 7. Rich Text Renderer

**New file: `src/components/strapi/RichTextRenderer.tsx`**
- Renders Strapi's rich text (block format) to React components
- Handles headings, paragraphs, lists, code blocks, images, links

### 8. Navigation Updates

- Add "Learning Hub" and "Blog" links to CorporateNavigation menu items
- Update Portfolio NavigationBubble if needed

---

## Technical Details

**Strapi API call pattern:**
```typescript
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

async function fetchStrapi<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${STRAPI_URL}${endpoint}`);
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Strapi error: ${res.status}`);
  return res.json();
}
```

**Environment variable:** `VITE_STRAPI_URL` (will be added as a project secret)

**Existing libraries used:** React Query (already installed), Framer Motion, ShadCN UI, Recharts, Embla Carousel — all already in dependencies.

---

## Implementation Order

1. Add `VITE_STRAPI_URL` secret
2. Create Strapi API layer + types + hooks
3. Create reusable card components + skeleton + error state
4. Update the 4 section components to use Strapi data
5. Create 3 detail pages + rich text renderer
6. Add new routes to App.tsx
7. Update navigation menus

