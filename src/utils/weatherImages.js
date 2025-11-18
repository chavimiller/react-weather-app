import clouds from "../assets/images/Clouds.png";
import sunny from "../assets/images/SunnyDay.png";
import rainy from "../assets/images/Rainy.png";
import clearNight from "../assets/images/ClearNight.png";
import windy from "../assets/images/Windy.png";
import snowy from "../assets/images/Snow.png";
import foggy from "../assets/images/Fog.png";

export const iconConditions = [
  { icon: "snow", url: snowy },
  { icon: "rain", url: rainy },
  { icon: "fog", url: foggy },
  { icon: "wind", url: windy },
  { icon: "cloudy", url: clouds },
  { icon: "partly-cloudy-day", url: clouds },
  { icon: "partly-cloudy-night", url: clouds },
  { icon: "clear-day", url: sunny },
  { icon: "clear-night", url: clearNight },
];
