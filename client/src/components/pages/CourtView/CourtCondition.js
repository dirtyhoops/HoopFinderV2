import React from 'react';

import iconsunset from '../../../img/icon-sunset.png';
import icontemperature from '../../../img/icon-temperature.png';
import iconhumidity from '../../../img/icon-humidity.png';
import icontime from '../../../img/icon-time.png';
import iconwind from '../../../img/icon-wind.png';
import iconweather from '../../../img/icon-weather.png';

import iconsun from '../../../img/icon-sun.png';

const CourtCondition = (props) => {
  return (
    <div className='courtview-condition u-margin-top-md'>
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
            <p className='courtview-text-condition--bottom'>Clear Sky</p>
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
              82&#176; degree F
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
            <p className='courtview-text-condition--bottom'>45%</p>
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
            <p className='courtview-text-condition--bottom'>Light Breeze</p>
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
            <p className='courtview-text-condition--bottom'>10:20 AM</p>
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
            <p className='courtview-text-condition--top'>Time until Sunset</p>
            <p className='courtview-text-condition--bottom'>00.49 hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtCondition;
