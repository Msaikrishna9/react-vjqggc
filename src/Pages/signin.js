import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import './signin.css';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('form submit', values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = 'Mobile number Required';
      }
      if (!values.email) {
        errors.email = 'Email Required';
      }
      if (!values.password) {
        errors.password = 'Password Required';
      }
      return errors;
    },
  });

  const onSubmit = async (values) => {
    let item = { values };
    const response = await axios
      .post('https://ts-api.srisailadevasthanam.org/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(item),
      })
      .catch((err) => {
        if (err && err.response);
      });

    if (response) {
      alert('Welcome back in. Authenticating...');
    }
  };

  return (
    <div className="sd-login-main">
      <div className="sd-l-left">
        <h2>Sign in</h2>
        <h3>Login to your account</h3>
        <form autoComplete="off">
          <div className="number">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="tel"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name ? (
              <div className="errors">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <div className="errors">{formik.errors.password}</div>
            ) : null}
          </div>
          <p className="forgot">
            <a href="">Forgot Password?</a>
          </p>
          <button onSubmit={onSubmit}>Sign in</button>
          <p className="help">
            Have trouble signing in?
            <span>
              <a href="" style={{ color: '#2f3193' }}>
                Get Help
              </a>
            </span>
          </p>
        </form>
        <div className="sd-l-leftbottom">
          <p>
            Dont have an account ?<a href="">Sign Up</a>
          </p>
        </div>
      </div>
      <div className="sd-l-right">
        <img alt="signin img" />
      </div>
    </div>
  );
};

export default Login;
