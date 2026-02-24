import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCaseStudy } from "@/hooks/useStrapi";
import { getMediaFromField, getMultiMediaFromField } from "@/lib/strapi";
import RichTextRenderer from "@/components/strapi/RichTextRenderer";
import ContentSkeleton from "@/components/strapi/ContentSkeleton";
import ErrorState from "@/components/strapi/ErrorState";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, isError, refetch } = useCaseStudy(slug || "");

  if (isLoading) return <div className="min-h-screen bg-background pt-24 px-4"><ContentSkeleton variant="detail" /></div>;
  if (isError || !data?.data?.length) return <div className="min-h-screen bg-background pt-24 px-4"><ErrorState onRetry={refetch} /></div>;

  const study = data.data[0].attributes;
  const thumbUrl = getMediaFromField(study.thumbnail_image);
  const galleryUrls = getMultiMediaFromField(study.gallery);
  const metrics = study.metrics ? Object.entries(study.metrics) : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <Link to="/corporate">
          <Button variant="ghost" className="mb-8 gap-2"><ArrowLeft className="w-4 h-4" /> Back</Button>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {study.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{study.title}</h1>

          {study.publishedAt && (
            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <Calendar className="w-4 h-4" />
              {new Date(study.publishedAt).toLocaleDateString()}
            </div>
          )}

          {thumbUrl !== "/placeholder.svg" && (
            <img src={thumbUrl} alt={study.title} className="w-full rounded-2xl mb-10 max-h-96 object-cover" />
          )}

          <p className="text-lg text-muted-foreground mb-10">{study.summary}</p>

          {metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {metrics.map(([k, v]) => (
                <div key={k} className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">{String(v)}</div>
                  <div className="text-xs text-muted-foreground capitalize">{k.replace(/_/g, " ")}</div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Challenge</h2>
              <RichTextRenderer content={study.challenge} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Solution</h2>
              <RichTextRenderer content={study.solution} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Result</h2>
              <RichTextRenderer content={study.result} />
            </div>
          </div>

          {galleryUrls.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryUrls.map((url, i) => (
                  <img key={i} src={url} alt={`Gallery ${i + 1}`} className="rounded-xl w-full h-48 object-cover" />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
