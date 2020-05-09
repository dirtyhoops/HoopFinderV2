import React from 'react';

const AddCourt = (props) => {
  // toggleForm is just a toggler to show/hide the form
  const { toggleForm } = props;
  return (
    <div
      className={
        toggleForm ? 'add-court-wrapper showform' : 'add-court-wrapper hideform'
      }
    >
      <p>add court form</p>
    </div>
  );
};

export default AddCourt;
