import { recentReleases } from "@/src/lib/mock-data";
import { ReleaseCard } from "@/src/components/releases/ReleaseCard";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Recent Releases</h2>
          <p className="text-muted-foreground">Your latest tracks and albums</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recentReleases.map((release) => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>
      </div>
    </div>
  );
}
