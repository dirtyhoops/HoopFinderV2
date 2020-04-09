import React, { useState } from 'react';
import { connect } from 'react-redux';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    avatar: '',
    avatar_bg: '',
    backdrop: '',
    city: '',
    state: '',
    position: '',
    feet: '',
    inches: '',
  });

  // Deconstruct
  const {
    avatar,
    avatar_bg,
    backdrop,
    city,
    state,
    position,
    feet,
    inches,
  } = formData;
  // onChange Handler for keystrokes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className='edit-profile-wrapper'>
        <div className='edit-profile-form-container'>
          {/* CHANGE THIS LATER DEPENDS IF THE USER HAS HIS PROFILE SET */}
          <p className='edit-profile-form-header'>Create profile</p>
          <p className='edit-profile-form-subheader'>
            You are one step away from finding your home court
          </p>
          <form
            className='edit-profile-form-register'
            onSubmit={(e) => onSubmit(e)}
          >
            <div className='edit-profile-form-group'>
              <div className='edit-profile-form-control-2'>
                <input
                  type='text'
                  name='city'
                  placeholder='City'
                  value={city}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className='edit-profile-form-control-1'>
                <select
                  name='state'
                  value={state}
                  onChange={(e) => onChange(e)}
                  required
                >
                  <option value='' selected>
                    Select state or region
                  </option>
                  <option value='AL'>Alabama</option>
                  <option value='AK'>Alaska</option>
                  <option value='AZ'>Arizona</option>
                  <option value='AR'>Arkansas</option>
                  <option value='CA'>California</option>
                  <option value='CO'>Colorado</option>
                  <option value='CT'>Connecticut</option>
                  <option value='DE'>Delaware</option>
                  <option value='DC'>District Of Columbia</option>
                  <option value='FL'>Florida</option>
                  <option value='GA'>Georgia</option>
                  <option value='HI'>Hawaii</option>
                  <option value='ID'>Idaho</option>
                  <option value='IL'>Illinois</option>
                  <option value='IN'>Indiana</option>
                  <option value='IA'>Iowa</option>
                  <option value='KS'>Kansas</option>
                  <option value='KY'>Kentucky</option>
                  <option value='LA'>Louisiana</option>
                  <option value='ME'>Maine</option>
                  <option value='MD'>Maryland</option>
                  <option value='MA'>Massachusetts</option>
                  <option value='MI'>Michigan</option>
                  <option value='MN'>Minnesota</option>
                  <option value='MS'>Mississippi</option>
                  <option value='MO'>Missouri</option>
                  <option value='MT'>Montana</option>
                  <option value='NE'>Nebraska</option>
                  <option value='NV'>Nevada</option>
                  <option value='NH'>New Hampshire</option>
                  <option value='NJ'>New Jersey</option>
                  <option value='NM'>New Mexico</option>
                  <option value='NY'>New York</option>
                  <option value='NC'>North Carolina</option>
                  <option value='ND'>North Dakota</option>
                  <option value='OH'>Ohio</option>
                  <option value='OK'>Oklahoma</option>
                  <option value='OR'>Oregon</option>
                  <option value='PA'>Pennsylvania</option>
                  <option value='RI'>Rhode Island</option>
                  <option value='SC'>South Carolina</option>
                  <option value='SD'>South Dakota</option>
                  <option value='TN'>Tennessee</option>
                  <option value='TX'>Texas</option>
                  <option value='UT'>Utah</option>
                  <option value='VT'>Vermont</option>
                  <option value='VA'>Virginia</option>
                  <option value='WA'>Washington</option>
                  <option value='WV'>West Virginia</option>
                  <option value='WI'>Wisconsin</option>
                  <option value='WY'>Wyoming</option>
                </select>
              </div>
            </div>
            <div className='edit-profile-form-group'>
              <div className='edit-profile-form-control-3'>
                <select
                  name='position'
                  value={position}
                  onChange={(e) => onChange(e)}
                  required
                >
                  <option value='' selected>
                    Select position
                  </option>
                  <option value='pointguard'>Point Guard</option>
                  <option value='shootingguard'>Shooting Guard</option>
                  <option value='smallforward'>Small Forward</option>
                  <option value='powerforward'>Power Forward</option>
                  <option value='center'>Center</option>
                </select>
              </div>
              <div className='edit-profile-form-control-3'>
                <select
                  name='feet'
                  value={feet}
                  onChange={(e) => onChange(e)}
                  required
                >
                  <option value='' selected>
                    Height (feet)
                  </option>
                  <option value='4'>4 feet</option>
                  <option value='5'>5 feet</option>
                  <option value='6'>6 feet</option>
                  <option value='7'>7 feet</option>
                </select>
              </div>
              <div className='edit-profile-form-control-3'>
                <select
                  name='inches'
                  value={inches}
                  onChange={(e) => onChange(e)}
                  required
                >
                  <option value='' selected>
                    Height (inches)
                  </option>
                  <option value='0'>0 inches</option>
                  <option value='1'>1 inches</option>
                  <option value='2'>2 inches</option>
                  <option value='3'>3 inches</option>
                  <option value='4'>4 inches</option>
                  <option value='5'>5 inches</option>
                  <option value='6'>6 inches</option>
                  <option value='7'>7 inches</option>
                  <option value='8'>8 inches</option>
                  <option value='9'>9 inches</option>
                  <option value='10'>10 inches</option>
                  <option value='11'>11 inches</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className='edit-profile-bottom-part'></div>
      </div>
    </div>
  );
};

export default EditProfile;
