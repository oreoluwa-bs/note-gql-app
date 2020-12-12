import React, { useEffect, useState } from 'react';
import {
  ContentState,
  convertFromHTML,
  convertFromRaw,
  convertToRaw,
  EditorState
} from 'draft-js';
import RichTextEditor from '../../components/RichTextEditor';
import { useMutation, useQuery } from '@apollo/client';
import {
  DELETE_NOTE,
  GET_MY_NOTE,
  UPDATE_NOTE
} from '../../store/schema/noteQueries';

const NotePage = (props) => {
  const { data, loading } = useQuery(GET_MY_NOTE, {
    variables: { slug: props.match.params.noteSlug }
  });
  const [handleUpdateNote] = useMutation(UPDATE_NOTE, {
    ignoreResults: false
  });
  const [deleteNoteMutation] = useMutation(DELETE_NOTE);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (!props.location.state?.isNew && data?.getNoteByField?.content) {
      const content = convertFromRaw(JSON.parse(data.getNoteByField.content));
      setEditorState(EditorState.createWithContent(content));
    } else {
      const sampleMarkup = '<h2>Untitled Note<h2>';

      const blocksFromHTML = convertFromHTML(sampleMarkup);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));
    }
  }, [props.match.params.noteSlug, data?.getNoteByField?.content]);

  useEffect(() => {
    if (!data?.getNoteByField?.content && !loading) {
      props.history.push('/dashboard');
    }
  }, [data?.getNoteByField?.content, loading]);

  const handleSaveNote = async () => {
    const editorStateContent = editorState.getCurrentContent();
    const _id = data.getNoteByField._id;

    const title = editorStateContent.getFirstBlock().getText();
    const content = JSON.stringify(convertToRaw(editorStateContent));

    await handleUpdateNote({ variables: { _id, record: { title, content } } });
  };

  const handleDeleteNote = async () => {
    const _id = data.getNoteByField._id;
    await deleteNoteMutation({ variables: { _id } });
  };

  return (
    <div>
      <RichTextEditor
        editorState={editorState}
        setEditorState={setEditorState}
        onBlur={handleSaveNote}
        onDeleteNote={handleDeleteNote}
      />
    </div>
  );
};

export default NotePage;
