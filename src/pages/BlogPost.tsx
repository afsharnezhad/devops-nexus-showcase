import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/hooks/useStrapi";
import { getMediaFromField } from "@/lib/strapi";
import RichTextRenderer from "@/components/strapi/RichTextRenderer";
import ContentSkeleton from "@/components/strapi/ContentSkeleton";
import ErrorState from "@/components/strapi/ErrorState";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, isError, refetch } = useBlog(slug || "");

  if (isLoading) return <div className="min-h-screen bg-background pt-24 px-4"><ContentSkeleton variant="detail" /></div>;
  if (isError || !data?.data?.length) return <div className="min-h-screen bg-background pt-24 px-4"><ErrorState onRetry={refetch} /></div>;

  const post = data.data[0].attributes;
  const coverUrl = getMediaFromField(post.cover_image);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        <Link to="/home">
          <Button variant="ghost" className="mb-8 gap-2"><ArrowLeft className="w-4 h-4" /> Back</Button>
        </Link>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author_name}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.reading_time} min read</span>
            {post.publishedAt && (
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.publishedAt).toLocaleDateString()}</span>
            )}
          </div>

          {coverUrl !== "/placeholder.svg" && (
            <img src={coverUrl} alt={post.title} className="w-full rounded-2xl mb-10 max-h-[500px] object-cover" />
          )}

          <RichTextRenderer content={post.content} />

          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
              {post.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
            </div>
          )}
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;
