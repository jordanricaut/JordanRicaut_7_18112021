import React, { useEffect, useState } from 'react';
import ConnexionCSS from "./connexion.module.css";

import FormulaireText from '../../components/Formulaire/Text/FormulaireText'
import FormulaireBouton from '../../components/Formulaire/Bouton/FormulaireBouton'

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
        <FormulaireText data={data} setData={setData} id="email" name="email" label="Adresse e-mail"/>
        <FormulaireText data={data} setData={setData} id="mdp" name="mdp" label="Mot de passe" />
        <FormulaireBouton data={data} boutonTexte="Se Connecter" boutonId="connexion" css="btn_rouge"/>
        <FormulaireBouton boutonTexte="S'inscrire" boutonId="sinscrire" css="btn_bleue"/>
      </div>
    </div>
  );
}

export default ConnexionPage;
