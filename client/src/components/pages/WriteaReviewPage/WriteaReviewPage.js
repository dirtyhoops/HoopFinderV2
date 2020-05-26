import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourt, addReview } from '../../../actions/court';

import RecentReviews from './RecentReviews';

const WriteaReviewPage = ({
  court: { selectedCourt },
  match: {
    params: { id },
  },
  getCourt,
  addReview,
}) => {
  // if selected court is not loading, do getCourt(id)
  if (selectedCourt === null) {
    getCourt(id);
  }

  // for the Amount of star
  // const [star, setStar] = useState(0);

  const [formData, setFormData] = useState({
    rating: 0,
    ratingTemp: 0,
    text: '',
  });

  const { rating, ratingTemp, text } = formData;

  // This is the text for star rating
  const ratingText = [
    'Select your rating',
    'Ohhh no',
    "Meh. I've experienced better",
    'Ohhh yeah',
    "Yay! I'm a fan",
    'This is it chief',
  ];

  // Just an array so I can map the <i> 5 time
  const loop = [1, 2, 3, 4, 5];

  // Change the star for rating number
  const onClickHandler = (num) => {
    setFormData({ ...formData, rating: num });
    setFormData({ ...formData, ratingTemp: num });
  };

  // Just updates the review text for every keystroke
  const onChange = (e) => {
    setFormData({ ...formData, text: e.target.value });
  };

  // Just updates the review text for every keystroke
  const onHover = (num) => setFormData({ ...formData, rating: num });

  // Just reverts back to the clicked star
  const onHoverOut = () => setFormData({ ...formData, rating: ratingTemp });

  const onSubmit = (e) => {
    e.preventDefault();
    addReview(id, { formData });
  };

  return (
    <div className='writeareview-wrapper'>
      {selectedCourt ? (
        <>
          <div className='writeareview container'>
            <div className='writeareview-main'>
              <h3 className='writeareview-text-name'>{selectedCourt.name}</h3>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='writeareview-form-group'>
                  <div className='writeareview-form-group__rating'>
                    <div
                      className='writeareview-form-group__rating__stars'
                      style={{
                        '--font-size': '20px',
                        '--text-indent': '-8px',
                      }}
                    >
                      <div className='rating' data-rating={`${rating}`}>
                        {loop.map((value, index) => (
                          <i
                            key={index}
                            className={`star-${value}`}
                            onClick={() => onClickHandler(`${value}`)}
                            onMouseEnter={() => onHover(`${value}`)}
                            onMouseLeave={() => onHoverOut()}
                          >
                            ★
                          </i>
                        ))}
                      </div>
                    </div>
                    <div className='writeareview-form-group__rating__text'>
                      <p>{ratingText[`${rating}`]}</p>
                    </div>
                  </div>
                  <textarea
                    placeholder='Write a review'
                    name={text}
                    value={text}
                    onChange={(e) => onChange(e)}
                    required
                  ></textarea>
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

export default connect(mapStateToProps, { getCourt, addReview })(
  WriteaReviewPage
);
