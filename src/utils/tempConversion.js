export function convertTemp(temp, unit) {
  if (unit === "°C") {
    return ((temp - 32) * 5) / 9;
  }
  return temp;
}
