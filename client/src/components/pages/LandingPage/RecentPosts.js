import React from 'react';

const RecentPosts = (props) => {
  const { postsHome } = props;
  return (
    <div className='recent-posts-wrapper'>
      <div className='recent-posts container'>
        <div className='recent-posts-header'>
          <p className='heading-secondary'>recent posts</p>
        </div>
        {postsHome.length > 0 ? (
          <div className='recent-posts-grid'>
            {/* {postsHome.map((post) => (
              <div className='recent-posts-grid-box'>{post.text}</div>
            ))} */}
            <div className='recent-posts-grid-cols'>
              {postsHome.map((post) => (
                <div className='recent-posts-grid-box'>{post.text}</div>
              ))}
            </div>
            <div className='recent-posts-grid-cols'></div>
            <div className='recent-posts-grid-cols'></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecentPosts;
