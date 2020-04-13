import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ register, isAuthenticated }) => {
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
      // TAKE THIS CONSOLE LOG LATER WHEN EVERYTTHING IS FINALIZED
      console.log(formData);
      register({ formData });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/player/me' />;
  }

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
              className='btn btn-1 btn-1--register'
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

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
