import { LucideIcon } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface HomeCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend: string;
  trendDirection: "up" | "down";
  iconGradient: string;
}

export function HomeCard({
  title,
  value,
  icon: Icon,
  trend,
  trendDirection,
  iconGradient,
}: HomeCardProps) {
  return (
    <div className="rounded-3xl bg-card p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
      <div
        className={cn(
          "absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-10 blur-3xl transition-all group-hover:opacity-20",
          iconGradient,
        )}
      />

      <div className="flex justify-between items-start mb-6">
        <div
          className={cn(
            "p-3 rounded-2xl bg-gradient-to-br shadow-lg",
            iconGradient,
          )}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <div
          className={cn(
            "px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1",
            trendDirection === "up"
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400",
          )}
        >
          {trendDirection === "up" ? "↗" : "↘"} {trend}
        </div>
      </div>

      <div className="space-y-1 relative z-10">
        <p className="text-muted-foreground text-sm font-medium">{title}</p>
        <h3 className="text-3xl font-bold text-foreground">{value}</h3>
      </div>
    </div>
  );
}
