import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="hover:bg-gray-700 rounded-lg px-3 py-2 transition"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="hover:bg-gray-700 rounded-lg px-3 py-2 transition"
          >
            Dashboard
          </Link>
          <Link
            href="dashboard/record-list"
            className="hover:bg-gray-700 rounded-lg px-3 py-2 transition"
          >
            Your Files
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
