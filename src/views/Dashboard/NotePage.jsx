import React, { useEffect, useState } from 'react';
import { ContentState, convertFromHTML, EditorState } from 'draft-js';
import RichTextEditor from '../../components/RichTextEditor';

const NotePage = () => {
  const isNew = true;
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (isNew) {
      const sampleMarkup = '<h2>Untitled Note<h2>';

      const blocksFromHTML = convertFromHTML(sampleMarkup);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));
    }
  }, []);

  return (
    <div>
      <RichTextEditor
        editorState={editorState}
        setEditorState={setEditorState}
      />
    </div>
  );
};

export default NotePage;
