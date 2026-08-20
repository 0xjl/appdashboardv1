import Sidebar from "./Sidebar";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Sidebar />

      <main className="min-h-screen md:ml-64">
        <div className="mx-auto max-w-7xl p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;