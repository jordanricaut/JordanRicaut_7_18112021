import React from 'react'


import Bouton from '../Formulaire/Bouton/Bouton'

import './profil.css'



function Profil() {



  return (
    <div class="profil">
      <h3 class="infos">Ricaut Jordan</h3>
      <h4 class="infos">Votre email : jordan.ricaut5@gmail.com</h4>
      <Bouton boutonTexte="Modifier votre profil" boutonId="modifier-profil" css="btn_rouge"/>
    </div>
  )
}

export default Profil
