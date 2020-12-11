import React from 'react';
import MyApolloProvider from './apollo';
import AuthContextProvider from './auth';
import NoteContextProvider from './note';

const RootProvider = ({ children }) => {
  return (
    <MyApolloProvider>
      <AuthContextProvider>
        <NoteContextProvider>{children}</NoteContextProvider>
      </AuthContextProvider>
    </MyApolloProvider>
  );
};

export default RootProvider;
