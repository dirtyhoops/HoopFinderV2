import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createProfile, resetProfileLoaded } from '../../actions/profile';

import imageLoader from '../../img/images';

const EditProfile = ({
  createProfile,
  resetProfileLoaded,
  profile: { isCreatingProfileSuccessful },
}) => {
  useEffect(() => {
    resetProfileLoaded();
  }, []);

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

  const avatarImages = imageLoader();

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
    console.log(formData);
    createProfile({ formData });
  };

  const onOptionChange = (e) => {
    setFormData({ ...formData, avatar: e.target.value });
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
            <div className='edit-profile-form-group u-flex-spacebetween'>
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
                  <option value='' defaultValue>
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
            <div className='edit-profile-form-group u-flex-spacebetween '>
              <div className='edit-profile-form-control-3'>
                <select
                  name='position'
                  value={position}
                  onChange={(e) => onChange(e)}
                  required
                >
                  <option value='' defaultValue>
                    Select position
                  </option>
                  <option value='point guard'>Point Guard</option>
                  <option value='shooting guard'>Shooting Guard</option>
                  <option value='small forward'>Small Forward</option>
                  <option value='power forward'>Power Forward</option>
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
                  <option value='' defaultValue>
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
                  <option value='' defaultValue>
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
            <div className='edit-profile-form-group'>
              <p className='form-header-edit'>Select Avatar</p>
              {/* avatar selection */}
              {avatarImages.map((avatar1) => (
                <div key={avatar1.id} className='radio-box'>
                  <label>
                    <img src={avatar1.src} className={avatar_bg} />
                    <input
                      type='radio'
                      name='avatar'
                      value={avatar1.src}
                      checked={avatar === `${avatar1.src}`}
                      onChange={(e) => onOptionChange(e)}
                      required
                    />
                  </label>
                </div>
              ))}
            </div>

            <div className='edit-profile-form-group'>
              <select
                name='avatar_bg'
                value={avatar_bg}
                onChange={(e) => onChange(e)}
                required
              >
                <option value='' defaultValue>
                  Avatar Background
                </option>
                <option value='bg-red'>Red</option>
                <option value='bg-yellow'>Yellow</option>
                <option value='bg-pink'>Pink</option>
              </select>
            </div>
            <div className='edit-profile-form-group'>
              <input
                type='submit'
                className='btn btn-1 btn-1--saveprofile'
                value='Save Profile'
              />
            </div>
          </form>
        </div>
        <div className='edit-profile-bottom-part'></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, resetProfileLoaded })(
  EditProfile
);
