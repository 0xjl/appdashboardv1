function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="divide-y divide-neutral-800">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="group flex items-center gap-4 p-5"
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