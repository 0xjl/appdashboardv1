import {
  LayoutDashboard,
  CheckSquare,
  Flame,
  BarChart3,
  Settings,
} from "lucide-react";

const navigation = [
  {
    label: "Today",
    icon: LayoutDashboard,
  },
  {
    label: "Tasks",
    icon: CheckSquare,
  },
  {
    label: "Habits",
    icon: Flame,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 md:block">
      {/* Logo */}

      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white dark:bg-white dark:text-black">
            D
          </div>

          <div>
            <h1 className="font-semibold">DayFlow</h1>

            <p className="text-xs text-neutral-500">Personal dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav className="space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.label;

          return (
            <button
              key={item.label}
              onClick={() => onNavigate(item.label)}
              style={
                active
                  ? {
                      backgroundColor: "var(--accent)",
                      color: "var(--accent-foreground)",
                    }
                  : undefined
              }
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                active
                  ? "text-white"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:hover:bg-neutral-900 dark:hover:text-white"
              }`}
            >
              <Icon size={17} />

              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="absolute bottom-6 left-6 right-6 border-t border-neutral-200 pt-5 dark:border-neutral-800">
        <p className="text-xs text-neutral-500">DayFlow</p>

        <p className="mt-1 text-xs text-neutral-400">Version 0.1</p>
      </div>
    </aside>
  );
}

export default Sidebar;
