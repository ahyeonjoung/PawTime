import logoImage from '../assets/PawTime.png';
import henzelSmileImage from '../assets/HenzelSmile.png';

import { useCurrentWeather } from '../hooks/useCurrentWeather';

export const MainPage = () => {
  const { calculateResult, data } = useCurrentWeather(37.7, 126.76);
  if (!data || !calculateResult) {
    return;
  }
  const {
    main: { temp, feels_like, humidity },
    weather: [{ description }],
  } = data;

  const { isTimetoWalk, isSafeTemp, isSafeFeelsLike, isModerateHumidity, isSafeWind, isGoodWeather } = calculateResult;

  const reasonList = [];
  if (!isSafeTemp) {
    reasonList.push('온도가 너무 높아요.');
  }
  if (!isSafeFeelsLike) {
    reasonList.push('체감 온도가 너무 높아요.');
  }
  if (!isModerateHumidity) {
    reasonList.push('습도가 너무 높아요.');
  }
  if (!isSafeWind) {
    reasonList.push('바람이 너무 강해요.');
  }
  if (!isGoodWeather) {
    reasonList.push('날씨가 좋지 않아요.');
  }

  return (
    <div className="main-container">
      <img src={logoImage} alt="PawTime Logo" className="logo" />

      <div className="weather-info">
        <div className="info">현재 온도: {temp}℃</div>
        <div className="info">체감 온도: {feels_like}℃</div>
        <div className="info">날씨: {description}</div>
        <div className="info">습도: {humidity}%</div>
      </div>
      <img src={henzelSmileImage} alt="Henzel Smile" className="logo" />
      <div className={`result-message ${isTimetoWalk ? 'good' : 'bad'}`}>
        {isTimetoWalk ? '헨젤이는 지금 산책하기 좋아요! 🐶' : '헨젤이가 산책하기엔 날씨가 안좋아요 😥'}
      </div>

      {!isTimetoWalk && (
        <ul className="reason-list">
          {reasonList.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
