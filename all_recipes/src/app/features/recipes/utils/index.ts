export const getHoursAndMinutes = (num: number) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;

  if (hours < 1) {
    return `${minutes}'`;
  }

  if (minutes < 1) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}'`;
};
