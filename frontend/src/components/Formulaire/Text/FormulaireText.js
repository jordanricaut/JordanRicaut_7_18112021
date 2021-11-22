import React, { useState } from 'react';

import './formulaireText.css'

function FormulaireText(props) {

  const [element, setElement] = useState('')

  const handleChange = (e) => {
  setElement(e.target.value);
}

  return (
    <div className="form_text">
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} name={props.name} value={element} placeholder={props.placeholder} onChange={handleChange}/>
    </div>
  )
}



export default FormulaireText
