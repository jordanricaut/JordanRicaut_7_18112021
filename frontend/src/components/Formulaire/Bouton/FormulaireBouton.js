import React from 'react';
import { useNavigate } from 'react-router';


import './bouton.css'

function FormulaireBouton({css, boutonId, boutonTexte, data}) {

  let navigate = useNavigate();

  function handleClick(e) {
    if (boutonId === 'connexion') {
      e.preventDefault();
      console.log(data)
    }
    if (boutonId === 'sinscrire') {
      e.preventDefault();
      navigate('/inscription')
    }
    if (boutonId === 'inscription') {
      e.preventDefault();
      console.log(data)
    }
  }


  return <button type="button" onClick={handleClick} className={css} id={boutonId}>{boutonTexte}</button>
}

export default FormulaireBouton
