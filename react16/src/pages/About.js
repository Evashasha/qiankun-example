import React from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css';
import CodeHighlighter from 'braft-extensions/dist/code-highlighter';
const excludeControls = [
  'letter-spacing',
  'line-height',
  'clear',
  'headings',
  'list-ol',
  'list-ul',
  'remove-styles',
  'superscript',
  'subscript',
  'hr',
  'text-align'
]
BraftEditor.use(CodeHighlighter({
  includeEditors: ['editor-with-code-highlighter'],
}))
export default function() {
  window.setImmediate(()=>{
    console.log(1111)
  });
  window.setTimeout(()=>{
    console.log(1111, '22222')
  });
  return (
    <h2 className="app-nav-item" style={{ borderColor: 'green' }}>
      <BraftEditor excludeControls={excludeControls} id="editor-with-code-highlighter"/>
    </h2>
  );
}
