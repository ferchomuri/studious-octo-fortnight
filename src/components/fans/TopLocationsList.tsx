"use client";

import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { LocationData } from "@/src/lib/interfaces/types";

interface TopLocationsListProps {
  data: LocationData[];
}

export function TopLocationsList({ data }: TopLocationsListProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Top Locations</CardTitle>
        <CardDescription>Where your fans are</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {data.map((location, index) => (
          <div key={location.city} className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {index + 1}
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {location.city}
              </p>
              <p className="text-xs text-muted-foreground">
                {location.listeners.toLocaleString()} listeners
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-green-500">
              <TrendingUp className="h-3 w-3" />
              {location.growth}%
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
