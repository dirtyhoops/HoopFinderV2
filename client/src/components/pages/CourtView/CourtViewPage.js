import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourt, getWeather } from '../../../actions/court';

import CourtProperties from './CourtProperties';
import CourtCondition from './CourtCondition';
import CourtReviews from './CourtReviews';

const CourtViewPage = ({
  court: { selectedCourt, weatherLoaded, selectedCourtWeather },
  getCourt,
  getWeather,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    getCourt(id);
  }, []);

  if (!weatherLoaded && selectedCourt !== null) {
    getWeather(selectedCourt.address.zipcode);
  }

  return (
    <div className='courtview-wrapper'>
      {selectedCourt ? (
        <div className='courtview container'>
          <div className='courtview-info'>
            <p className='courtview-text-name u-text-uppercase'>
              {selectedCourt.name}
            </p>
            <p className='courtview-text-address u-text-capitalize'>
              {selectedCourt.address.street}, {selectedCourt.address.city},{' '}
              {selectedCourt.address.state} {selectedCourt.address.zipcode}
            </p>
            {/* <p>{selectedCourt.rating}</p> */}
            <div
              className='stars-rating u-margin-top-sm'
              style={{
                '--rating': `${selectedCourt.rating}`,
                '--star-size': '25px',
              }}
            ></div>
            <button className='btn u-margin-right-sm'>Check In</button>
            <Link to={`/writeareview/${selectedCourt._id}`}>
              <button className='btn'>Write a Review</button>
            </Link>
          </div>

          <CourtProperties selectedCourt={selectedCourt} />
          {/* ADD THE IMAGE HERE */}
          <div className='courtview-image'>
            <div className='courtview-image-main'>
              <img src={selectedCourt.images[0]} />
            </div>
          </div>
          {selectedCourtWeather && (
            <CourtCondition selectedCourtWeather={selectedCourtWeather} />
          )}
          <div className='courtview-flex'>
            <div className='courtview-flex-left'>
              <CourtReviews reviews={selectedCourt.reviews} />
            </div>
            <div className='courtview-flex-right'>FLEX RIGHT!!!</div>
          </div>
        </div>
      ) : // change the null to a spinner that is saying COURT IS LOADING later
      null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  court: state.court,
});

export default connect(mapStateToProps, { getCourt, getWeather })(
  CourtViewPage
);
