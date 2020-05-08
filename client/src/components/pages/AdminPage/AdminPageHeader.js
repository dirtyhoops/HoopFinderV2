import React from 'react';

const AdminPageHeader = () => {
  return (
    <div className='admin-page-header'>
      <div className='admin-page-header__top'>
        <div className='admin-page-header__top__left'>
          <p className='heading-primary'>admin content manager</p>
        </div>
        <div className='admin-page-header__top__right'>
          <button className='btn btn--success'>Add Court</button>
        </div>
      </div>
      <div className='admin-page-header__bottom'></div>
    </div>
  );
};

export default AdminPageHeader;
