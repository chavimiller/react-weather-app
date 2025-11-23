export default function convertUnit() {
  setUnit((prev) => (prev === "°C" ? "°F" : "°C"));
}

export default function convertTemp(temp, unit) {
  if (unit === "°C") {
    return ((temp - 32) * 5) / 9;
  }
  return temp;
}
