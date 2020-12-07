import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { formReducer } from '../../store/reducers/form';

const LoginPage = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="auth-page">
      <Navbar logoColor="#fff" />
      <div className="auth-wrapper">
        <form
          action="#"
          className="form"
          style={{ flex: '0 1 30%' }}
          onSubmit={handleSubmit}>
          <div className="form-container">
            <h2 className="heading">Sign in to your account</h2>
            <p className="heading-subtitle">
              Start keeping your notes properly
            </p>
            <div className="form-group">
              <fieldset>
                <label htmlFor="email">
                  <p className="form-label">Email Address</p>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    onChange={setFormData}
                    required
                  />
                </label>
              </fieldset>
            </div>
            <div className="form-group">
              <fieldset>
                <label htmlFor="email">
                  <p className="form-label"> Password</p>
                  <input
                    type="password"
                    name="password"
                    className="form-input"
                    onChange={setFormData}
                    required
                  />
                </label>
              </fieldset>
            </div>
            <div className="form-group">
              <Link to="/signup">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't Have an account? Sign Up
              </Link>
            </div>
            <div className="form-group" style={{ textAlign: 'right' }}>
              <button className="btn btn__primary">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
