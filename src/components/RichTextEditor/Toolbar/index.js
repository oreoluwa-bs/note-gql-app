import React from 'react';
import sprite from '../../../assets/images/sprite.svg';

const BLOCK_TYPES = [
  { label: 'H', style: 'header-two' },
  { label: 'Blockquote', icon: 'icon-format_quote', style: 'blockquote' },
  {
    label: 'UL',
    icon: 'icon-format_list_bulleted',
    style: 'unordered-list-item'
  },
  {
    label: 'OL',
    icon: 'icon-format_list_numbered',
    style: 'ordered-list-item'
  },
  { label: 'Code Block', style: 'code-block', icon: 'icon-code' }
];

function StyleButton({ active, style, label, icon, onToggle }) {
  let className = 'btn btn--hover';
  if (active) {
    className += ' btn--active';
  }

  return (
    <button
      className={className}
      style={{ marginRight: '0.5rem' }}
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle(style);
      }}>
      {icon ? (
        <svg className="side-nav__header__icon">
          <use xlinkHref={`${sprite}#${icon}`} />
        </svg>
      ) : (
        label
      )}
    </button>
  );
}

export const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <span className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          icon={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </span>
  );
};

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', icon: 'icon-format_bold' },
  { label: 'Italic', style: 'ITALIC', icon: 'icon-format_italic' },
  { label: 'Underline', style: 'UNDERLINE', icon: 'icon-format_underlined' }
  // { label: 'Mono', style: 'CODE' }
];

export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <span className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          icon={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </span>
  );
};
