import React, { useState } from 'react';

const WallPostForm = (props) => {
  const { createPost, user_id, isUserProfileLoaded } = props;
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createPost(user_id, { text });
    setText('');
  };

  return (
    <>
      <div className='profile-wall-form u-margin-bottom-md'>
        <form onSubmit={(e) => onSubmit(e)}>
          <textarea
            className='form-textarea'
            placeholder='What do you want to talk about?'
            value={text}
            onChange={(e) => onChange(e)}
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
              <input
                className={`btn btn-2 ${
                  isUserProfileLoaded ? 'btn-2-primary' : 'btn-2-info'
                }`}
                value='Post'
                type='submit'
                disabled={!isUserProfileLoaded}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default WallPostForm;
