import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourt } from '../../../actions/court';

import RecentReviews from './RecentReviews';

const WriteaReviewPage = ({
  court: { selectedCourt },
  match: {
    params: { id },
  },
  getCourt,
}) => {
  // if selected court is not loading, do getCourt(id)
  if (selectedCourt === null) {
    getCourt(id);
  }

  return (
    <div className='writeareview-wrapper'>
      {selectedCourt ? (
        <>
          <div className='writeareview container'>
            <div className='writeareview-main'>
              <h3 className='writeareview-text-name'>{selectedCourt.name}</h3>
              {/* <div className='writeareview-form'> */}
              <form>
                <div className='writeareview-form-group'>
                  <p>RATING STARS</p>
                  <textarea placeholder='Write a review'></textarea>
                </div>
                <input
                  className='btn btn-review'
                  type='submit'
                  value='Post Review'
                ></input>
              </form>
            </div>
            {/* </div> */}
          </div>
          <RecentReviews reviews={selectedCourt.reviews} />
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  court: state.court,
});

export default connect(mapStateToProps, { getCourt })(WriteaReviewPage);
