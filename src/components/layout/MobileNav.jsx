import {
  LayoutDashboard,
  CheckSquare,
  Flame,
  BarChart3,
  Settings,
} from "lucide-react";

const navigation = [
  ["Today", LayoutDashboard],
  ["Tasks", CheckSquare],
  ["Habits", Flame],
  ["Analytics", BarChart3],
  ["Settings", Settings],
];

function MobileNav({
  activePage,
  onNavigate,
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-white/90 px-2 py-2 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/90 md:hidden">
      <div className="flex justify-around">

        {navigation.map(([label, Icon]) => (
          <button
            key={label}
            onClick={() => onNavigate(label)}
            className={`flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs ${
              activePage === label
                ? "text-black dark:text-white"
                : "text-neutral-500"
            }`}
          >
            <Icon size={18} />

            <span>{label}</span>
          </button>
        ))}

      </div>
    </nav>
  );
}

export default MobileNav;