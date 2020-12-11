const { gql } = require('@apollo/client');

export const GET_MY_NOTES = gql`
  query GetMyNotes($author: MongoID!) {
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

export const GET_MY_NOTE = gql`
  query GetMyNote($slug: String!) {
    getNoteByField(filter: { slug: $slug }) {
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

export const CREATE_NOTE = gql`
  mutation CreateNote($content: String, $author: MongoID!) {
    createNote(record: { content: $content, author: $author }) {
      recordId
      record {
        _id
        title
        content
        slug
        createdAt
      }
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($_id: MongoID!, $record: UpdateByIdNoteInput!) {
    updateNoteById(_id: $_id, record: $record) {
      recordId
      record {
        _id
        title
        content
        slug
        createdAt
      }
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($_id: MongoID!) {
    deleteNoteById(_id: $_id) {
      error {
        message
      }
    }
  }
`;
