import { AnimatedSection } from "@/components/animated-section";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <AnimatedSection id="home" className="min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Home</h2>
      </AnimatedSection>
      <AnimatedSection id="releases" className="min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Releases</h2>
      </AnimatedSection>
      <AnimatedSection id="analytics" className="min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      </AnimatedSection>
      <AnimatedSection id="fans" className="min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Fans</h2>
      </AnimatedSection>
    </div>
  );
}
