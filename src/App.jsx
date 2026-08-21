import { useEffect, useState } from "react";
import AppLayout from "./components/layout/AppLayout";
import TaskList from "./components/tasks/TaskList";
import AddTask from "./components/tasks/AddTask";
import HabitList from "./components/habits/HabitList";
import Analytics from "./components/analytics/Analytics";
import CommandPalette from "./components/command/CommandPalette";
import Settings from "./components/settings/Settings";

const defaultTasks = [
  {
    id: 1,
    title: "Finish portfolio website",
    category: "Work",
    completed: false,
  },
  {
    id: 2,
    title: "Go for a run",
    category: "Health",
    completed: true,
  },
  {
    id: 3,
    title: "Study React",
    category: "Learning",
    completed: false,
  },
  {
    id: 4,
    title: "Read for 30 minutes",
    category: "Personal",
    completed: false,
  },
];

const defaultHabits = [
  {
    id: 1,
    name: "Exercise",
    description: "Move your body every day.",
    history: [true, true, false, true, true, false, false],
    streak: 4,
  },
  {
    id: 2,
    name: "Read",
    description: "Read for at least 30 minutes.",
    history: [true, true, true, true, false, false, false],
    streak: 4,
  },
  {
    id: 3,
    name: "Learn React",
    description: "Spend time improving your skills.",
    history: [true, false, true, true, true, true, false],
    streak: 5,
  },
  {
    id: 4,
    name: "Drink Water",
    description: "Stay properly hydrated.",
    history: [true, true, true, true, true, false, false],
    streak: 5,
  },
];

function App() {
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("dayflow-theme") || "dark";
});

useEffect(() => {
  document.documentElement.classList.toggle(
    "dark",
    theme === "dark"
  );
}, [theme]);
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem("dayflow-accent") || "white";
  });
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("dayflow-tasks");
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("dayflow-habits");
    return savedHabits ? JSON.parse(savedHabits) : defaultHabits;
  });
  const [activePage, setActivePage] = useState("Today");

  useEffect(() => {
    localStorage.setItem("dayflow-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("dayflow-accent", accent);
  }, [accent]);

  useEffect(() => {
    localStorage.setItem("dayflow-habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem("dayflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  function toggleHabit(habitId, dayIndex) {
    setHabits((currentHabits) =>
      currentHabits.map((habit) => {
        if (habit.id !== habitId) {
          return habit;
        }

        const newHistory = [...habit.history];

        newHistory[dayIndex] = !newHistory[dayIndex];

        let streak = 0;

        for (let i = newHistory.length - 1; i >= 0; i--) {
          if (newHistory[i]) {
            streak++;
          } else {
            break;
          }
        }

        return {
          ...habit,
          history: newHistory,
          streak,
        };
      }),
    );
  }

  function addTask(task) {
    setTasks((currentTasks) => [...currentTasks, task]);
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  const completedTasks = tasks.filter((task) => task.completed).length;

  const progress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

if (activePage === "Analytics") {
  return (
    <AppLayout
      activePage={activePage}
      onNavigate={setActivePage}
    >
      <Analytics
        tasks={tasks}
        habits={habits}
      />

      <CommandPalette
        onNavigate={setActivePage}
      />
    </AppLayout>
  );
}

if (activePage === "Settings") {
  return (
    <AppLayout
      activePage={activePage}
      onNavigate={setActivePage}
    >
      <Settings
        theme={theme}
        setTheme={setTheme}
        accent={accent}
        setAccent={setAccent}
      />

      <CommandPalette
        onNavigate={setActivePage}
      />
    </AppLayout>
  );
}

  return (
    <AppLayout activePage={activePage} onNavigate={setActivePage}>
      <div className="space-y-8">
        {/* Header */}
        <header>
          <p className="text-sm text-neutral-500">Thursday, August 20, 2026</p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Good morning.
          </h1>

          <p className="mt-2 text-neutral-400">
            Here's what's happening today.
          </p>
        </header>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
            <p className="text-sm text-neutral-500">Tasks</p>

            <p className="mt-3 text-3xl font-semibold">{tasks.length}</p>

            <p className="mt-1 text-sm text-neutral-500">
              {tasks.length - completedTasks} remaining
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
            <p className="text-sm text-neutral-500">Completed</p>

            <p className="mt-3 text-3xl font-semibold">{completedTasks}</p>

            <p className="mt-1 text-sm text-neutral-500">Keep going</p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
            <p className="text-sm text-neutral-500">Progress</p>

            <p className="mt-3 text-3xl font-semibold">{progress}%</p>

            <p className="mt-1 text-sm text-neutral-500">Daily completion</p>
          </div>
        </section>

        {/* Tasks */}
        <section className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50">
          <div className="p-5">
            <h2 className="font-medium">Today's Tasks</h2>

            <p className="mt-1 text-sm text-neutral-500">
              Stay focused on what matters.
            </p>
          </div>

          <AddTask onAdd={addTask} />

          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ) : (
            <div className="p-10 text-center">
              <p className="text-sm text-neutral-500">No tasks yet.</p>

              <p className="mt-1 text-xs text-neutral-700">
                Add something above to get started.
              </p>
            </div>
          )}
        </section>
        {/* Habits */}

        <section>
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Habits</h2>

            <p className="mt-1 text-sm text-neutral-500">
              Small actions become big results.
            </p>
          </div>

          <HabitList habits={habits} onToggle={toggleHabit} />
        </section>
        {/* Progress */}
        <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium">Daily Progress</h2>

              <p className="mt-1 text-sm text-neutral-500">
                You're {progress}% through your tasks.
              </p>
            </div>

            <span className="text-2xl font-semibold">{progress}%</span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-full rounded-full bg-black transition-all duration-700 ease-out dark:bg-white"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>
      </div>
      <CommandPalette onNavigate={setActivePage} />
    </AppLayout>
  );
}

export default App;
