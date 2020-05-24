import React, { useState } from 'react';
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

  const [star, setStar] = useState(0);

  const onClickHandler = (num) => {
    setStar(num);
  };

  const startext = [
    '',
    'ohhh no',
    'ohh yeah',
    'can be better',
    'awesomeeeeeeeeeee',
    'this is it chief',
  ];

  return (
    <div className='writeareview-wrapper'>
      {selectedCourt ? (
        <>
          <div className='writeareview container'>
            <div className='writeareview-main'>
              <h3 className='writeareview-text-name'>{selectedCourt.name}</h3>
              <form>
                <div className='writeareview-form-group'>
                  <div className='writeareview-form-group__rating'>
                    <div
                      className='writeareview-form-group__rating__stars'
                      style={{
                        '--font-size': '20px',
                        '--text-indent': '-8px',
                      }}
                    >
                      <div className='rating' data-rating={`${star}`}>
                        <i
                          className='star-1'
                          onClick={() => onClickHandler(1)}
                          onMouseEnter={() => onClickHandler(1)}
                        >
                          ★
                        </i>
                        <i
                          className='star-2'
                          onClick={() => onClickHandler(2)}
                          onMouseEnter={() => onClickHandler(2)}
                        >
                          ★
                        </i>
                        <i
                          className='star-3'
                          onClick={() => onClickHandler(3)}
                          onMouseEnter={() => onClickHandler(3)}
                        >
                          ★
                        </i>
                        <i
                          className='star-4'
                          onClick={() => onClickHandler(4)}
                          onMouseEnter={() => onClickHandler(4)}
                        >
                          ★
                        </i>
                        <i
                          className='star-5'
                          onClick={() => onClickHandler(5)}
                          onMouseEnter={() => onClickHandler(5)}
                        >
                          ★
                        </i>
                      </div>
                    </div>
                    <div className='writeareview-form-group__rating__text'>
                      <p>{startext[`${star}`]}</p>
                    </div>
                  </div>
                  <textarea placeholder='Write a review'></textarea>
                </div>
                <input
                  className='btn btn-review'
                  type='submit'
                  value='Post Review'
                ></input>
              </form>
            </div>
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
