import React, { createContext } from 'react';
// import cookie from 'react-cookies';
import { gql, useQuery } from '@apollo/client';

export const NoteContext = createContext();

const GET_MY_NOTES = gql`
  query GetMyNotes($author: ID!) {
    getNotes(filter: { author: $author }) {
      _id
      title
      slug
      content
      author {
        _id
      }
    }
  }
`;

const NoteContextProvider = ({ children }) => {
  const handleGetMyNotes = async ({ author }) => {
    try {
      const res = useQuery(GET_MY_NOTES, {
        variables: { author },
        pollInterval: 1000000
      });
      const { data } = res;

      console.log(data);
      return data.getNotes;
    } catch (error) {
      alert(error.message);
      return error;
    }
  };

  return (
    <NoteContext.Provider value={{ handleGetMyNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
