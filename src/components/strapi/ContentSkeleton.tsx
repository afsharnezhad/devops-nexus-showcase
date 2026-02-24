import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ContentSkeletonProps {
  variant?: "card" | "detail" | "list";
  count?: number;
}

const CardSkeleton = () => (
  <Card className="overflow-hidden">
    <Skeleton className="h-48 w-full rounded-none" />
    <CardHeader>
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-6 w-3/4" />
    </CardHeader>
    <CardContent className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </CardContent>
  </Card>
);

const DetailSkeleton = () => (
  <div className="max-w-4xl mx-auto space-y-8">
    <Skeleton className="h-8 w-32" />
    <Skeleton className="h-12 w-3/4" />
    <Skeleton className="h-64 w-full rounded-2xl" />
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

const ContentSkeleton = ({ variant = "card", count = 3 }: ContentSkeletonProps) => {
  if (variant === "detail") return <DetailSkeleton />;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};

export default ContentSkeleton;
