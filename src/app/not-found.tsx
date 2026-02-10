import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 text-center animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col items-center gap-2">
        <FileQuestion className="h-24 w-24 text-muted-foreground/50" />
        <h1 className="text-8xl font-bold tracking-tighter text-primary drop-shadow-[0_0_25px_rgba(180,90,250,0.4)]">
          404
        </h1>
        <h2 className="text-2xl font-semibold tracking-wide text-foreground">
          Page Not Found
        </h2>
      </div>
      <p className="max-w-[500px] text-muted-foreground">
        Oops! The page you're looking for doesn't exist or has been moved. It
        looks like you've ventured into uncharted territory.
      </p>
      <Button asChild className="gap-2" size="lg">
        <Link href="/">
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </Button>
    </div>
  );
}
