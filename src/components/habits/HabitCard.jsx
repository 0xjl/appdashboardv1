function calculateStreak(history) {
  let currentStreak = 0;
  let longestStreak = 0;

  for (const completed of history) {
    if (completed) {
      currentStreak++;
      longestStreak = Math.max(
        longestStreak,
        currentStreak
      );
    } else {
      currentStreak = 0;
    }
  }

  return longestStreak;
}

function HabitCard({ habit, onToggle }) {
  const streak = calculateStreak(habit.history);
  const completedDays = habit.history.filter(Boolean).length;
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{habit.name}</h3>

          <p className="mt-1 text-sm text-neutral-500">{habit.description}</p>
        </div>

        <div className="text-right">
          <p className="text-xl font-semibold">{streak}</p>

          <p className="text-xs text-neutral-600">day streak</p>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        {habit.history.map((completed, index) => (
          <button
            key={index}
            onClick={() => onToggle(habit.id, index)}
            className={`h-8 w-8 rounded-lg border text-xs transition ${
              completed
                ? "border-white bg-white text-black"
                : "border-neutral-800 bg-neutral-950 text-neutral-600 hover:border-neutral-600"
            }`}
            title={`Day ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-neutral-600">
        <span>{completedDays}/7 completed</span>

        <span>{Math.round((completedDays / 7) * 100)}%</span>
      </div>
    </div>
  );
}

export default HabitCard;
