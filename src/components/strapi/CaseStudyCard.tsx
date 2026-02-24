import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { StrapiCaseStudy, StrapiItem, getMediaFromField } from "@/lib/strapi";

interface CaseStudyCardProps {
  study: StrapiItem<StrapiCaseStudy>;
  index: number;
}

const CaseStudyCard = ({ study, index }: CaseStudyCardProps) => {
  const { title, slug, summary, tags, metrics, thumbnail_image } = study.attributes;
  const thumbUrl = getMediaFromField(thumbnail_image);
  const metricEntries = metrics ? Object.entries(metrics).slice(0, 3) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      <Link to={`/case-study/${slug || study.id}`}>
        <Card className="h-full overflow-hidden hover:border-primary/50 transition-all group cursor-pointer">
          <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
            {thumbUrl !== "/placeholder.svg" && (
              <img src={thumbUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            )}
          </div>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{summary}</p>

            {metricEntries.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {metricEntries.map(([key, val]) => (
                  <div key={key} className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-primary">{String(val)}</div>
                    <div className="text-[10px] text-muted-foreground capitalize">{key.replace(/_/g, " ")}</div>
                  </div>
                ))}
              </div>
            )}

            {tags?.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
            )}

            <div className="flex items-center text-primary text-sm font-medium pt-2">
              View Case Study <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
