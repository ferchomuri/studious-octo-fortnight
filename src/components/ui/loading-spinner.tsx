import { cn } from "@/src/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export function LoadingSpinner({
  className,
  size = 40,
  ...props
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("flex justify-center items-center", className)}
      {...props}
    >
      <Loader2
        className="animate-spin text-primary drop-shadow-[0_0_10px_rgba(180,90,250,0.5)]"
        size={size}
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
