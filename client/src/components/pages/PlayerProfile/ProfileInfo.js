import React from 'react';

// Import then remove later once it's not hardcoded
import defaultAvatar from '../../../img/defaultavatar.png';

const ProfileInfo = (props) => {
  const {
    avatar,
    avatar_bg,
    position,
    city,
    state,
    user: { firstName, lastName },
  } = props.selectedProfile;

  return (
    <div className='profile-info'>
      <div className='profile-info__backdrop'></div>
      <div className='profile-info__container'>
        <div className='profile-info-image-wrapper'>
          <img
            className={`profile-info-image-wrapper-img ${avatar_bg}`}
            src={avatar === '' ? defaultAvatar : avatar}
            alt='profile avatar'
          />
        </div>
        <div className='profile-info-name'>
          <p className='text-name'>
            {firstName} {lastName}
          </p>
          <p className='text-location'>
            {city}, {state}
          </p>
          <p className='text-position'>{position}</p>
        </div>
        <div className='profile-info-editbutton'></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
