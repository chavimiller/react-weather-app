const myApiKey = "8MWEEWA77AGXY3REP34Y2PKHW";

export async function fetchWeather(input = "Jerusalem") {
  let location = input;
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=hours,current&key=${myApiKey}&contentType=json&lang=en`
    );

    if (!response.ok) throw new Error("City not found.");
    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}
