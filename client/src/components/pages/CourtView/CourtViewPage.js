import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourt } from '../../../actions/court';

import iconcourt from '../../../img/icon-court.png';
import iconheight from '../../../img/icon-height.png';
import iconhoop from '../../../img/icon-hoop.png';
import iconlight from '../../../img/icon-light.png';
import iconpublic from '../../../img/icon-public.png';
import iconsun from '../../../img/icon-sun.png';

const CourtViewPage = ({
  court: { selectedCourt },
  getCourt,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    getCourt(id);
  }, []);

  return (
    <div className='courtview-wrapper'>
      <div className='courtview container'>
        <div className='courtview-info'>
          <p className='courtview-text-name u-text-uppercase'>rucker park</p>
          <p className='courtview-text-address u-text-capitalize'>
            155th street & frederick douglass blvd, new yord, NY 10039
          </p>
        </div>
        {/* // MAKE THIS A PROPERTIES COMPONENT LATER */}
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
                <p className='courtview-text-properties--bottom'>Concrete</p>
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
                <p className='courtview-text-properties--bottom'>2</p>
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
                <p className='courtview-text-properties--bottom'>10 Ft.</p>
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
                <p className='courtview-text-properties--bottom'>Outdoor</p>
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
                <p className='courtview-text-properties--bottom'>Yes</p>
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
                <p className='courtview-text-properties--bottom'>Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  court: state.court,
});

export default connect(mapStateToProps, { getCourt })(CourtViewPage);
