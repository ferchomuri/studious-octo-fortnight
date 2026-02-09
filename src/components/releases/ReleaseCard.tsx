"use client";

import Image from "next/image";
import { MusicRelease } from "@/src/lib/interfaces/types";
import { Calendar, Play } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";

interface ReleaseCardProps {
  release: MusicRelease;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  const formatStreams = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="group relative flex flex-col gap-3 rounded-xl bg-card p-3 transition-all hover:bg-white/5">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={release.coverImageUrl}
          alt={release.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <Badge
            variant="secondary"
            className="bg-black/60 backdrop-blur-md hover:bg-black/70 capitalize"
          >
            {release.type}
          </Badge>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-bold text-lg leading-tight text-white group-hover:text-primary transition-colors">
          {release.title}
        </h3>

        <div className="flex items-center justify-between text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formatDate(release.releaseDate)}</span>
          </div>

          <div className="flex items-center gap-1.5 text-accent">
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>{formatStreams(release.streams)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
