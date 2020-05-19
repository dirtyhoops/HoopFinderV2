import React from 'react';
import Moment from 'react-moment';

import iconsunset from '../../../img/icon-sunset.png';
import icontemperature from '../../../img/icon-temperature.png';
import iconhumidity from '../../../img/icon-humidity.png';
import icontime from '../../../img/icon-time.png';
import iconwind from '../../../img/icon-wind.png';
import iconweather from '../../../img/icon-weather.png';
import { GET_SELECTED_COURT_WEATHER } from '../../../actions/types';

const CourtCondition = (props) => {
  const { selectedCourtWeather } = props;

  // convert Kelvin to Farenheit
  const convertKtoF = (kelvinValue) => {
    return Math.round((kelvinValue - 273.15) * (9 / 5) + 32);
  };

  const convertTime = (dt) => {
    return (
      <Moment unix format='hh:mm A'>
        {dt}
      </Moment>
    );
  };

  return (
    <div className='courtview-condition'>
      <p className='courtview-text-subheader  u-text-uppercase'>
        court condition
      </p>
      <div className='courtview-condition__grid'>
        <div className='courtview-condition__grid-box'>
          <div className='courtview-condition__grid-box--icon'>
            <img
              className='courtview-condition__grid-box--icon-image'
              src={iconweather}
            />
          </div>
          <div className='courtview-condition__grid-box--info'>
            <p className='courtview-text-condition--top'>Weather</p>
            <p className='courtview-text-condition--bottom'>
              {selectedCourtWeather.weather[0].description}
            </p>
          </div>
        </div>
        <div className='courtview-condition__grid-box'>
          <div className='courtview-condition__grid-box--icon'>
            <img
              className='courtview-condition__grid-box--icon-image'
              src={icontemperature}
            />
          </div>
          <div className='courtview-condition__grid-box--info'>
            <p className='courtview-text-condition--top'>Temperature</p>
            <p className='courtview-text-condition--bottom'>
              {convertKtoF(selectedCourtWeather.main.temp)}
              &#176; F
            </p>
          </div>
        </div>
        <div className='courtview-condition__grid-box'>
          <div className='courtview-condition__grid-box--icon'>
            <img
              className='courtview-condition__grid-box--icon-image'
              src={iconhumidity}
            />
          </div>
          <div className='courtview-condition__grid-box--info'>
            <p className='courtview-text-condition--top'>Humidity</p>
            <p className='courtview-text-condition--bottom'>
              {selectedCourtWeather.main.humidity}%
            </p>
          </div>
        </div>
        <div className='courtview-condition__grid-box'>
          <div className='courtview-condition__grid-box--icon'>
            <img
              className='courtview-condition__grid-box--icon-image'
              src={iconwind}
            />
          </div>
          <div className='courtview-condition__grid-box--info'>
            <p className='courtview-text-condition--top'>Wind</p>
            <p className='courtview-text-condition--bottom'>
              {selectedCourtWeather.wind.speed} MPH
            </p>
          </div>
        </div>
        <div className='courtview-condition__grid-box'>
          <div className='courtview-condition__grid-box--icon'>
            <img
              className='courtview-condition__grid-box--icon-image'
              src={icontime}
            />
          </div>
          <div className='courtview-condition__grid-box--info'>
            <p className='courtview-text-condition--top'>Local Time</p>
            <p className='courtview-text-condition--bottom'>
              {convertTime(selectedCourtWeather.dt)}
            </p>
          </div>
        </div>
        <div className='courtview-condition__grid-box'>
          <div className='courtview-condition__grid-box--icon'>
            <img
              className='courtview-condition__grid-box--icon-image'
              src={iconsunset}
            />
          </div>
          <div className='courtview-condition__grid-box--info'>
            <p className='courtview-text-condition--top'>Time of Sunset</p>
            <p className='courtview-text-condition--bottom'>
              {convertTime(selectedCourtWeather.sys.sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtCondition;
