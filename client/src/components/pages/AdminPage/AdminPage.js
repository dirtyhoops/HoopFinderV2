import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllCourts } from '../../../actions/court';

import CourtsTable from './CourtsTable';
import AdminPageHeader from './AdminPageHeader';

const AdminPage = ({ court: { courts }, getAllCourts }) => {
  useEffect(() => {
    getAllCourts();
  }, []);

  return (
    <div className='admin-page-wrapper'>
      <div className='admin-page container'>
        {/* <div className='admin-page-header'>
          <p className='heading-secondary'>Admin Content Manager</p>
        </div> */}
        <AdminPageHeader />
        <CourtsTable courts={courts} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  court: state.court,
});

export default connect(mapStateToProps, { getAllCourts })(AdminPage);
