import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InscriptionCSS from "./inscription.module.css"

import FormulaireText from '../../components/Formulaire/Text/FormulaireText'
import FormulaireBouton from '../../components/Formulaire/Bouton/FormulaireBouton'

import Logo from "../../assets/img/icon-above-font.svg"

function InscriptionPage() {
  useEffect(() => {
    document.title = "Groupomania - Inscription"
  }, [])


  return (
    <div className={InscriptionCSS.container}>
      <div className={InscriptionCSS.gauche}>
        <img src={Logo} alt="Logo"/>
        <h2> Restez connectez avec vos collègues</h2>
      </div>
      <div className={InscriptionCSS.droite}>
        <FormulaireText id="Prénom" name="Prénom" label="Prénom" />
        <FormulaireText id="Nom" name="Nom" label="Nom" />
        <FormulaireText id="email" name="email" label="Adresse e-mail"/>
        <FormulaireText id="mdp" name="mdp" label="Mot de passe" />
        <FormulaireBouton boutonTexte="S'inscrire" boutonId="inscription" css="btn_rouge"/>
        <Link to="/connexion">
        <p>Retour</p>
        </Link>
      </div>

    </div>
  );
}

export default InscriptionPage;
