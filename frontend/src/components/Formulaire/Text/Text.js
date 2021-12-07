
import React from 'react';

import './text.css'

function Text({data, setData, id, name, label, prevState }) {

  const handleChange = (e) => {
    setData(prevState => {
      return { ...prevState, [id]: e.target.value }
    });
  }

  return (
    <div className="form_text">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={name} value={data.id} onChange={handleChange}/>
    </div>
  );

}

export default Text
