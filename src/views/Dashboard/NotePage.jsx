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
import { GET_MY_NOTE, UPDATE_NOTE } from '../../store/schema/noteQueries';

const NotePage = (props) => {
  const { data } = useQuery(GET_MY_NOTE, {
    variables: { slug: props.match.params.noteSlug }
  });
  const [handleUpdateNote] = useMutation(UPDATE_NOTE, {
    ignoreResults: false
  });

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

  const handleSaveNote = async () => {
    const _id = data.getNoteByField._id;
    const title = editorState.getCurrentContent().getFirstBlock().getText();
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    await handleUpdateNote({
      variables: {
        _id,
        record: { title, content }
      }
    });
  };
  return (
    <div>
      <RichTextEditor
        editorState={editorState}
        setEditorState={setEditorState}
        onBlur={handleSaveNote}
      />
    </div>
  );
};

export default NotePage;
