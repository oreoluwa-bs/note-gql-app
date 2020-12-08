import React from 'react';
import MyApolloProvider from './apollo';
import AuthContextProvider from './auth';

const RootProvider = ({ children }) => {
  return (
    <MyApolloProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </MyApolloProvider>
  );
};

export default RootProvider;
