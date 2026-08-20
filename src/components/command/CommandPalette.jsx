import { useEffect, useState } from "react";

const commands = [
  {
    label: "Go to Today",
    action: "Today",
  },
  {
    label: "Go to Tasks",
    action: "Tasks",
  },
  {
    label: "Go to Habits",
    action: "Habits",
  },
  {
    label: "Go to Analytics",
    action: "Analytics",
  },
];

function CommandPalette({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function handleKeyDown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open]);

  function handleCommand(action) {
    onNavigate(action);
    setOpen(false);
  }

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(search.toLowerCase()),
  );

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 hidden items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-400 shadow-2xl transition hover:border-neutral-700 hover:text-white md:flex"
      >
        <span>Search</span>

        <kbd className="rounded-md border border-neutral-700 bg-neutral-950 px-2 py-1 text-xs">
          Ctrl K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[15vh] backdrop-blur-sm">
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-neutral-800 p-4">
          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search commands..."
            className="w-full bg-transparent text-lg outline-none placeholder:text-neutral-600"
          />
        </div>

        <div className="p-2">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command) => (
              <button
                key={command.action}
                onClick={() => handleCommand(command.action)}
                className="w-full rounded-xl px-4 py-3 text-left text-sm text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
              >
                {command.label}
              </button>
            ))
          ) : (
            <div className="p-6 text-center text-sm text-neutral-600">
              No commands found.
            </div>
          )}
        </div>

        <div className="border-t border-neutral-800 px-4 py-3">
          <p className="text-xs text-neutral-600">Press Esc to close</p>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
