import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProfile } from '../../../actions/profile';

const PlayerPage = ({
  profile: { selectedProfile, playerProfileLoaded },
  getProfile,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    getProfile(id);
  }, []);

  // const {
  //   _id,
  //   avatar,
  //   avatar_bg,
  //   backdrop,
  //   state,
  //   city,
  //   position,
  //   user: { firstName, lastName },
  //   height: { feet, inches },
  // } = selectedProfile;
  return (
    <div>
      <p>profile page</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(PlayerPage);
