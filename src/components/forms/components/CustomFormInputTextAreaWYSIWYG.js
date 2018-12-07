import React from 'react';
import PropTypes from 'prop-types';

import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from 'draft-js-export-html';

import '../RichEditor.css';


const propTypes = {
  type: PropTypes.oneOf(['textarea-wysiwyg']).isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class CustomFormInputTextAreaWYSIWYG extends React.Component {
  state = {
    editorState: EditorState.createWithContent(stateFromHTML(this.props.value)),
    markupState: this.props.value,
    preview: false,
  }

  handleEditorChange = (editorState) => {
    const markupState = stateToHTML(editorState.getCurrentContent());
    this.setState({ editorState, markupState });
  }

  handleHTMLEditorChange = (e) => {
    const markupState = e.target.value;
    const contentState = stateFromHTML(markupState);
    const editorState = EditorState.createWithContent(contentState);
    this.setState({ editorState, markupState });
  }

  /*
   * Update HTML to Formik state
   */
  handleBlur = () => {
    const { name, onChange, onBlur } = this.props;
    const { markupState } = this.state;
    onBlur(name, true); // Update Formik touched
    onChange(name, markupState); // Update Formik state
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleEditorChange(newState);
      return true;
    }
    return false;
  }

  mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.handleEditorChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e); /* eslint-disable-line consistent-return */
  }

  toggleUndo = () => {
    const { editorState } = this.state;
    const newEditorState = EditorState.undo(editorState);
    const markupState = stateToHTML(newEditorState.getCurrentContent());
    this.setState({ editorState: newEditorState, markupState });
  }

  toggleRedo = () => {
    const { editorState } = this.state;
    const newEditorState = EditorState.redo(editorState);
    const markupState = stateToHTML(newEditorState.getCurrentContent());
    this.setState({ editorState: newEditorState, markupState });
  }

  toggleBlockType = (blockType) => {
    const { editorState } = this.state;
    this.handleEditorChange(RichUtils.toggleBlockType(editorState, blockType));
  }

  toggleInlineStyle = (inlineStyle) => {
    const { editorState } = this.state;
    this.handleEditorChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }

  focusEditor = () => {
    this.editorRef.focus();
  }

  focusMarkupEditor = () => {
    this.markupEditorRef.focus();
  }

  focus = () => {
    const { preview } = this.state;
    if (preview) {
      this.focusMarkupEditor();
    } else {
      this.focusEditor();
    }
  }

  togglePreview = () => {
    const { preview } = this.state;
    this.setState({ preview: !preview }, this.focus);
  }

  render() {
    const { placeholder } = this.props;
    const { editorState, markupState, preview } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.

    let editorClassName = `RichEditor-editor${preview ? ' noshow' : ''}`;
    const contentState = editorState.getCurrentContent();

    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        editorClassName = `${editorClassName} RichEditor-hidePlaceholder`;
      }
    }

    return (
      <React.Fragment>
        <div className="RichEditor-root">
          <div className="RichEditor-controls">
            <StyleControls
              preview={preview}
              editorState={editorState}
              onTogglePreview={this.togglePreview}
              onToggleBlockType={this.toggleBlockType}
              onToggleInlineStyle={this.toggleInlineStyle}
              onToggleUndo={this.toggleUndo}
              onToggleRedo={this.toggleRedo}
            />
          </div>


          <div
            className={editorClassName}
            role="button"
            tabIndex={-1}
            onClick={this.focusEditor}
          >
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.handleEditorChange}
              onBlur={() => this.handleBlur('editor')}
              placeholder={placeholder}

              ref={(ref) => { this.editorRef = ref; }}
              spellCheck
            />
          </div>


          <div className={`MarkupEditor-editor${!preview ? ' noshow' : ''}`}>
            <textarea
              type="textarea"
              // name={name}
              // id={`id-${name}`}

              placeholder="Editor source"
              // required={required}
              value={markupState}
              onChange={this.handleHTMLEditorChange}
              onBlur={() => this.handleBlur('markup')}

              ref={(ref) => { this.markupEditorRef = ref; }}
              // invalid={hasError}
            />
          </div>


        </div>
      </React.Fragment>
    );
  }
}

CustomFormInputTextAreaWYSIWYG.propTypes = propTypes;

export default CustomFormInputTextAreaWYSIWYG;


/*
 * Style button.
 */
class StyleButton extends React.Component { /* eslint-disable-line */
  onToggle = (e) => {
    const { style, onToggle } = this.props;
    e.preventDefault();
    onToggle(style);
  };

  render() {
    const { label, iconClass, active } = this.props;
    let className = 'RichEditor-styleButton';

    if (active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span
        className={className}
        role="button"
        tabIndex={-1}
        onMouseDown={this.onToggle}
      >
        <div className={`RichEditor-${iconClass}`}>
          {label}
        </div>
      </span>
    );
  }
}

StyleButton.propTypes = {
  label: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  active: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};


/*
 * Preview control.
 */
const PreviewControl = (props) => {
  const { control, preview, onTogglePreview } = props;

  return (
    <span
      className={`RichEditor-styleButton${preview ? ' RichEditor-activeButton' : ''}`}
      role="button"
      tabIndex={-1}
      onMouseDown={(e) => {
        e.preventDefault();
        onTogglePreview();
      }}
    >
      <div className={`RichEditor-${control.iconClass}`}>
        {'>_'}
      </div>
    </span>
  );
};

