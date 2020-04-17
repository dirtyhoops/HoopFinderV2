import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProfile } from '../../../actions/profile';
import { getAllWallPosts } from '../../../actions/post';

// Import then remove later once it's not hardcoded
import defaultAvatar from '../../../img/defaultavatar.png';

const PlayerPage = ({
  profile: { selectedProfile, playerProfileLoaded },
  getProfile,
  getAllWallPosts,
  post: { posts, isPostsLoaded },
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
                <div className='profile-wall-form u-margin-bottom-md'>
                  <form>
                    <textarea
                      className='form-textarea'
                      placeholder='What do you want to talk about?'
                    ></textarea>
                    <div className='form-group-flex'>
                      <div className='form-group-flex-left'>
                        <button className='btn btn-2 btn-2-transparent u-margin-right-sm'>
                          <i className='fa fa-pencil'></i> Write a Post
                        </button>
                        <button className='btn btn-2 btn-2-transparent btn-transparent-inactive'>
                          <i className='fa fa-paperclip'></i> Add image
                        </button>
                      </div>
                      <div className='form-group-flex-right'>
                        <button className='btn btn-2 btn-2-primary'>
                          Post
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* <!-- PROFILE WALL POST #1 (GOING TO NEED JUST ONE OF THESE LATER ONCE WERE PULLING REAL DATAS) --> */}
                <div className='profile-wall-post u-margin-bottom-md'>
                  <div className='profile-wall-post-header'>
                    <div className='profile-wall-post-header__image'>
                      <div className='profile-wall-post-header__image__img'></div>
                    </div>
                    <div className='profile-wall-post-header__info'>
                      <p className='text-post-name'>Daryll Osis</p>
                      <p className='text-post-location'>San Jose, CA</p>
                    </div>
                    <div className='profile-wall-post-header__dropdown'>
                      <button className='btn btn-2 btn-2-transparent-dropdown'>
                        <i className='fa fa-chevron-down'></i>
                      </button>
                    </div>
                  </div>
                  <div className='profile-wall-post-content'>
                    <p className='text-post-content'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                  </div>
                  <div className='profile-wall-post-footer'>
                    <div className='profile-wall-post-footer__left'>
                      <button className='btn btn-2 btn-2-transparent u-margin-right-sm'>
                        <i className='fa fa-heart icon-heart-inactive'></i> Like
                      </button>
                      <button className='btn btn-2 btn-2-transparent'>
                        <i className='fa fa-comment'></i> Comment
                      </button>
                    </div>
                    <div className='profile-wall-post-foot__right'>
                      <p className='text-post-date'>April 1st 2020, 11:12 pm</p>
                    </div>
                  </div>
                </div>
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

export default connect(mapStateToProps, { getProfile, getAllWallPosts })(
  PlayerPage
);
