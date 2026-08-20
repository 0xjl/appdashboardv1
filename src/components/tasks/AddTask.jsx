import { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) return;

    onAdd({
      id: Date.now(),
      title: title.trim(),
      category,
      completed: false,
    });

    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 border-b border-neutral-800 p-5 sm:flex-row"
    >
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-600"
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-400 outline-none"
      >
        <option>Personal</option>
        <option>Work</option>
        <option>Health</option>
        <option>Learning</option>
      </select>

      <button
        type="submit"
        className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
      >
        Add task
      </button>
    </form>
  );
}

export default AddTask;