PreviewControl.propTypes = {
  control: PropTypes.object.isRequired,
  preview: PropTypes.bool.isRequired,
  onTogglePreview: PropTypes.func.isRequired,
};


/*
 * Block style control.
 */
const BlockStyleControl = (props) => {
  const { control, editorState, onToggleBlockType } = props;

  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <StyleButton
      active={control.style === blockType}
      label={control.label}
      iconClass={control.iconClass}
      onToggle={onToggleBlockType}
      style={control.style}
    />
  );
};

BlockStyleControl.propTypes = {
  control: PropTypes.object.isRequired,
  editorState: PropTypes.object.isRequired,
  onToggleBlockType: PropTypes.func.isRequired,
};


/*
 * Inline style control.
 */
const InlineStyleControl = (props) => {
  const { control, editorState, onToggleInlineStyle } = props;
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <StyleButton
      active={currentStyle.has(control.style)}
      label={control.label}
      iconClass={control.iconClass}
      onToggle={onToggleInlineStyle}
      style={control.style}
    />
  );
};

InlineStyleControl.propTypes = {
  control: PropTypes.object.isRequired,
  editorState: PropTypes.object.isRequired,
  onToggleInlineStyle: PropTypes.func.isRequired,
};

/*
 * Inline style control.
 */
const UndoRedoControl = (props) => {
  const { control, editorState, onToggleUndo, onToggleRedo } = props;

  const disabled = control.id === 'undo' ?
    editorState.getUndoStack().count() === 0 : editorState.getRedoStack().count() === 0;

  return (
    <span
      className={`RichEditor-styleButton${disabled ? ' RichEditor-disabledButton' : ''}`}
      role="button"
      tabIndex={-1}
      onMouseDown={(e) => {
        e.preventDefault();
        if (control.id === 'undo') {
          onToggleUndo();
        } else if (control.id === 'redo') {
          onToggleRedo();
        }
      }}
    >
      <div className={`RichEditor-${control.iconClass}`} />
    </span>
  );
};

UndoRedoControl.propTypes = {
  control: PropTypes.object.isRequired,
  editorState: PropTypes.object.isRequired,
  onToggleUndo: PropTypes.func.isRequired,
  onToggleRedo: PropTypes.func.isRequired,
};


const CONTROLS = [
  { type: 'PREVIEW', id: 'preview', label: 'Preview', iconClass: 'previewIcon' },
  { type: 'BLOCK', id: 'h1', label: 'H1', style: 'header-one', iconClass: 'headingIcon' },
  { type: 'BLOCK', id: 'h2', label: 'H2', style: 'header-two', iconClass: 'headingIcon' },
  { type: 'BLOCK', id: 'h3', label: 'H3', style: 'header-three', iconClass: 'headingIcon' },
  { type: 'BLOCK', id: 'h4', label: 'H4', style: 'header-four', iconClass: 'headingIcon' },
  { type: 'INLINE', id: 'bold', label: 'B', style: 'BOLD', iconClass: 'boldIcon' },
  { type: 'INLINE', id: 'italic', label: 'I', style: 'ITALIC', iconClass: 'italicIcon' },
  { type: 'INLINE', id: 'underline', label: 'U', style: 'UNDERLINE', iconClass: 'underlineIcon' },
  { type: 'BLOCK', id: 'blocquote', label: '', style: 'blockquote', iconClass: 'blockquoteIcon' },
  { type: 'BLOCK', id: 'codeblock', label: '</>', style: 'code-block', iconClass: 'codeblockIcon' },
  { type: 'BLOCK', id: 'ul', label: '', style: 'unordered-list-item', iconClass: 'ulIcon' },
  { type: 'BLOCK', id: 'ol', label: '1.', style: 'ordered-list-item', iconClass: 'olIcon' },
  // { type: 'INLINE', id: 'monospace', label: 'Monospace', icon: [], style: 'CODE',
  // iconClass: 'monospaceIcon' },
  { type: 'UNDOREDO', id: 'undo', label: '', iconClass: 'undoIcon' },
  { type: 'UNDOREDO', id: 'redo', label: '', iconClass: 'redoIcon' },
];

const StyleControls = (props) => {
  return (
    <React.Fragment>
      {CONTROLS.map(control =>
        <React.Fragment key={control.id}>
          {control.type === 'PREVIEW' &&
            <PreviewControl
              {...props}
              control={control}
            />}

          {control.type === 'BLOCK' &&
            <BlockStyleControl
              {...props}
              control={control}
            />}

          {control.type === 'INLINE' &&
            <InlineStyleControl
              {...props}
              control={control}
            />}

          {control.type === 'UNDOREDO' &&
            <UndoRedoControl
              {...props}
              control={control}
            />}
        </React.Fragment>)}
    </React.Fragment>
  );
};

StyleControls.propTypes = {
  preview: PropTypes.bool.isRequired,
  editorState: PropTypes.object.isRequired,
  onTogglePreview: PropTypes.func.isRequired,
  onToggleBlockType: PropTypes.func.isRequired,
  onToggleInlineStyle: PropTypes.func.isRequired,
  onToggleUndo: PropTypes.func.isRequired,
  onToggleRedo: PropTypes.func.isRequired,
};
