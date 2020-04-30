import React from 'react';

import HeroHeader from './HeroHeader';
import FeaturedCourts from './FeaturedCourts';
import RecentPosts from './RecentPosts';

const LandingPage = () => {
  return (
    <div className='landing-page-wrapper'>
      <HeroHeader />

      {/* FEATURED BASKETBALL LOCATIONS pass props of courts */}
      <FeaturedCourts />
      {/* BASKETBALL NEAR YOUR PLACE */}
      {/* PLAYERS NEAR YOUR PLACE */}
      {/* RECENT POSTS BY PLAYERS */}
      <RecentPosts />
      {/* RECENT REVIEWS */}
      {/* FOOTER */}
    </div>
  );
};

export default LandingPage;

// // !@TODO -- separate components
// 1. hero image with Search capabilities in the middle of the image
// 2. featured basketball courts -- with highest review - highest review count
// 3. basketball near the users zipcode
// 4. players in the area were the users from
// 5. latest post maybe the 6 latest post
// 6. also a good footer
