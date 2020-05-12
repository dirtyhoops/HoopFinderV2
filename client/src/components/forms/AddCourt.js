import React, { useState } from 'react';

const AddCourt = (props) => {
  const { toggleForm } = props;

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    images: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    surfaceType: 'N/A',
    numberOfHoops: '2',
    rimHeight: '10 ft',
    isIndoor: '',
    isLighting: '',
    isPublic: '',
  });

  // Deconstruct
  const {
    name,
    description,
    images,
    street,
    city,
    state,
    zipcode,
    surfaceType,
    numberOfHoops,
    rimHeight,
    isIndoor,
    isLighting,
    isPublic,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // createProfile({ formData });
  };

  return (
    <div className='add-court-wrapper'>
      <form className='add-court-form' onSubmit={(e) => onSubmit(e)}>
        <div className='add-court-form__flex'>
          <div className='add-court-form__flex-box'>
            <div className='add-court-form-group'>
              <label>Name</label>
              <input
                type='text'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
              ></input>
            </div>
            <div className='add-court-form-group'>
              <label>Description</label>
              <textarea
                rows='8'
                name='description'
                value={description}
                onChange={(e) => onChange(e)}
                required
              ></textarea>
            </div>
            <div className='add-court-form-group'>
              <label>Images</label>
              <textarea
                rows='4'
                name='images'
                value={images}
                onChange={(e) => onChange(e)}
                required
              ></textarea>
            </div>
          </div>
          <div className='add-court-form__flex-box'>
            <div className='add-court-form-group'>
              <label>Street</label>
              <input
                type='text'
                name='street'
                value={street}
                onChange={(e) => onChange(e)}
                required
              ></input>
            </div>
            <div className='add-court-form-group'>
              <label>City</label>
              <input
                type='text'
                name='city'
                value={city}
                onChange={(e) => onChange(e)}
                required
              ></input>
            </div>
            <div className='add-court-form-group add-court-form-group-50'>
              <label>State</label>
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
            <div className='add-court-form-group add-court-form-group-50'>
              <label>Zipcode</label>
              <input
                type='text'
                name='zipcode'
                value={zipcode}
                onChange={(e) => onChange(e)}
                required
              ></input>
            </div>
          </div>
          <div className='add-court-form__flex-box'>
            <div className='add-court-form-group add-court-form-group-50'>
              <label>Surface Type</label>
              <select
                name='surfaceType'
                value={surfaceType}
                onChange={(e) => onChange(e)}
                required
              >
                <option value='N/A'>N/A</option>
                <option value='hardwood'>Hardwood</option>
                <option value='concrete'>Concrete</option>
                <option value='asphalt'>Asphalt</option>
                <option value='sport tiles'>Sport tiles</option>
              </select>
            </div>
            <div className='add-court-form-group add-court-form-group-50'>
              <label>Rim Height</label>
              <select
                name='rimHeight'
                value={rimHeight}
                onChange={(e) => onChange(e)}
                required
              >
                <option value='N/A'>N/A</option>
                <option value='6 ft'>6 ft.</option>
                <option value='7 ft'>7 ft.</option>
                <option value='8 ft'>8 ft.</option>
                <option value='9 ft'>9 ft.</option>
                <option value='10 ft'>10 ft.</option>
              </select>
            </div>
            <div className='add-court-form-group add-court-form-group-50'>
              <label>Number of Hoops</label>
              <select
                name='numberOfHoops'
                value={numberOfHoops}
                onChange={(e) => onChange(e)}
                required
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='6+'>6+</option>
              </select>
            </div>
            <div className='add-court-form-group'>
              <p>Is the court indoor?</p>
              <div className='add-court-form-radio-box'>
                <div className='add-court-form-radio-box-options'>
                  <label>
                    <input
                      type='radio'
                      name='isIndoor'
                      value='yes'
                      checked={isIndoor === 'yes'}
                      onChange={(e) => onChange(e)}
                      required
                    />{' '}
                    Yes
                  </label>
                </div>
                <div className='add-court-form-radio-box-options'>
                  <label>
                    <input
                      type='radio'
                      name='isIndoor'
                      value='no'
                      checked={isIndoor === 'no'}
                      onChange={(e) => onChange(e)}
                      required
                    />{' '}
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className='add-court-form-group'>
              <p>Is there lighting at night?</p>
              <div className='add-court-form-radio-box'>
                <div className='add-court-form-radio-box-options'>
                  <label>
                    <input
                      type='radio'
                      name='isLighting'
                      value='yes'
                      checked={isLighting === 'yes'}
                      onChange={(e) => onChange(e)}
                      required
                    />{' '}
                    Yes
                  </label>
                </div>
                <div className='add-court-form-radio-box-options'>
                  <label>
                    <input
                      type='radio'
                      name='isLighting'
                      value='no'
                      checked={isLighting === 'no'}
                      onChange={(e) => onChange(e)}
                      required
                    />{' '}
                    No
                  </label>
                </div>
                <div className='add-court-form-radio-box-options'>
                  <label>
                    <input
                      type='radio'
                      name='isLighting'
                      value='N/A'
                      checked={isLighting === 'N/A'}
                      onChange={(e) => onChange(e)}
                      required
                    />{' '}
                    N/A
                  </label>
                </div>
              </div>
            </div>
            <div className='add-court-form-group'>
              <p>Is it open to public?</p>
              <div className='add-court-form-radio-box'>
                <div className='add-court-form-radio-box-options'>
                  <label>
                    <input
                      type='radio'
                      name='isPublic'
                      value='yes'
                      checked={isPublic === 'yes'}
                      onChange={(e) => onChange(e)}
                      required
                    />{' '}
                    Yes
                  </label>
                </div>
                <div className='add-court-form-radio-box-options'>
                  <label>
                    <input
                      type='radio'
                      name='isPublic'
                      value='no'
                      checked={isPublic === 'no'}
                      onChange={(e) => onChange(e)}
                      required
                    />{' '}
                    No
                  </label>
                </div>
              </div>
            </div>

            {/* The submit button */}
            <div className='add-court-form-group'>
              <input
                type='submit'
                className='btn btn-lg btn-lg--secondary'
                value='Add Court'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourt;
