import React, { useState } from 'react';

import './formulaireText.css'

function FormulaireText({data, setData, id, name, label }) {

  const [element, setElement] = useState('')


  const handleChange = (e) => {
    setElement(e.target.value)
    setData({
      email:e.target.value,
      mdp:e.target.value
    })
    console.log(data)
}

  return (
    <div className="form_text">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={name} value={element} onChange={handleChange}/>
    </div>
  )
}



export default FormulaireText
