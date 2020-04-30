import React from 'react';

const LandingPage = () => {
  return (
    <div className='hero-image-wrapper'>
      <div className='hero-image-container'>
        <div className='hero-image-header container'>
          <div className='hero-image-header__text'>
            <h2>FIND YOUR BASKETBALL COURT</h2>
          </div>
          <div className='hero-image-header__search'>
            <form>
              <input type='text'></input>
              <input type='submit' value='SEARCH'></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

// // !@TODO -- separate components
// 1. hero image with Search capabilities in the middle of the image
// 2. featured basketball courts -- with highest review - highest review count
// 3. basketball near the users zipcode
// 4. players in the area were the users from
// 5. latest post maybe the 6 latest post
// 6. also a good footer
