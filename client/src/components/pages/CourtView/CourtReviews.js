import React from 'react';

const CourtReviews = (props) => {
  const { reviews } = props;
  return (
    <div className='courtview-reviews'>
      {reviews.length > 0 ? (
        <div className='courtview-reviews-container'>
          {reviews.map((review) => (
            <div className='courtview-reviews-box'>
              <p>{review.text}</p>
              <p>
                review by: {review.firstName} {review.lastName}
              </p>
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
