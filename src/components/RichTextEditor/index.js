import React, { useEffect, useRef } from 'react';
import { Editor, RichUtils } from 'draft-js';
import { BlockStyleControls, InlineStyleControls } from './Toolbar';
import sprite from '../../assets/images/sprite.svg';

const RichTextEditor = ({ editorState, setEditorState, ...otherProps }) => {
  const editorRef = useRef();

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  // Funtions
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

  // const setTitle = () => {
  //   return editorState.getCurrentContent().getFirstBlock().getText();
  // };
  return (
    <div>
      <div className="toolbar">
        <span style={{ display: 'flex' }}>
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
          <button className="btn btn__danger">
            <svg className="side-nav__header__icon">
              <use xlinkHref={`${sprite}#icon-delete`} />
            </svg>
          </button>
        </span>
      </div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
        ref={editorRef}
        onBlur={() => console.log('save note', otherProps)}
      />
    </div>
  );
};

export default RichTextEditor;
