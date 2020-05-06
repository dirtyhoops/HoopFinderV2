import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProfile } from '../../../actions/profile';
import { getAllWallPosts, createPost } from '../../../actions/post';

import WallPostForm from './WallPostForm';
import ProfileInfo from './ProfileInfo';
import ProfileWall from './ProfileWall';

const PlayerPage = ({
  profile: {
    selectedProfile,
    playerProfileLoaded,
    user_profile,
    isUserProfileLoaded,
  },
  getProfile,
  getAllWallPosts,
  createPost,
  post: { posts },
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    selectPlayer(id);
  }, []);

  // Clear the redux state of selectedPlayer then get the profile and all the wall post in the selected profile
  const selectPlayer = (id) => {
    getProfile(id);
    getAllWallPosts(id);
  };

  return (
    <>
      {playerProfileLoaded ? (
        <div className='profile-wrapper'>
          <div className='profile container'>
            <ProfileInfo selectedProfile={selectedProfile} />

            <div className='profile-flex'>
              <div className='profile-friends'>
                <div className='profile-header'>
                  <p className='text-header'>Friends</p>
                </div>
              </div>

              <div className='profile-wall'>
                {/* For the Wall Post form */}
                <WallPostForm
                  createPost={createPost}
                  user_id={id}
                  isUserProfileLoaded={isUserProfileLoaded}
                />
                <ProfileWall
                  posts={posts}
                  loggedInUser={user_profile}
                  isUserProfileLoaded={isUserProfileLoaded}
                  selectPlayer={selectPlayer}
                />
              </div>

              <div className='profile-favorite'>
                <div className='profile-header'>
                  <p className='text-header'>Favorite Court</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>PROFILE IS LOADING!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  post: state.post,
});

export default connect(mapStateToProps, {
  getProfile,
  getAllWallPosts,
  createPost,
})(PlayerPage);
