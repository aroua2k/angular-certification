export interface Weather {
  name: string;
  cod: string;
  message: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    main: string;
  }[];
}
