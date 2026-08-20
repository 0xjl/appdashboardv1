import HabitCard from "./HabitCard";

function HabitList({ habits, onToggle }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default HabitList;