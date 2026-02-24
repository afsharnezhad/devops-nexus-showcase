import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorState = ({ message = "Failed to load content. Please try again.", onRetry }: ErrorStateProps) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <AlertCircle className="w-12 h-12 text-destructive mb-4" />
    <p className="text-muted-foreground text-lg mb-4">{message}</p>
    {onRetry && (
      <Button variant="outline" onClick={onRetry} className="gap-2">
        <RefreshCw className="w-4 h-4" />
        Retry
      </Button>
    )}
  </div>
);

export default ErrorState;
