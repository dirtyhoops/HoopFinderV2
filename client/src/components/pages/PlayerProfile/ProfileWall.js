import React, { useState } from 'react';
import Moment from 'react-moment';
import ProfileWallPostComments from './ProfileWallPostComments';

const ProfileWall = (props) => {
  const { posts } = props;

  const [active, setActive] = useState(null);

  const onClickToggle = (i) => {
    setActive(i);
    if (active === i) {
      setActive(null);
    }
    console.log('clicking toggle');
  };
  return (
    <div>
      {/* The Wall Posts */}
      {posts.length > 0 ? (
        <div className='profile-wall-post-container'>
          {posts.map((post) => (
            <div
              key={post._id}
              className='profile-wall-post u-margin-bottom-md'
            >
              <div className='profile-wall-post-top'>
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

                <div className='profile-wall-post-content'>
                  <p className='text-post-content'>{post.text}</p>
                </div>
                <div className='profile-wall-post-footer'>
                  <div className='profile-wall-post-footer__left'>
                    <button className='btn btn-2 btn-2-transparent u-margin-right-sm'>
                      <i className='fa fa-heart icon-heart-inactive'></i> Like
                    </button>
                    <button
                      className='btn btn-2 btn-2-transparent'
                      onClick={() => onClickToggle(post._id)}
                    >
                      <i className='fa fa-comment'></i> Comment{' '}
                      {post.comments.length > 0 ? (
                        <span>({post.comments.length})</span>
                      ) : null}{' '}
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
              <div
                className={`post-comment ${
                  active === post._id ? 'show' : 'hide'
                }`}
              >
                <ProfileWallPostComments post={post} />
              </div>
              {/* PUT THE COMMENT BOX HERE */}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProfileWall;