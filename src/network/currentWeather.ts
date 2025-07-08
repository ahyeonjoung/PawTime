import { axiosInstance } from '.';

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const fetchCurrentWeather = async (lat: number, lon: number): Promise<WeatherResponse> => {
  const { data } = await axiosInstance.get<WeatherResponse>('/weather', {
    params: {
      lat,
      lon,
      appid: '936f804db2c648682e842a206a43015a',
      units: 'metric',
      lang: 'kr',
    },
  });
  return data;
};
