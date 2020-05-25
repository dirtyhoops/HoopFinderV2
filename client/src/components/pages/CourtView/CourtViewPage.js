import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourt, getWeather } from '../../../actions/court';

import CourtInfo from './CourtInfo';
import CourtProperties from './CourtProperties';
import CourtCondition from './CourtCondition';
import CourtReviews from './CourtReviews';
import CourtLocation from './CourtLocation';
import CheckedInPlayers from './CheckedInPlayers';

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
          <CourtInfo selectedCourt={selectedCourt} />
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
            <div className='courtview-flex-right'>
              <div className='courtview-flex-right-container'>
                <CourtLocation address={selectedCourt.address} />
                <CheckedInPlayers />
              </div>
            </div>
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
