import React from 'react';
import Moment from 'react-moment';

const CourtReviews = (props) => {
  const { reviews } = props;
  return (
    <div className='courtview-reviews'>
      <div className='courtview-reviews-header'>
        <p className='courtview-reviews-header-text'>Recommended Reviews</p>
      </div>
      {reviews.length > 0 ? (
        <div className='courtview-reviews-container'>
          {/* ADD SEARCH and SORT here */}
          {reviews.map((review) => (
            <div className='courtview-reviews-box'>
              <div className='courtview-reviews-box-flex'>
                <div className='courtview-reviews-box-flex-left'>
                  <div className='courtview-reviews-box-flex-left-flex'>
                    <div className='courtview-reviews__image'>
                      <img
                        src={review.avatar}
                        className={`courtview-reviews__image__img ${review.avatar_bg}`}
                      />
                    </div>
                    <div className='courtview-reviews__info'>
                      <p className='courtview-reviews-text-name'>
                        {review.firstName} {review.lastName}
                      </p>
                      <p className='courtview-reviews-text-location'>
                        {review.city}, {review.state}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='courtview-reviews-box-flex-right'>
                  <div className='courtview-reviews__rating'>
                    <div
                      className='courtview-reviews__rating__stars'
                      style={{
                        '--font-size': '14px',
                        '--text-indent': '-6px',
                      }}
                    >
                      <div className={`rating rating-${review.rating}`}>
                        <i className='star-1'>★</i>
                        <i className='star-2'>★</i>
                        <i className='star-3'>★</i>
                        <i className='star-4'>★</i>
                        <i className='star-5'>★</i>
                      </div>
                    </div>
                    <div className='courtview-reviews__rating__date'>
                      <p className='courtview-reviews-text-date'>
                        <Moment format='MM/DD/YYY'>{review.dateCreated}</Moment>
                      </p>
                    </div>
                  </div>
                  <div className='courtview-reviews__review'>
                    <p className='courtview-reviews-text-content'>
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>no review</p>
      )}
    </div>
  );
};

export default CourtReviews;
