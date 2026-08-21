import HabitList from "./HabitList";

function Habits({ habits, onToggle }) {
  const totalCompleted = habits.reduce(
    (total, habit) =>
      total +
      habit.history.filter(Boolean).length,
    0
  );

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm text-neutral-500">
          Build consistency
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Habits
        </h1>

        <p className="mt-2 text-neutral-500">
          {totalCompleted} habit completions this week.
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="border-b border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="font-medium">
            Your habits
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            Small actions become big results.
          </p>
        </div>

        <HabitList
          habits={habits}
          onToggle={onToggle}
        />
      </section>
    </div>
  );
}

export default Habits;