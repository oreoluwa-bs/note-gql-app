import { Editor, RichUtils } from 'draft-js';
import React from 'react';
import { BlockStyleControls, InlineStyleControls } from './Toolbar';

const RichTextEditor = ({ editorState, setEditorState }) => {
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handeled';
    }

    return 'not-handeled';
  };
  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />
        </span>
        <span>
          <button className="btn">Delete</button>
        </span>
      </div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </div>
  );
};

export default RichTextEditor;
