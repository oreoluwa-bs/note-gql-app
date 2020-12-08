import React from 'react';
import MyApolloProvider from './apollo';

const RootProvider = ({ children }) => {
  return <MyApolloProvider>{children}</MyApolloProvider>;
};

export default RootProvider;
