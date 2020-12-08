import React, { createContext, useState } from 'react';
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
  const initAuth = JSON.parse(localStorage.getItem('auth')) || null;
  const [auth, setAuth] = useState(initAuth);

  const [handleSignUpUser] = useMutation(SIGNUP_USER, {
    ignoreResults: false
  });

  const [handleSignInUser] = useMutation(SIGNIN_USER, {
    ignoreResults: false
  });

  const handleSetAuthToken = async (token) => {
    console.log(token);
  };

  const handleSignIn = async ({ email, password }) => {
    try {
      const res = await handleSignInUser({ variables: { email, password } });
      const { data } = res;

      setAuth(data.loginUser.record);
      handleSetAuthToken(data.loginUser.token);

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

      setAuth(data.signUpUser.record);
      handleSetAuthToken(data.signUpUser.token);

      return data.signUpUser.record;
    } catch (error) {
      alert(error.message);
      return error;
    }
  };

  return (
    <AuthContext.Provider value={{ auth, handleSignIn, handleSignUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
