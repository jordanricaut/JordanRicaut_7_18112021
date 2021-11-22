import React from 'react';
import { useNavigate } from 'react-router';


import './bouton.css'

function FormulaireBouton(props) {

  let navigate = useNavigate();

  function handleClick(e) {
    if (props.boutonId === 'connexion') {
      e.preventDefault();
      console.log('Bouton connexion')
    }
    if (props.boutonId === 'sinscrire') {
      e.preventDefault();
      navigate('/inscription')
    }
    if (props.boutonId === 'inscription') {
      e.preventDefault();
      console.log('Bouton inscription')
    }
  }


  return <button type="button" onClick={handleClick} className={props.css} id={props.boutonId}>{props.boutonTexte}</button>
}

export default FormulaireBouton
