import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import { getUserProfile } from '../../../actions/profile';

const PlayerProfilePage = ({ getUserProfile, profile, auth }) => {
  if (auth.isAuthenticated && !profile.isUserProfileLoaded) {
    getUserProfile();
  }

  return (
    <>
      {profile.user_profile === null ? (
        <div>
          <p>no profile click here to fill up your profile</p>
          <Link to={'/player/me/edit'}>Go complete your profile</Link>
        </div>
      ) : (
        <div>
          <p>welcome to your profile</p>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getUserProfile })(PlayerProfilePage);
