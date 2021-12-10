
import React from 'react';

import './textarea.css'

function TextArea({data, setData, id, name, label, prevState }) {

  const handleChange = (e) => {
    setData(prevState => {
      return { ...prevState, [id]: e.target.value }
    });
  }

  return (
    <div className="form_text">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={name} value={data.id} onChange={handleChange}/>
    </div>
  );

}

export default TextArea
