import React, { useState } from 'react';

const ProfileWallPostComments = (props) => {
  const { post, loggedInUser, createComment, isUserProfileLoaded } = props;

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createComment(post._id, { text });
    console.log(text);
    setText('');
  };

  return (
    <div>
      {/* COMMENTS and COLLAPSIBLE WITH A CLICK */}

      <div className='post-comment-container'>
        {/* Only load the comment form when the user is logged in */}
        {isUserProfileLoaded ? (
          <div className='post-comment-form'>
            <div className='post-comment-form__image'>
              <img
                src={loggedInUser.avatar}
                className={`post-comment-form__image__img ${loggedInUser.avatar_bg}`}
              />
            </div>
            <div className='post-comment-form__textarea'>
              <form onSubmit={(e) => onSubmit(e)}>
                <textarea value={text} onChange={(e) => onChange(e)}></textarea>
                <input
                  className='btn btn-comment post-comment-form-button'
                  type='submit'
                  value='Post'
                ></input>
              </form>
            </div>
          </div>
        ) : null}

        {/* Each comment container if there's any comment on a post */}
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
