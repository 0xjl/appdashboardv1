import AppLayout from "./components/layout/AppLayout";

const stats = [
  {
    label: "Tasks",
    value: "8",
    description: "3 remaining",
  },
  {
    label: "Habits",
    value: "5",
    description: "2 completed today",
  },
  {
    label: "Progress",
    value: "72%",
    description: "Great momentum",
  },
];

const tasks = [
  {
    title: "Finish portfolio website",
    category: "Work",
    completed: false,
  },
  {
    title: "Go for a run",
    category: "Health",
    completed: true,
  },
  {
    title: "Study React",
    category: "Learning",
    completed: false,
  },
  {
    title: "Read for 30 minutes",
    category: "Personal",
    completed: false,
  },
];

function App() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <header>
          <p className="text-sm text-neutral-500">
            Thursday, August 20, 2026
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Good morning.
          </h1>

          <p className="mt-2 text-neutral-400">
            Here's what's happening today.
          </p>
        </header>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5"
            >
              <p className="text-sm text-neutral-500">
                {stat.label}
              </p>

              <p className="mt-3 text-3xl font-semibold">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                {stat.description}
              </p>
            </div>
          ))}
        </section>

        {/* Tasks */}
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50">
          <div className="border-b border-neutral-800 p-5">
            <h2 className="font-medium">
              Today's Tasks
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Stay focused on what matters.
            </p>
          </div>

          <div className="divide-y divide-neutral-800">
            {tasks.map((task) => (
              <div
                key={task.title}
                className="flex items-center gap-4 p-5"
              >
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    task.completed
                      ? "border-white bg-white text-black"
                      : "border-neutral-600"
                  }`}
                >
                  {task.completed && (
                    <span className="text-xs">✓</span>
                  )}
                </div>

                <div className="flex-1">
                  <p
                    className={
                      task.completed
                        ? "text-neutral-500 line-through"
                        : ""
                    }
                  >
                    {task.title}
                  </p>

                  <p className="mt-1 text-xs text-neutral-600">
                    {task.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progress */}
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium">
                Daily Progress
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                You're making good progress today.
              </p>
            </div>

            <span className="text-2xl font-semibold">
              72%
            </span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-full rounded-full bg-white"
              style={{ width: "72%" }}
            />
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

export default App;