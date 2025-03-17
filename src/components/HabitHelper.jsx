function HabitHelper() {
  const habits = [
      "Start small and stay consistent.",
      "Track your progress daily.",
      "Celebrate small wins!",
      "Stay accountable with a friend.",
      "Visualize your success."
  ];

  const randomHabit = habits[Math.floor(Math.random() * habits.length)];

  return (
      <div>
          <h3>Habit Helper</h3>
          <p>{randomHabit}</p>
      </div>
  );
}

export default HabitHelper;
