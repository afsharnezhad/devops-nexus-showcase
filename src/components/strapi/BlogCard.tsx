import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { StrapiBlog, StrapiItem, getMediaFromField } from "@/lib/strapi";

interface BlogCardProps {
  post: StrapiItem<StrapiBlog>;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const { title, slug, category, author_name, reading_time, cover_image, publishedAt, tags } = post.attributes;
  const coverUrl = getMediaFromField(cover_image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/blog/${slug}`}>
        <Card className="h-full overflow-hidden hover:border-primary/50 transition-all group cursor-pointer">
          <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
            {coverUrl !== "/placeholder.svg" && (
              <img src={coverUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            )}
          </div>
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-xs">{category}</Badge>
              <div className="flex items-center text-muted-foreground text-xs gap-1">
                <Calendar className="w-3 h-3" />
                {publishedAt ? new Date(publishedAt).toLocaleDateString() : "Draft"}
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{author_name}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {reading_time} min read
              </span>
            </div>
            {tags?.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
            )}
            <div className="flex items-center text-primary text-sm font-medium pt-2">
              Read More <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
