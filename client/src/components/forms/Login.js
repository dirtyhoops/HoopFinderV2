import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { getUserProfile } from '../../actions/profile';

const Login = ({
  login,
  getUserProfile,
  auth: { user, isAuthenticated },
  profile: { user_profile, isUserProfileLoaded },
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Deconstruct
  const { email, password } = formData;

  // onChange Handler for keystrokes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Get the user profile as soon as the login is successful
  if (isAuthenticated && !isUserProfileLoaded) {
    getUserProfile();
  }

  // Redirects to create profile page if profile is empty after logging in
  if (isUserProfileLoaded && user_profile === null) {
    return <Redirect to='/player/me/edit' />;
  }

  // Redirects to the player's profile page if there's a profile after logging in
  if (isUserProfileLoaded && user_profile !== null) {
    return <Redirect to='/player/me' />;
  }

  return (
    <div className='auth-wrapper'>
      <div className='auth-form-container'>
        <p className='auth-form-header'>Sign in</p>
        <p className='auth-form-subheader'>
          Sign in and start looking for courts and players
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
              type='submit'
              className='btn btn-1 btn-1--login'
              value='Login'
            />
          </div>

          <p className='text-register-link'>
            <Link to={'/register'}>Not register yet? make an account </Link>
          </p>
        </form>
      </div>
      <div className='auth-bottom-part'></div>
    </div>
  );
};

Login.propTypoes = {
  login: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  // isUserProfileLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { login, getUserProfile })(Login);
