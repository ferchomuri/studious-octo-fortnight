export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <section id="dashboard" className="min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      </section>
      <section id="releases" className="min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Releases</h2>
      </section>
      <section id="analytics" className="min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      </section>
      <section id="fans" className="min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Fans</h2>
      </section>
    </div>
  );
}
