import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <Link to={'/'}>
          <li>home</li>
        </Link>
        <Link to={'/players'}>
          <li>players</li>
        </Link>
        <Link to={'/courts'}>
          <li>courts</li>
        </Link>
        <Link to={'/profile'}>
          <li>my profile</li>
        </Link>
        <Link to={'/login'}>
          <li>login</li>
        </Link>
        <Link to={'/logout'}>
          <li>logout</li>
        </Link>
        <Link to={'/register'}>
          <li>register</li>
        </Link>
        <Link to={'/checkin'}>
          <li>checkin</li>
        </Link>
        <Link to={'/admincheckin'}>
          <li>admincheckin</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
