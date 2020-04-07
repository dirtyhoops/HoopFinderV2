import React, { Fragment, useState } from 'react';

// Maybe take out the FRAGMENT later
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  // Deconstruct
  const { firstName, lastName, email, password, password2 } = formData;

  // onChange Handler for keystrokes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='form-wrapper'>
      <div className='form-container'>
        <p className='form-header'>Create account</p>
        <p className='form-subheader'>
          Join us and find basketball runs easier
        </p>
        <form className='form-register'>
          <div className='form-group'>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password2'
              placeholder='Confirm Password'
              value={password2}
              onChange={(e) => onChange(e)}
              required
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <button className='btn-register'>Register</button>
          </div>
          <p className='text-noaccount'>Not register yet? make an account</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
