import React from 'react';

const CheckedInPlayers = () => {
  return (
    <div className='courtview-checkedinplayers'>
      <div className='courtview-checkedinplayers-header'>
        <div className='courtview-checkedinplayers-header__text'>
          <p className='courtview-checkedinplayers-text-header'>
            Players Checked in: 2
          </p>
        </div>
        <div className='courtview-checkedinplayers-header__button'>
          <button className='btn btn-checkin'>Check In</button>
        </div>
      </div>
      <div className='courtview-checkedinplayers-container'>
        {/* LOOP THIS DIV FOR EVERY PLAYERS CHECKED IN */}
        <div className='courtview-checkedinplayers-box'>
          <div className='courtview-checkedinplayers-box__image'>
            <img
              src='https://www.shareicon.net/data/512x512/2016/07/07/792305_man_512x512.png'
              className='courtview-checkedinplayers-box__image__img bg-red'
            />
          </div>
          <div className='courtview-checkedinplayers-box__info'>
            <p className='courtview-checkedinplayers-text-name'>
              Carmelo Anthony
            </p>
            <p className='courtview-checkedinplayers-text-location'>
              Baltimore, MD
            </p>
          </div>
        </div>

        <div className='courtview-checkedinplayers-box'>
          <div className='courtview-checkedinplayers-box__image'>
            <img
              src='https://www.shareicon.net/data/512x512/2016/07/07/792305_man_512x512.png'
              className='courtview-checkedinplayers-box__image__img bg-red'
            />
          </div>
          <div className='courtview-checkedinplayers-box__info'>
            <p className='courtview-checkedinplayers-text-name'>
              Carmelo Anthony
            </p>
            <p className='courtview-checkedinplayers-text-location'>
              Baltimore, MD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckedInPlayers;
