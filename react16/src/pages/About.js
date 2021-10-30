import React from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
export default function() {
  window.setImmediate(()=>{
    console.log(1111)
  });
  window.setTimeout(()=>{
    console.log(1111, '22222')
  });
  return (
    <h2 className="app-nav-item" style={{ borderColor: 'green' }}>
      <BraftEditor/>
    </h2>
  );
}
