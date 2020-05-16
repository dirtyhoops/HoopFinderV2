import React from 'react';

import iconcourt from '../../../img/icon-court.png';
import iconheight from '../../../img/icon-height.png';
import iconhoop from '../../../img/icon-hoop.png';
import iconlight from '../../../img/icon-light.png';
import iconpublic from '../../../img/icon-public.png';
import iconsun from '../../../img/icon-sun.png';

const CourtProperties = (props) => {
  const { selectedCourt } = props;
  return (
    <div className='courtview-properties u-margin-top-md'>
      <p className='courtview-text-subheader  u-text-uppercase'>
        court properties
      </p>
      <div className='courtview-properties__grid'>
        <div className='courtview-properties__grid-box'>
          <div className='courtview-properties__grid-box--icon'>
            <img
              className='courtview-properties__grid-box--icon-image'
              src={iconcourt}
            />
          </div>
          <div className='courtview-properties__grid-box--info'>
            <p className='courtview-text-properties--top'>Surface Type</p>
            <p className='courtview-text-properties--bottom'>
              {selectedCourt.surfaceType}
            </p>
          </div>
        </div>
        <div className='courtview-properties__grid-box'>
          <div className='courtview-properties__grid-box--icon'>
            <img
              className='courtview-properties__grid-box--icon-image'
              src={iconhoop}
            />
          </div>
          <div className='courtview-properties__grid-box--info'>
            <p className='courtview-text-properties--top'>No. of Hoops</p>
            <p className='courtview-text-properties--bottom'>
              {selectedCourt.numberOfHoops}
            </p>
          </div>
        </div>
        <div className='courtview-properties__grid-box'>
          <div className='courtview-properties__grid-box--icon'>
            <img
              className='courtview-properties__grid-box--icon-image'
              src={iconheight}
            />
          </div>
          <div className='courtview-properties__grid-box--info'>
            <p className='courtview-text-properties--top'>Rim Height</p>
            <p className='courtview-text-properties--bottom'>
              {selectedCourt.rimHeight}.
            </p>
          </div>
        </div>
        <div className='courtview-properties__grid-box'>
          <div className='courtview-properties__grid-box--icon'>
            <img
              className='courtview-properties__grid-box--icon-image'
              src={iconsun}
            />
          </div>
          <div className='courtview-properties__grid-box--info'>
            <p className='courtview-text-properties--top'>Indoor/Outdoor</p>
            <p className='courtview-text-properties--bottom'>
              {selectedCourt.isIndoor === 'yes' ? 'indoor' : 'outdoor'}
            </p>
          </div>
        </div>
        <div className='courtview-properties__grid-box'>
          <div className='courtview-properties__grid-box--icon'>
            <img
              className='courtview-properties__grid-box--icon-image'
              src={iconlight}
            />
          </div>
          <div className='courtview-properties__grid-box--info'>
            <p className='courtview-text-properties--top'>Lighting</p>
            <p className='courtview-text-properties--bottom'>
              {selectedCourt.isLighting}
            </p>
          </div>
        </div>
        <div className='courtview-properties__grid-box'>
          <div className='courtview-properties__grid-box--icon'>
            <img
              className='courtview-properties__grid-box--icon-image'
              src={iconpublic}
            />
          </div>
          <div className='courtview-properties__grid-box--info'>
            <p className='courtview-text-properties--top'>Public</p>
            <p className='courtview-text-properties--bottom'>
              {selectedCourt.isPublic}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtProperties;
