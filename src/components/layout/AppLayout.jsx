import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

function AppLayout({ children, activePage, onNavigate }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />
      <MobileNav activePage={activePage} onNavigate={onNavigate} />
      <main className="min-h-screen pb-24 md:ml-64 md:pb-0">
        <div className="mx-auto max-w-7xl p-5 sm:p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
}

export default AppLayout;
