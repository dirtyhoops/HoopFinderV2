import React from 'react';

const HeroHeader = () => {
  return (
    <div className='hero-image'>
      <div className='hero-image-header container'>
        <div className='hero-image-header__text u-margin-bottom-sm'>
          <h2>FIND YOUR BASKETBALL COURT</h2>
        </div>
        <div className='hero-image-header__search'>
          <form>
            <div className='header-form-group'>
              <label>
                <i className='fa fa-search'></i>
              </label>
              <input type='text' placeholder='Enter City'></input>
              <input
                className='btn btn-search-header'
                type='submit'
                value='SEARCH'
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
