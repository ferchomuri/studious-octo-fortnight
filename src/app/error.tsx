"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCw } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 text-center animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full bg-destructive/10 p-4">
          <AlertTriangle
            className="h-12 w-12 text-destructive drop-shadow-[0_0_15px_rgba(255,50,50,0.4)]"
            aria-hidden="true"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter text-foreground mt-4">
          Something went wrong!
        </h1>
        <p className="max-w-[500px] text-muted-foreground">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
      </div>

      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="default" className="gap-2">
          <RotateCw className="h-4 w-4" aria-hidden="true" />
          Try again
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <Link href="/">
            <Home className="h-4 w-4" aria-hidden="true" />
            Go Home
          </Link>
        </Button>
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="mt-8 max-w-[600px] rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-left">
          <p className="font-mono text-xs text-destructive break-all">
            {error.message || "Unknown error"}
          </p>
          {error.digest && (
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Digest: {error.digest}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
