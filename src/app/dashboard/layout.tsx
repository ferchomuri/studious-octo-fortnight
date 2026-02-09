export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen mx-4 mt-4 md:mx-10 md:mt-10 lg:mx-20 lg:mt-20">
      {children}
    </div>
  );
}
