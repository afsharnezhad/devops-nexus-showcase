import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBlogs } from "@/hooks/useStrapi";
import BlogCard from "@/components/strapi/BlogCard";
import ContentSkeleton from "@/components/strapi/ContentSkeleton";
import ErrorState from "@/components/strapi/ErrorState";

const categories = ["All", "DevOps", "Cloud", "Security", "Blockchain", "CI/CD"];

const CorporateBlog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filters = {
    search: search || undefined,
    category: category !== "All" ? category : undefined,
  };

  const { data, isLoading, isError, refetch } = useBlogs(filters);
  const posts = data?.data || [];

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Insights</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest in DevOps, cybersecurity, and cloud technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search blog posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {isLoading && <ContentSkeleton count={6} />}
        {isError && <ErrorState message="Could not load blog posts." onRetry={refetch} />}

        {posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}

        {!isLoading && !isError && posts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No blog posts found.</p>
        )}
      </div>
    </section>
  );
};

export default CorporateBlog;
