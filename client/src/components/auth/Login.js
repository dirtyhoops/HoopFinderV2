import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
  };

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
            <input type='submit' className='btn btn-login' value='Login' />
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

export default Login;
