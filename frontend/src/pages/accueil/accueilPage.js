import React, { useEffect }from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../assets/img/icon-above-font.svg"
import Bouton from '../../components/Formulaire/Bouton/Bouton'

import Header from '../../components/Header/Header'
import Profil from '../../components/Profil/Profil'
import Post from '../../components/Post/Post'

import './accueil.css'


function AccueilPage() {
  useEffect(() => {
    document.title = "Groupomania - Accueil"
  }, [])

  let contenu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis condimentum massa ac euismod. Sed accumsan lectus quis erat porta tristique. Aenean scelerisque dui euismod tincidunt cursus. Sed in velit eget elit consectetur egestas. Cras vehicula turpis in porttitor sollicitudin. Fusce posuere malesuada consequat. Sed congue libero eu hendrerit blandit. Nunc sollicitudin quam vel condimentum sodales. In dignissim, felis sed tempus pretium, mi sapien suscipit eros, eget tristique turpis nunc at tortor. Mauris imperdiet ultrices consequat. Vestibulum scelerisque nisi mauris, non iaculis turpis vehicula pellentesque. Duis aliquam, magna id fringilla commodo, ante tortor imperdiet sapien, et tristique felis mauris id velit. Aenean eget dignissim nunc. Nam mauris mi, tincidunt in augue id, efficitur efficitur diam."


  return (
    <div>
      <Header />
      <div class="container">
        <div class="aside_gauche">
          <h3 class="titre">Votre profil</h3>
          <Profil />
        </div>
        <div class="main">
          <h3 class="titre">Fil d'actu</h3>
          <div class="posts">
            <Post css="post" contenu={contenu} titre="Ferrari" imagesrc="https://sf1.auto-moto.com/wp-content/uploads/sites/9/2021/03/f1-2021-ferrari-sf21-6.jpg" plus="Voir Plus"/>
            <Post css="post" contenu={contenu} titre="Ferrari" imagesrc="https://sf1.auto-moto.com/wp-content/uploads/sites/9/2021/03/f1-2021-ferrari-sf21-6.jpg" plus="Voir Plus"/>
            <Post css="post" contenu={contenu} titre="Ferrari" imagesrc="https://sf1.auto-moto.com/wp-content/uploads/sites/9/2021/03/f1-2021-ferrari-sf21-6.jpg" plus="Voir Plus"/>
          </div>
        </div>
        <div class="aside_droite">
          <h3 class="titre">Vos Posts</h3>
            <Bouton boutonTexte="Nouveau Post" boutonId="nouveau-post" css="btn_rouge margin-r10"/>
        </div>
    </div>
  </div>
)}

export default AccueilPage;
