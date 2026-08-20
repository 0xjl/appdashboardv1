import { ListTodo } from "lucide-react";

function TaskList({ tasks, onToggle, onDelete }) {
  // Show empty state when there are no tasks
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-900">
          <ListTodo
            size={22}
            className="text-neutral-500"
          />
        </div>

        <h3 className="mt-4 font-medium">
          You're all caught up
        </h3>

        <p className="mt-1 max-w-sm text-sm text-neutral-500">
          Add a task above when something new comes up.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-neutral-800">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="group flex items-center gap-4 p-5 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/60"
        >
          <button
            onClick={() => onToggle(task.id)}
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
              task.completed
                ? "border-white bg-white text-black"
                : "border-neutral-600 hover:border-white"
            }`}
          >
            {task.completed && (
              <span className="text-xs">✓</span>
            )}
          </button>

          <div className="flex-1">
            <p
              className={
                task.completed
                  ? "text-neutral-500 line-through"
                  : "text-white"
              }
            >
              {task.title}
            </p>

            <p className="mt-1 text-xs text-neutral-600">
              {task.category}
            </p>
          </div>

          <button
            onClick={() => onDelete(task.id)}
            className="text-xs text-neutral-700 opacity-0 transition hover:text-red-400 group-hover:opacity-100"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;