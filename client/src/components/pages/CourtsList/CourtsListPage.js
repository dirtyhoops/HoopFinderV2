import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCourts } from '../../../actions/court';

import Courts from '../../courts/Courts';

const CourtsListPage = ({ court: { courts }, getAllCourts }) => {
  useEffect(() => {
    getAllCourts();
  }, []);

  return (
    <div className='courts-list-wrapper'>
      <div className='courts-list container'>
        <div className='courts-list-header'>
          <p>ALL COURTS</p>
        </div>
        <Courts courts={courts} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  court: state.court,
});

export default connect(mapStateToProps, { getAllCourts })(CourtsListPage);
