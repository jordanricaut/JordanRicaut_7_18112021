import React, {useState} from 'react'

import Header from '../../components/Header/Header'

import Bouton from '../../components/Formulaire/Bouton/Bouton'
import Text from '../../components/Formulaire/Text/Text'

import './modifProfilPage.css'


function ModifProfilPage() {


  const [data, setData] = useState({
    prenom: '',
    nom:'',
    email:'',
    mdp:''
  })

  return (
    <div>
      <Header />
      <div class="modif-profil">
        <Text data={data} setData={setData} id="prenom" name="Prénom" label="Prénom" />
        <Text data={data} setData={setData} id="nom" name="Nom" label="Nom" />
        <Text data={data} setData={setData} id="email" name="email" label="Adresse e-mail"/>
        <Text data={data} setData={setData} id="mdp" name="mdp" label="Mot de passe" />
        <Bouton data={data} boutonTexte="Modifier le profil" boutonId="modifier-son-profil" css="btn_rouge"/>
        </div>
    </div>
  );
}

export default ModifProfilPage
