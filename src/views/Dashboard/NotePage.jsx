import { EditorState } from 'draft-js';
import React, { useState } from 'react';
import RichTextEditor from '../../components/RichTextEditor';

const NotePage = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
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
