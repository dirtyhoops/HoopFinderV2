import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import HeroHeader from './HeroHeader';
import FeaturedCourts from './FeaturedCourts';
import RecentPosts from './RecentPosts';

import { getAllCourts } from '../../../actions/court';
import { getAllPosts } from '../../../actions/post';

const LandingPage = ({
  profile: { user_profile, isUserProfileLoaded },
  court: { courts },
  post: { postsHome },
  getAllCourts,
  getAllPosts,
}) => {
  useEffect(() => {
    getAllCourts();
  }, []);

  useEffect(() => {
    getAllPosts();
  }, []);

  const selectPlayer = (id) => {
    // DO NOTHING, WILL DELETE LATER ONCE WE FIX PROFILE WALL WITH AL LTHE FUNCTION SO WE DONT HAVE TO PASS ANYTHING
  };

  return (
    <div className='landing-page-wrapper'>
      <HeroHeader />

      {/* FEATURED BASKETBALL LOCATIONS pass props of courts */}
      <FeaturedCourts courts={courts} />
      {/* BASKETBALL NEAR YOUR PLACE */}
      {/* PLAYERS NEAR YOUR PLACE */}
      {/* RECENT POSTS BY PLAYERS */}
      <RecentPosts
        postsHome={postsHome}
        isUserProfileLoaded={isUserProfileLoaded}
        loggedInUser={user_profile}
        selectPlayer={selectPlayer}
      />
      {/* RECENT REVIEWS */}
      {/* FOOTER */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  court: state.court,
  post: state.post,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getAllCourts,
  getAllPosts,
})(LandingPage);

// // !@TODO -- separate components
// 1. hero image with Search capabilities in the middle of the image
// 2. featured basketball courts -- with highest review - highest review count
// 3. basketball near the users zipcode
// 4. players in the area were the users from
// 5. latest post maybe the 6 latest post
// 6. also a good footer
