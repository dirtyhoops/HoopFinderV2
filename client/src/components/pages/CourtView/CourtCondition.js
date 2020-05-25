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
      <p className='courtview-condition-text-header  u-text-uppercase'>
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
            <p className='courtview-condition-text-subhheader'>Weather</p>
            <p className='courtview-condition-text-info'>
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
            <p className='courtview-condition-text-subhheader'>Temperature</p>
            <p className='courtview-condition-text-info'>
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
            <p className='courtview-condition-text-subhheader'>Humidity</p>
            <p className='courtview-condition-text-info'>
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
            <p className='courtview-condition-text-subhheader'>Wind</p>
            <p className='courtview-condition-text-info'>
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
            <p className='courtview-condition-text-subhheader'>Local Time</p>
            <p className='courtview-condition-text-info'>
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
            <p className='courtview-condition-text-subhheader'>
              Time of Sunset
            </p>
            <p className='courtview-condition-text-info'>
              {convertTime(selectedCourtWeather.sys.sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtCondition;
