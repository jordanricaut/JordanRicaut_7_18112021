import React, { useEffect, useState } from 'react';
import ConnexionCSS from "./connexion.module.css";

import Text from '../../components/Formulaire/Text/Text'
import Bouton from '../../components/Formulaire/Bouton/Bouton'

import Logo from "../../assets/img/icon-above-font.svg"

function ConnexionPage() {
  useEffect(() => {
    document.title = "Groupomania - Connexion ou Inscription"
  }, [])

  const [data, setData] = useState({
    email:'',
    mdp:''
  })

  return (
    <div className={ConnexionCSS.container}>
      <div className={ConnexionCSS.gauche}>
        <img src={Logo} alt="Logo"/>
        <h2> Restez connectez avec vos collègues</h2>
      </div>
      <div className={ConnexionCSS.droite}>
        <Text data={data} setData={setData} id="email" name="email" label="Adresse e-mail"/>
        <Text data={data} setData={setData} id="mdp" name="mdp" label="Mot de passe" />
        <Bouton data={data} boutonTexte="Se Connecter" boutonId="connexion" css="btn_rouge"/>
        <Bouton boutonTexte="S'inscrire" boutonId="sinscrire" css="btn_bleue"/>
      </div>
    </div>
  );
}

export default ConnexionPage;
