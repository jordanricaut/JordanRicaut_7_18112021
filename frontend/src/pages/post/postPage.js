import React from 'react'

import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'

import Bouton from '../../components/Formulaire/Bouton/Bouton'


import './postpage.css'


function PostPage() {


  let contenu = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis condimentum massa ac euismod. Sed accumsan lectus quis erat porta tristique. Aenean scelerisque dui euismod tincidunt cursus. Sed in velit eget elit consectetur egestas. Cras vehicula turpis in porttitor sollicitudin. Fusce posuere malesuada consequat. Sed congue libero eu hendrerit blandit. Nunc sollicitudin quam vel condimentum sodales. In dignissim, felis sed tempus pretium, mi sapien suscipit eros, eget tristique turpis nunc at tortor. Mauris imperdiet ultrices consequat. Vestibulum scelerisque nisi mauris, non iaculis turpis vehicula pellentesque. Duis aliquam, magna id fringilla commodo, ante tortor imperdiet sapien, et tristique felis mauris id velit. Aenean eget dignissim nunc. Nam mauris mi, tincidunt in augue id, efficitur efficitur diam."


  return (
    <div>
      <Header />
      <div class="post_unique">
      <Post contenu={contenu} titre="Ferrari" imagesrc="https://sf1.auto-moto.com/wp-content/uploads/sites/9/2021/03/f1-2021-ferrari-sf21-6.jpg"/>
      <Bouton boutonTexte="Modifier" boutonId="modification-post" css="btn_rouge"/>
      <Bouton boutonTexte="Supprimer" boutonId="suppression-post" css="btn_rouge"/>

    </div>
    </div>
  );
}

export default PostPage
