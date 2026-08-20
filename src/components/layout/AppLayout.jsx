import Sidebar from "./Sidebar";

function AppLayout({
  children,
  activePage,
  onNavigate,
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <Sidebar
        activePage={activePage}
        onNavigate={onNavigate}
      />

      <main className="min-h-screen md:ml-64">
        <div className="mx-auto max-w-7xl p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;