import React from 'react';
import { Link } from 'react-router-dom';

import Courts from '../../courts/Courts';

const FeaturedCourts = (props) => {
  const { courts } = props;
  return (
    <div className='featured-courts-wrapper'>
      <div className='featured-courts container'>
        <div className='featured-courts-header u-margin-bottom-md'>
          <p className='heading-secondary'>featured courts</p>
        </div>
        <Courts courts={courts} />
      </div>
    </div>
  );
};

export default FeaturedCourts;

// Just have a different set of court. make it that it pulls out random court or most popular court
