import React, { useState } from 'react';

import Header from '../../components/Header/Header'

import './nouveaupost.css'

import Text from '../../components/Formulaire/Text/Text'
import TextArea from '../../components/Formulaire/TextArea/TextArea'
import Bouton from '../../components/Formulaire/Bouton/Bouton'
import InputFile from '../../components/Formulaire/InputFile/InputFile'

function NouveauPostPage() {


  const [data, setData] = useState({
    titre: '',
    description:'',
  })


  return(
    <div>
      <Header />
      <div class="form_nouveaupost">
      <Text data={data} setData={setData} id="titre" name="Titre" label="Titre" />
      <TextArea data={data} setData={setData} id="description" name="Description" label="Description" />
      <InputFile />
      <Bouton data={data} boutonTexte="Envoyer" boutonId="envoyer-post" css="btn_rouge"/>
      </div>
    </div>
  )
}

export default NouveauPostPage
