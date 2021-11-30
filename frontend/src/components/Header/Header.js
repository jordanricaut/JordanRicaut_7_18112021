import React from 'react'
import { Link } from 'react-router-dom';

import './header.css'

import LogoHeader from '../../assets/img/icon-left-font-monochrome-black.png'

function Header() {


  return (
    <div class="header">
      <Link to="/accueil">
      <h1 class="effect-underline">Accueil</h1>
      </Link>
      <img src={LogoHeader} alt="Logo Header"/>
    </div>
  )
}

export default Header
