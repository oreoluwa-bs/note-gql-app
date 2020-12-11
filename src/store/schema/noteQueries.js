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
