import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import { getProfile } from '../../../actions/profile';
import { getAllWallPosts, createPost } from '../../../actions/post';

import WallPostForm from './WallPostForm';

// Import then remove later once it's not hardcoded
import defaultAvatar from '../../../img/defaultavatar.png';

const PlayerPage = ({
  profile: { selectedProfile, playerProfileLoaded, user_profile },
  getProfile,
  getAllWallPosts,
  createPost,
  post: { posts, isCreatingPostSuccessful },
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    getProfile(id);
    getAllWallPosts(id);
  }, []);

  if (isCreatingPostSuccessful) {
    getAllWallPosts(id);
  }

  return (
    <>
      {playerProfileLoaded ? (
        <div className='profile-wrapper'>
          <div className='profile container'>
            <div className='profile-info'>
              <div className='profile-info__backdrop'></div>
              <div className='profile-info__container'>
                <div className='profile-info-image-wrapper'>
                  <img
                    className={`profile-info-image-wrapper-img ${selectedProfile.avatar_bg}`}
                    src={
                      selectedProfile.avatar === ''
                        ? defaultAvatar
                        : selectedProfile.avatar
                    }
                    alt='profile avatar'
                  />
                </div>
                <div className='profile-info-name'>
                  <p className='text-name'>
                    {selectedProfile.user.firstName}{' '}
                    {selectedProfile.user.lastName}
                  </p>
                  <p className='text-location'>
                    {selectedProfile.city}, {selectedProfile.state}
                  </p>
                  <p className='text-position'>{selectedProfile.position}</p>
                </div>
                <div className='profile-info-editbutton'></div>
              </div>
            </div>
            <div className='profile-flex'>
              <div className='profile-friends'>
                <div className='profile-header'>
                  <p className='text-header'>Friends</p>
                </div>
              </div>

              <div className='profile-wall'>
                {/* For the Wall Post form */}
                <WallPostForm createPost={createPost} user_id={id} />

                {/* The Wall Posts */}
                {posts.length > 0 ? (
                  <div className='profile-wall-post-container'>
                    {posts.map((post) => (
                      <div
                        key={post._id}
                        className='profile-wall-post u-margin-bottom-md'
                      >
                        <div className='profile-wall-post-top'>
                          {/* No header if it's the loggedin user's own post */}
                          {!post.ownPost ? (
                            <div className='profile-wall-post-header'>
                              <div className='profile-wall-post-header__image'>
                                <img
                                  className={`profile-wall-post-header__image__img ${post.poster.avatar_bg}`}
                                  src={post.poster.avatar}
                                />
                              </div>
                              <div className='profile-wall-post-header__info'>
                                <p className='text-post-name'>
                                  {post.poster.firstName} {post.poster.lastName}
                                </p>
                                <p className='text-post-location'>
                                  {post.poster.city}, {post.poster.state}
                                </p>
                                <p className='text-post-location'></p>
                              </div>
                              <div className='profile-wall-post-header__dropdown'>
                                <button className='btn btn-2 btn-2-transparent-dropdown'>
                                  <i className='fa fa-chevron-down'></i>
                                </button>
                              </div>
                            </div>
                          ) : null}
                          <div className='profile-wall-post-content'>
                            <p className='text-post-content'>{post.text}</p>
                          </div>
                          <div className='profile-wall-post-footer'>
                            <div className='profile-wall-post-footer__left'>
                              <button className='btn btn-2 btn-2-transparent u-margin-right-sm'>
                                <i className='fa fa-heart icon-heart-inactive'></i>{' '}
                                Like
                              </button>
                              <button className='btn btn-2 btn-2-transparent'>
                                <i className='fa fa-comment'></i> Comment
                              </button>
                            </div>
                            <div className='profile-wall-post-foot__right'>
                              <p className='text-post-date'>
                                {/* Moment to format the date to count the date from when it's posted */}
                                <Moment fromNow>{post.dateCreated}</Moment>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* COMMENTS and COLLAPSIBLE WITH A CLICK */}
                        <div className='post-comment'>
                          <div className='post-comment-container'>
                            {/* {user_profile !== null ? ( */}
                            <div className='post-comment-form'>
                              <div className='post-comment-form__image'>
                                <img
                                  src=''
                                  className='post-comment-form__image__img bg-pink'
                                />
                                {/* <img
                                  src={user_profile.avatar}
                                  className={`post-comment-form__image__img ${user_profile.avatar_bg}`}
                                /> */}
                              </div>
                              <div className='post-comment-form__textarea'>
                                <form>
                                  <textarea></textarea>
                                  <input
                                    className='btn btn-comment post-comment-form-button'
                                    type='submit'
                                    value='Post'
                                  ></input>
                                </form>
                              </div>
                            </div>
                            {/* ) : null} */}
                            <div className='post-comment-box'>
                              <div className='post-comment-box__image'>
                                <img
                                  src=''
                                  className='post-comment-form__image__img bg-pink'
                                />
                              </div>
                              <div className='post-comment-box__content'>
                                <p>aaaaaaaaaaaaa</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
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
