import { useMemo, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function Tasks({ tasks, onAdd, onToggle, onDelete }) {
  const [filter, setFilter] = useState("all");

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = tasks.length - completedTasks;

  const filteredTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  const filters = [
    {
      label: "All",
      value: "all",
      count: tasks.length,
    },
    {
      label: "Active",
      value: "active",
      count: activeTasks,
    },
    {
      label: "Completed",
      value: "completed",
      count: completedTasks,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <header>
        <p className="text-sm text-neutral-500">
          Stay organized
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Tasks
        </h1>

        <p className="mt-2 text-neutral-500">
          {activeTasks} tasks remaining.
        </p>
      </header>

      {/* Add Task */}

      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">

        <div className="border-b border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="font-medium">
            Add a task
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            What needs to get done?
          </p>

          <div className="mt-5">
            <AddTask onAdd={onAdd} />
          </div>
        </div>

        {/* Filters */}

        <div className="flex items-center gap-2 border-b border-neutral-200 p-4 dark:border-neutral-800">

          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`rounded-lg px-3 py-2 text-sm transition ${
                filter === item.value
                  ? "bg-neutral-950 text-white dark:bg-white dark:text-black"
                  : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
            >
              {item.label}

              <span className="ml-2 opacity-50">
                {item.count}
              </span>
            </button>
          ))}

        </div>

        {/* Tasks */}

        <TaskList
          tasks={filteredTasks}
          onToggle={onToggle}
          onDelete={onDelete}
        />

      </section>

    </div>
  );
}

export default Tasks;