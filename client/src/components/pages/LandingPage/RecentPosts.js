import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import ProfileWall from '../PlayerProfile/ProfileWall';

const RecentPosts = (props) => {
  const {
    postsHome,
    createPost,
    createComment,
    likePost,
    unlikePost,
    isUserProfileLoaded,
    profileUserLoaded,
    user_profile,
    selectPlayer,
  } = props;

  // make a fuction where it checks how many postshome are, and splice it depending on it
  const postscol1 = postsHome.slice(0, 3);
  const postscol2 = postsHome.slice(3, 6);
  const postscol3 = postsHome.slice(6, 9);

  return (
    <div className='recent-posts-wrapper'>
      <div className='recent-posts container'>
        <div className='recent-posts-header u-margin-bottom-md'>
          <p className='heading-secondary'>recent posts</p>
        </div>
        <div className='recent-posts-grid'>
          <div className='recent-posts-grid-cols'>
            <ProfileWall
              posts={postscol1}
              loggedInUser={user_profile}
              createComment={createComment}
              isUserProfileLoaded={isUserProfileLoaded}
              selectPlayer={selectPlayer}
              likePost={likePost}
              unlikePost={unlikePost}
            />
          </div>
          <div className='recent-posts-grid-cols'>
            <ProfileWall
              posts={postscol2}
              loggedInUser={user_profile}
              createComment={createComment}
              isUserProfileLoaded={isUserProfileLoaded}
              selectPlayer={selectPlayer}
              likePost={likePost}
              unlikePost={unlikePost}
            />
          </div>
          <div className='recent-posts-grid-cols'>
            <ProfileWall
              posts={postscol3}
              loggedInUser={user_profile}
              createComment={createComment}
              isUserProfileLoaded={isUserProfileLoaded}
              selectPlayer={selectPlayer}
              likePost={likePost}
              unlikePost={unlikePost}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
