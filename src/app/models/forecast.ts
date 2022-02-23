export interface Temperature {
  temp: number;
  min: number;
  max: number;
}

export interface WeatherInformation {
  id: number;
  main: string;
}
export interface Forecast {
  cod: string;
  city: {
    id: string;
    name: string;
    country: string;
  };
  list: {
    dt: number;
    temp: Temperature;
    weather: { id: number; main: string }[];
  }[];
}
