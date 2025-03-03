const getRemainingDays = (currentDay: string) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = daysOfWeek.indexOf(currentDay);
  const remainingDays = [
    ...daysOfWeek.slice(dayIndex + 1),
    ...daysOfWeek.slice(0, dayIndex)
  ];

  return remainingDays;
}

export default getRemainingDays;