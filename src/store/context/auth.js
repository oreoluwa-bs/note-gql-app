import React, { createContext, useEffect, useState } from 'react';
import cookie from 'react-cookies';
import { gql, useMutation } from '@apollo/client';

export const AuthContext = createContext();

const SIGNIN_USER = gql`
  mutation SignInUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      recordID
      token
      record {
        _id
        email
      }
    }
  }
`;

const SIGNUP_USER = gql`
  mutation SignUpUser($email: String!, $password: String!) {
    signUpUser(email: $email, password: $password) {
      recordID
      token
      record {
        _id
        email
      }
    }
  }
`;

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const initAuth = cookie.load('_auth') || null;
    setAuth(initAuth);
  }, []);

  const [handleSignUpUser] = useMutation(SIGNUP_USER, {
    ignoreResults: false
  });

  const [handleSignInUser] = useMutation(SIGNIN_USER, {
    ignoreResults: false
  });

  const handleSetAuthToken = ({ token, record }) => {
    const cookieSettings = { path: '/', httpOnly: false };
    setAuth(record);
    cookie.save('_auth', record, cookieSettings);
    cookie.save('_token', token, cookieSettings);
  };

  const handleSignOut = () => {
    cookie.remove('_auth');
    cookie.remove('_token');
    setAuth(null);
  };

  const handleSignIn = async ({ email, password }) => {
    try {
      const res = await handleSignInUser({ variables: { email, password } });
      const { data } = res;

      handleSetAuthToken(data.loginUser);

      return data.loginUser.record;
    } catch (error) {
      alert(error.message);
      return error;
    }
  };

  const handleSignUp = async ({ email, password }) => {
    try {
      const res = await handleSignUpUser({ variables: { email, password } });
      const { data } = res;

      handleSetAuthToken(data.signUpUser);

      return data.signUpUser.record;
    } catch (error) {
      alert(error.message);
      return error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, handleSignIn, handleSignUp, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
