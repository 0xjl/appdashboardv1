import WeeklyChart from "./WeeklyChart";
import StatCard from "./StatCard";

function Analytics({ tasks, habits }) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const taskCompletion =
    tasks.length > 0
      ? Math.round(
          (completedTasks / tasks.length) * 100
        )
      : 0;

  const completedHabitDays = habits.reduce(
    (total, habit) =>
      total +
      habit.history.filter(Boolean).length,
    0
  );

  const totalHabitDays = habits.length * 7;

  const habitConsistency =
    totalHabitDays > 0
      ? Math.round(
          (completedHabitDays / totalHabitDays) * 100
        )
      : 0;

  const productivityScore = Math.round(
    (taskCompletion + habitConsistency) / 2
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <header>
        <p className="text-sm text-neutral-500">
          Performance overview
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Analytics
        </h1>

        <p className="mt-2 text-neutral-400">
          See how consistently you're showing up.
        </p>
      </header>

      {/* Stats */}

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          label="Productivity Score"
          value={`${productivityScore}%`}
          change="Overall performance"
        />

        <StatCard
          label="Tasks Completed"
          value={completedTasks}
          change={`${taskCompletion}% completion rate`}
        />

        <StatCard
          label="Habit Consistency"
          value={`${habitConsistency}%`}
          change={`${completedHabitDays} completions`}
        />

        <StatCard
          label="Current Streak"
          value={
            habits.length > 0
              ? Math.max(
                  ...habits.map(
                    (habit) => habit.streak
                  )
                )
              : 0
          }
          change="Best active streak"
        />

      </section>

      {/* Weekly Chart */}

      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">

        <div className="mb-6">
          <h2 className="font-medium">
            Weekly Activity
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            Tasks completed over the past week.
          </p>
        </div>

        <WeeklyChart />

      </section>

      {/* Breakdown */}

      <section className="grid gap-4 lg:grid-cols-2">

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">

          <h2 className="font-medium">
            Task Completion
          </h2>

          <div className="mt-6">

            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">
                Completed
              </span>

              <span>
                {taskCompletion}%
              </span>
            </div>

            <div className="mt-3 h-2 rounded-full bg-neutral-800">
              <div
                className="h-full rounded-full bg-white transition-all"
                style={{
                  width: `${taskCompletion}%`,
                }}
              />
            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">

          <h2 className="font-medium">
            Habit Consistency
          </h2>

          <div className="mt-6">

            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">
                Weekly consistency
              </span>

              <span>
                {habitConsistency}%
              </span>
            </div>

            <div className="mt-3 h-2 rounded-full bg-neutral-800">
              <div
                className="h-full rounded-full bg-white transition-all"
                style={{
                  width: `${habitConsistency}%`,
                }}
              />
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Analytics;