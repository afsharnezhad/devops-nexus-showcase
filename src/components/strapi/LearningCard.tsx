import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { StrapiLearningResource, StrapiItem, getMediaFromField } from "@/lib/strapi";

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-500/10 text-green-500 border-green-500/30",
  Intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  Advanced: "bg-red-500/10 text-red-500 border-red-500/30",
};

interface LearningCardProps {
  resource: StrapiItem<StrapiLearningResource>;
  index: number;
}

const LearningCard = ({ resource, index }: LearningCardProps) => {
  const { title, category, description, difficulty, cover_image, tags } = resource.attributes;
  const coverUrl = getMediaFromField(cover_image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/learning/${resource.id}`}>
        <Card className="h-full overflow-hidden hover:border-primary/50 transition-all group cursor-pointer">
          <div className="h-44 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden relative">
            {coverUrl !== "/placeholder.svg" && (
              <img src={coverUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            )}
            <Badge className={`absolute top-3 right-3 ${difficultyColors[difficulty] || ""}`}>
              {difficulty}
            </Badge>
          </div>
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground font-medium">{category}</span>
            </div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            {tags?.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default LearningCard;
