import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  // onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password do not match. make this an alert later');
    } else {
      console.log(formData);
    }
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-form-container'>
        <p className='auth-form-header'>Create account</p>
        <p className='auth-form-subheader'>
          Join us and find basketball runs easier
        </p>
        <form className='auth-form-register' onSubmit={(e) => onSubmit(e)}>
          <div className='auth-form-group'>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='auth-form-group'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='auth-form-group'>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='auth-form-group'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <div className='auth-form-group'>
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
          <div className='auth-form-group'>
            <input
              type='submit'
              className='btn btn-register'
              value='Register'
            />
          </div>
          <p className='text-login-link'>
            <Link to={'/login'}>Already have an account? Click to sign in</Link>
          </p>
        </form>
      </div>
      <div className='auth-bottom-part'></div>
    </div>
  );
};

export default Register;
