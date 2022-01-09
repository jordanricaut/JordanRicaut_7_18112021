import React, {useEffect} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';


import './bouton.css'

function Bouton({css, boutonId, boutonTexte, data, setData}) {

  let navigate = useNavigate();

  function PostIncription() {
    useEffect(() => {
  // POST request using axios inside useEffect React hook
    axios.post('http://localhost:3030/api/user/inscription', data)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });    }, []);
  }


  function handleClick(e) {
    if (boutonId === 'connexion') {
      e.preventDefault();
      PostIncription()
      console.log(data)
      navigate('/accueil')
    }
    if (boutonId === 'sinscrire') {
      e.preventDefault();
      navigate('/inscription')
    }
    if (boutonId === 'inscription') {
      e.preventDefault();
      console.log(data)
      navigate('/accueil')
    }
    if (boutonId === 'deconnexion') {
      e.preventDefault();
      navigate('/')
    }
    if (boutonId === 'nouveau-post') {
      e.preventDefault();
      navigate('/nouveau-post')
    }
    if (boutonId === 'modifier-profil') {
      e.preventDefault();
      navigate('/modification-profil')
    }
    if (boutonId === 'modification-post') {
      e.preventDefault();
      console.log("Modification du post")
    }
    if (boutonId === 'suppression-post') {
      e.preventDefault();
      console.log("Suppression du post")
    }
    if (boutonId === 'modifier-son-profil') {
      e.preventDefault();
      console.log(data)
      navigate('/accueil')
    }
    if (boutonId === 'envoyer-post') {
      e.preventDefault();
      console.log(data)
      navigate('/accueil')
    }

  }


  return <button type="button" onClick={handleClick} className={css} id={boutonId}>{boutonTexte}</button>
}

export default Bouton
