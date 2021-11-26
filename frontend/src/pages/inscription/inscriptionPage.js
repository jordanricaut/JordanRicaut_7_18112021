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

  const [data, setData] = useState({
    prenom: '',
    nom:'',
    email:'',
    mdp:''
  })

  return (
    <div className={InscriptionCSS.container}>
      <div className={InscriptionCSS.gauche}>
        <img src={Logo} alt="Logo"/>
        <h2> Restez connectez avec vos collègues</h2>
      </div>
      <div className={InscriptionCSS.droite}>
        <FormulaireText data={data} setData={setData} id="prenom" name="Prénom" label="Prénom" />
        <FormulaireText data={data} setData={setData} id="nom" name="Nom" label="Nom" />
        <FormulaireText data={data} setData={setData} id="email" name="email" label="Adresse e-mail"/>
        <FormulaireText data={data} setData={setData} id="mdp" name="mdp" label="Mot de passe" />
        <FormulaireBouton data={data} boutonTexte="S'inscrire" boutonId="inscription" css="btn_rouge"/>
        <Link to="/connexion">
        <p>Retour</p>
        </Link>
      </div>

    </div>
  );
}

export default InscriptionPage;
