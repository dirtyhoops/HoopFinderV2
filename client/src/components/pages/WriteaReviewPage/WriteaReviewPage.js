import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const WriteaReviewPage = () => {
  const [toggler, setToggler] = useState(true);

  const toggleHandler = () => {
    setToggler(!toggler);
  };

  return (
    <div className='writeareview-wrapper'>
      <div className='writeareview container'>
        <div className='writeareview-main'>
          <h3 className='writeareview-text-name'>District Seven Kitchen</h3>
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
      </div>
    </div>
  );
};

export default WriteaReviewPage;
