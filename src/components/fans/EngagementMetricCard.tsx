import { Music2, UserPlus, Share2, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import { EngagementMetric } from "@/src/lib/interfaces/types";

const IconMap: Record<string, LucideIcon> = {
  Music2: Music2,
  UserPlus: UserPlus,
  Share2: Share2,
};

interface EngagementMetricCardProps {
  metric: EngagementMetric;
}

export function EngagementMetricCard({ metric }: EngagementMetricCardProps) {
  const Icon = IconMap[metric.icon] || Music2;

  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {metric.label}
          </p>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold">
              {metric.value >= 1000
                ? `${(metric.value / 1000).toFixed(1)}K`
                : metric.value}
            </h3>
            <span className="text-xs font-medium text-green-500 flex items-center">
              +{metric.growth}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
