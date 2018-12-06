import React from 'react';
import PropTypes from 'prop-types';

import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from 'draft-js-export-html';

import '../RichEditor.css';

import AppIconFontAwesome from 'components/AppIconFontAwesome';

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
    const { label, icon, active } = this.props;
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
        {icon.length !== 2 ?
          label :
          <AppIconFontAwesome
            icon={icon}
            fixedWidth
          />}
      </span>
    );
  }
}

StyleButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
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
      <AppIconFontAwesome
        icon={control.icon}
        fixedWidth
      />
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
      icon={control.icon}
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
      icon={control.icon}
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

  const disabled = control.label === 'Undo' ?
    editorState.getUndoStack().count() === 0 : editorState.getRedoStack().count() === 0;

  return (
    <span
      className={`RichEditor-styleButton${disabled ? ' RichEditor-disabledButton' : ''}`}
      role="button"
      tabIndex={-1}
      onMouseDown={(e) => {
        e.preventDefault();
        if (control.label === 'Undo') {
          onToggleUndo();
        } else if (control.label === 'Redo') {
          onToggleRedo();
        }
      }}
    >
      <AppIconFontAwesome
        icon={control.icon}
        fixedWidth
      />
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
  { type: 'PREVIEW', label: 'Preview', icon: ['far', 'terminal'] },
  { type: 'BLOCK', label: 'H1', icon: [], style: 'header-one' },
  { type: 'BLOCK', label: 'H2', icon: [], style: 'header-two' },
  { type: 'BLOCK', label: 'H3', icon: [], style: 'header-three' },
  { type: 'BLOCK', label: 'H4', icon: [], style: 'header-four' },
  { type: 'INLINE', label: 'Bold', icon: ['far', 'bold'], style: 'BOLD' },
  { type: 'INLINE', label: 'Italic', icon: ['far', 'italic'], style: 'ITALIC' },
  { type: 'INLINE', label: 'Underline', icon: ['far', 'underline'], style: 'UNDERLINE' },
  { type: 'BLOCK', label: 'Blockquote', icon: ['fas', 'quote-right'], style: 'blockquote' },
  { type: 'BLOCK', label: 'Code Block', icon: ['far', 'code'], style: 'code-block' },
  { type: 'BLOCK', label: 'UL', icon: ['far', 'list'], style: 'unordered-list-item' },
  { type: 'BLOCK', label: 'OL', icon: ['far', 'list-ol'], style: 'ordered-list-item' },
  { type: 'INLINE', label: 'Monospace', icon: [], style: 'CODE' },
  { type: 'UNDOREDO', label: 'Undo', icon: ['far', 'undo-alt'] },
  { type: 'UNDOREDO', label: 'Redo', icon: ['far', 'redo-alt'] },
];

const StyleControls = (props) => {
  return (
    <React.Fragment>
      {CONTROLS.map(control =>
        <React.Fragment key={control.label}>
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
