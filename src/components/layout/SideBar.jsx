const navigation = [
  { label: "Today", active: true },
  { label: "Tasks", active: false },
  { label: "Habits", active: false },
  { label: "Analytics", active: false },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-neutral-800 bg-neutral-950 p-6 md:block">
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
            D
          </div>

          <div>
            <h1 className="font-semibold">
              DayFlow
            </h1>

            <p className="text-xs text-neutral-600">
              Personal dashboard
            </p>
          </div>
        </div>
      </div>

      <nav className="space-y-1">
        {navigation.map((item) => (
          <button
            key={item.label}
            className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${
              item.active
                ? "bg-neutral-800 text-white"
                : "text-neutral-500 hover:bg-neutral-900 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6 border-t border-neutral-800 pt-5">
        <p className="text-xs text-neutral-600">
          DayFlow v0.1
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;