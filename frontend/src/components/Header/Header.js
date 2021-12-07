import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'

import './header.css'

import LogoHeader from '../../assets/img/icon-left-font-monochrome-black.png'
import Bouton from '../Formulaire/Bouton/Bouton'

function Header() {

  return (
    <div class="header">
      <Link to="/accueil">
      <h1 class="accueil effect-underline ">Accueil</h1>
      </Link>
      <img class="logo" src={LogoHeader} alt="Logo Header"/>
      <Bouton boutonTexte="Se Déconnecter" boutonId="deconnexion" css="btn_deconnexion"/>
    </div>
  )
}

export default Header
