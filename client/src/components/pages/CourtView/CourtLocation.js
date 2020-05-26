import React from 'react';

const CourtLocation = (props) => {
  const { address } = props;

  return (
    <div className='courtview-location'>
      <div className='courtview-location-map'></div>
      <div className='courtview-location-address'>
        <div className='courtview-location-address-left'>
          <p className='courtview-location-text'>{address.street}</p>
          <p className='courtview-location-text'>
            {address.city}, {address.state} {address.zipcode}
          </p>
        </div>
        <div className='courtview-location-address-right'>
          <button className='btn btn-get-direction'>Get Directions</button>
        </div>
      </div>
    </div>
  );
};

export default CourtLocation;
