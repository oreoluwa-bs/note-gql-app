import React, { useReducer } from 'react';
import { formReducer } from '../../store/reducers/form';

const SignUpPage = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div
        style={{
          minHeight: '100vh',
          background: 'royalblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <form
          className="form"
          style={{ flex: '0 1 30%' }}
          onSubmit={handleSubmit}>
          <div className="form-container">
            <h2>Sign Up</h2>
            <p className="heading-subtitle">So we can identify you</p>
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
              <button className="btn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
