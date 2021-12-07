import React, { useEffect }from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../assets/img/icon-above-font.svg"
import Bouton from '../../components/Formulaire/Bouton/Bouton'

import Header from '../../components/Header/Header'


function ErreurPage() {
  useEffect(() => {
    document.title = "Groupomania - Erreur 404"
  }, [])



  return (
    <div>
      <Header />
      <div style={{display: 'grid', gridTemplateColumns: '1fr'}}>
        <h1 style={{margin: "80px auto", textAlign: 'center', color: '#F44336'}}>Erreur 404 : Page non disponible</h1>
        <h1 style={{margin: "auto", textAlign: 'center'}}>Merci de revenir à l'accueil</h1>
      </div>
      </div>
)}

export default ErreurPage;
