import React from 'react';

const ProfileWallPostComments = (props) => {
  const { post, loggedInUser, createComment, isUserProfileLoaded } = props;

  return (
    <div>
      {/* COMMENTS and COLLAPSIBLE WITH A CLICK */}

      <div className='post-comment-container'>
        {isUserProfileLoaded ? (
          <div className='post-comment-form'>
            <div className='post-comment-form__image'>
              {/* <img src='' className='post-comment-form__image__img bg-pink' /> */}
              <img
                src={loggedInUser.avatar}
                className={`post-comment-form__image__img ${loggedInUser.avatar_bg}`}
              />
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
        ) : null}

        {post.comments.length > 0 ? (
          <>
            {post.comments.map((comment) => (
              <div className='post-comment-box'>
                <div className='post-comment-box__image'>
                  <img
                    src={comment.avatar}
                    className={`post-comment-form__image__img ${comment.avatar_bg}`}
                  />
                </div>
                <div className='post-comment-box__content'>
                  <p className='text-comment-name'>
                    {comment.firstName} {comment.lastName}
                  </p>
                  <p className='text-comment-content'>{comment.text}</p>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileWallPostComments;
