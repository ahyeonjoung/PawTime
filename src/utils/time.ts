import { type WeatherResponse } from '@/network/currentWeather';

export const calculateWalkTime = (currentWeather: WeatherResponse) => {
  const temp = currentWeather.main.temp;
  const feelsLike = currentWeather.main.feels_like;
  const humidity = currentWeather.main.humidity;
  const wind = currentWeather.wind.speed;
  const weatherMain = currentWeather.weather[0].main;
  const dt = currentWeather.dt; // UNIX timestamp
  const timezoneOffset = currentWeather.timezone;

  // 현재 시간 (현지 기준)
  const localDate = new Date((dt + timezoneOffset) * 1000);
  const hour = localDate.getUTCHours(); // 현지 시각

  const isDaytime = hour >= 7 && hour <= 23;
  const isSafeTemp = temp <= 30;
  const isSafeFeelsLike = feelsLike <= 33;
  const isModerateHumidity = humidity <= 70;
  const isSafeWind = wind <= 6;
  const isGoodWeather = ['Clear', 'Clouds'].includes(weatherMain);

  return {
    isDaytime,
    isSafeTemp,
    isSafeFeelsLike,
    isModerateHumidity,
    isSafeWind,
    isGoodWeather,
    isTimetoWalk: isDaytime && isSafeTemp && isSafeFeelsLike && isModerateHumidity && isSafeWind && isGoodWeather,
  };
};
