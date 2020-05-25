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
    <div className='courtview-properties u-margin-top-sm'>
      <p className='courtview-properties-text-header  u-text-uppercase'>
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
            <p className='courtview-properties-text-subheader'>Surface Type</p>
            <p className='courtview-properties-text-info'>
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
            <p className='courtview-properties-text-subheader'>No. of Hoops</p>
            <p className='courtview-properties-text-info'>
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
            <p className='courtview-properties-text-subheader'>Rim Height</p>
            <p className='courtview-properties-text-info'>
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
            <p className='courtview-properties-text-subheader'>
              Indoor/Outdoor
            </p>
            <p className='courtview-properties-text-info'>
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
            <p className='courtview-properties-text-subheader'>Lighting</p>
            <p className='courtview-properties-text-info'>
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
            <p className='courtview-properties-text-subheader'>Public</p>
            <p className='courtview-properties-text-info'>
              {selectedCourt.isPublic}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtProperties;
