import React, { useState } from 'react';
import Moment from 'react-moment';

const RecentReviews = (props) => {
  const { reviews } = props;
  const [toggler, setToggler] = useState(true);

  const toggleHandler = () => {
    setToggler(!toggler);
  };

  return (
    <div
      className={`writeareview-recentreviews ${
        toggler
          ? 'writeareview-recentreviews-show'
          : 'writeareview-recentreviews-hide'
      }`}
    >
      <div
        className='writeareview-recentreviews-toggler'
        onClick={() => toggleHandler()}
      ></div>
      <div className='writeareview-recentreviews-content'>
        <div className='writeareview-recentreviews-header'>
          <p className='writeareview-recentreviews-header-text'>
            Recent Reviews
          </p>
        </div>
        <div className='writeareview-recentreviews-grid'>
          {reviews.map((review) => (
            <div
              key={review._id}
              className='writeareview-recentreviews-grid-box'
            >
              <div className='writeareview-recentreviews-grid-box__header'>
                <div className='writeareview-recentreviews-grid-box__header__image'>
                  <img
                    src={review.avatar}
                    className={`writeareview-recentreviews-grid-box__header__image__img ${review.avatar_bg}`}
                  />
                </div>
                <div className='writeareview-recentreviews-grid-box__header__info'>
                  <p className='writeareview-recentreviews-text-name'>
                    {review.firstName} {review.lastName}
                  </p>
                  <p className='writeareview-recentreviews-text-location'>
                    {review.city}, {review.state}
                  </p>
                </div>
              </div>
              <div className='writeareview-recentreviews-grid-box__rating'>
                <div className='writeareview-recentreviews-grid-box__rating__stars'>
                  <div
                    className='rating'
                    style={{
                      '--font-size': '13px',
                      '--text-indent': '-5px',
                    }}
                    data-rating={`${Math.ceil(review.rating * 2) / 2}`}
                  >
                    <i className='star-1'>★</i>
                    <i className='star-2'>★</i>
                    <i className='star-3'>★</i>
                    <i className='star-4'>★</i>
                    <i className='star-5'>★</i>
                  </div>
                </div>
                <div className='writeareview-recentreviews-grid-box__rating__date'>
                  <Moment format='M/D/YYYYY'>{review.dateCreated}</Moment>
                </div>
              </div>
              <div className='writeareview-recentreviews-grid-box__text'>
                <p className='writeareview-recentreviews-text-review'>
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentReviews;
