import React from 'react';

const AddCourt = (props) => {
  const { toggleForm } = props;

  return (
    <div className='add-court-wrapper'>
      <form className='add-court-form'>
        <div className='add-court-form__flex'>
          <div className='add-court-form__flex-box'>
            <div className='add-court-form-group'>
              <label>Name</label>
              <input type='text'></input>
            </div>
            <div className='add-court-form-group'>
              <label>Description</label>
              <textarea rows='8'></textarea>
            </div>
            <div className='add-court-form-group'>
              <label>Images</label>
              <textarea rows='4'></textarea>
            </div>
          </div>
          <div className='add-court-form__flex-box'>
            <div className='add-court-form-group'>
              <label>Street</label>
              <input type='text'></input>
            </div>
            <div className='add-court-form-group'>
              <label>City</label>
              <input type='text'></input>
            </div>
            <div className='add-court-form-group add-court-form-group-50'>
              <label>State</label>
              <input type='text'></input>
            </div>
            <div className='add-court-form-group add-court-form-group-50'>
              <label>Zipcode</label>
              <input type='text'></input>
            </div>
          </div>
          <div className='add-court-form__flex-box'>
            <div className='add-court-form-group'>
              <label>Street</label>
              <input type='text'></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourt;
