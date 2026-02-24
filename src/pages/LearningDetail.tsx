import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLearningResource } from "@/hooks/useStrapi";
import { getMediaFromField } from "@/lib/strapi";
import RichTextRenderer from "@/components/strapi/RichTextRenderer";
import ContentSkeleton from "@/components/strapi/ContentSkeleton";
import ErrorState from "@/components/strapi/ErrorState";

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-500/10 text-green-500 border-green-500/30",
  Intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  Advanced: "bg-red-500/10 text-red-500 border-red-500/30",
};

const LearningDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, refetch } = useLearningResource(id || "");

  if (isLoading) return <div className="min-h-screen bg-background pt-24 px-4"><ContentSkeleton variant="detail" /></div>;
  if (isError || !data?.data) return <div className="min-h-screen bg-background pt-24 px-4"><ErrorState onRetry={refetch} /></div>;

  const resource = data.data.attributes;
  const coverUrl = getMediaFromField(resource.cover_image);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <Link to="/corporate">
          <Button variant="ghost" className="mb-8 gap-2"><ArrowLeft className="w-4 h-4" /> Back</Button>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <Badge className={difficultyColors[resource.difficulty] || ""}>{resource.difficulty}</Badge>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <BookOpen className="w-4 h-4" />
              {resource.category}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{resource.title}</h1>

          {resource.publishedAt && (
            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <Calendar className="w-4 h-4" />
              {new Date(resource.publishedAt).toLocaleDateString()}
            </div>
          )}

          {coverUrl !== "/placeholder.svg" && (
            <img src={coverUrl} alt={resource.title} className="w-full rounded-2xl mb-10 max-h-96 object-cover" />
          )}

          {resource.video_url && (
            <div className="mb-10 aspect-video rounded-2xl overflow-hidden">
              <iframe
                src={resource.video_url}
                title={resource.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <p className="text-lg text-muted-foreground mb-8">{resource.description}</p>

          <RichTextRenderer content={resource.content} />

          {resource.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
              {resource.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LearningDetail;
