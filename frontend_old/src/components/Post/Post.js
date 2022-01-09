import React from 'react'

import { Link } from 'react-router-dom';


import './post.css'





function Post({titre, imagesrc, contenu, plus, css}) {


  if (window.location.pathname === "/accueil") {
    if(contenu.length > 150) {
      contenu = contenu.substr(0, 150) + "...";
    }
  }

  return (
    <div class={css}>
      <h2>{titre}</h2>
      <img src={imagesrc} style={{maxWidth: '100%'}}/>
      <p>{contenu}</p>
      <Link to="/post/1">
        <p>{plus}</p>
      </Link>
    </div>
  )
}

export default Post