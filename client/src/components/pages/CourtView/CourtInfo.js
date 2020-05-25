import React from 'react';
import { Link } from 'react-router-dom';

const CourtInfo = (props) => {
  const { selectedCourt } = props;
  return (
    <div className='courtview-info'>
      <p className='courtview-info-text-name'>{selectedCourt.name}</p>
      {/* <p className='courtview-info-text-address'>
        {selectedCourt.address.street}, {selectedCourt.address.city},{' '}
        {selectedCourt.address.state} {selectedCourt.address.zipcode}
      </p> */}
      <div className='courtview-info-rating'>
        <div
          className='courtview-info-rating__stars'
          style={{
            '--font-size': '20px',
            '--text-indent': '-8px',
          }}
        >
          <div
            className='rating'
            data-rating={`${Math.ceil(selectedCourt.rating * 2) / 2}`}
          >
            <i className='star-1'>★</i>
            <i className='star-2'>★</i>
            <i className='star-3'>★</i>
            <i className='star-4'>★</i>
            <i className='star-5'>★</i>
          </div>
        </div>
        <p className='courtview-info-rating-text-count'>
          {selectedCourt.reviews.length} reviews
        </p>
      </div>

      <Link to={`/writeareview/${selectedCourt._id}`}>
        <button className='btn btn-lg btn-lg--danger u-margin-top-sm'>
          Write a Review
        </button>
      </Link>
    </div>
  );
};

export default CourtInfo;
