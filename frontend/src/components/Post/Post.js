import React from 'react'

import './post.css'




function Post({titre, imagesrc, contenu}) {


  if (window.location.pathname === "/accueil") {
    if(contenu.length > 150) {
      contenu = contenu.substr(0, 150) + "...";
    }
  }

  return (
    <div class="post">
      <h4>{titre}</h4>
      <img src={imagesrc} style={{maxWidth: '100%'}}/>
      <p>{contenu}</p>
      <p>Voir Plus</p>
    </div>
  )
}

export default Post
