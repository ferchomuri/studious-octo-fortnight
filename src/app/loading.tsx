import { LoadingSpinner } from "@/src/components/ui/loading-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size={64} />
        <p className="text-muted-foreground animate-pulse text-sm font-medium tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
