import React from 'react';

const CourtReviews = (props) => {
  const { reviews } = props;
  return (
    <div className='courtview-reviews'>
      {reviews.length > 0 ? (
        <div className='courtview-reviews-container'>
          <p>
            review by: {reviews[0].firstName} {reviews[0].lastName}
          </p>
        </div>
      ) : (
        <p>no review</p>
      )}
    </div>
  );
};

export default CourtReviews;
