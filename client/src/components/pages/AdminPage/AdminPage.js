import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  getAllCourts,
  deleteCourt,
  getCourtToEdit,
} from '../../../actions/court';

import CourtsTable from './CourtsTable';
import AddCourt from '../../forms/AddCourt';

const AdminPage = ({
  court: { courts },
  getAllCourts,
  deleteCourt,
  getCourtToEdit,
}) => {
  useEffect(() => {
    getAllCourts();
  }, []);

  const [toggleForm, setToggleForm] = useState(true);

  const toggleHandler = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className='admin-page-wrapper'>
      <div className='admin-page container'>
        <div className='admin-page-header'>
          <div className='admin-page-header__left'>
            <p className='heading-primary'>admin content manager</p>
          </div>
          <div className='admin-page-header__center'>SORT DO LATER</div>
          <div className='admin-page-header__right'>
            <button
              className='btn  btn-lg btn-lg--success'
              onClick={() => toggleHandler()}
            >
              {toggleForm ? 'Hide Form' : 'Add Court'}
            </button>
          </div>
        </div>
        <div className={toggleForm ? 'showform' : 'hideform'}>
          <AddCourt />
        </div>
        <CourtsTable
          courts={courts}
          deleteCourt={deleteCourt}
          getCourtToEdit={getCourtToEdit}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  court: state.court,
});

export default connect(mapStateToProps, {
  getAllCourts,
  deleteCourt,
  getCourtToEdit,
})(AdminPage);
