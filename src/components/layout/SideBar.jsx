function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-neutral-800 bg-neutral-950 p-6 md:block">
      <div className="mb-10">
        <h1 className="text-xl font-semibold tracking-tight">
          DayFlow
        </h1>

        <p className="mt-1 text-sm text-neutral-500">
          Your day, organized.
        </p>
      </div>

      <nav className="space-y-2">
        <button className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-left text-sm">
          Today
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-neutral-400 hover:bg-neutral-900 hover:text-white">
          Tasks
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-neutral-400 hover:bg-neutral-900 hover:text-white">
          Habits
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-neutral-400 hover:bg-neutral-900 hover:text-white">
          Analytics
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;