import React from 'react';

const CheckedInPlayers = () => {
  return (
    <div className='courtview-checkedinplayers'>
      <div className='courtview-checkedinplayers-header'>
        <p>Checked-in Players: 2</p>
        <button className='btn btn-checkin'>Check In</button>
      </div>
      <div className='courtview-checkedinplayers-container'>
        <div className='courtview-checkedinplayers-box'>
          {/* LOOP THIS DIV FOR EVERY PLAYERS CHECKED IN */}
        </div>
      </div>
    </div>
  );
};

export default CheckedInPlayers;
