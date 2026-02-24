import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { StrapiClient, StrapiItem, getMediaFromField } from "@/lib/strapi";

interface ClientCardProps {
  client: StrapiItem<StrapiClient>;
  index: number;
}

const ClientCard = ({ client, index }: ClientCardProps) => {
  const { name, description, website, project_type, logo } = client.attributes;
  const logoUrl = getMediaFromField(logo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full hover:border-primary/50 transition-all group">
        <CardContent className="p-6 flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-secondary/50 flex items-center justify-center overflow-hidden">
            {logoUrl !== "/placeholder.svg" ? (
              <img src={logoUrl} alt={name} className="w-full h-full object-contain p-2" />
            ) : (
              <span className="text-2xl font-bold text-primary">{name[0]}</span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h3>
            <p className="text-xs text-muted-foreground">{project_type}</p>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm flex items-center gap-1 hover:underline"
            >
              Visit <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ClientCard;
