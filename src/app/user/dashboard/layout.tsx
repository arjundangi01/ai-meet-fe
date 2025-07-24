import Navbar from "@/src/components/layout/navbar";
import Sidebar from "@/src/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-16">
          <Sidebar className="flex-1 bg-white border-r" />
        </div>
        <div className="md:pl-64 flex-1">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
