import React, {useState} from 'react';
import axios from 'axios'

const Connexion = () => {
  const [email, setEmail] = useState('')
  const [mdp, setMdp] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const formErreur = document.querySelector('.form-erreur')

    axios({
      method: "post",
      url:`${process.env.REACT_APP_API_URL}api/user/connexion`,
      withCredentials: true,
      data: {
        email: email,
        mdp: mdp
      },
    })
    .then((res) => {
      console.log(res)
      window.location = '/';
    })
    .catch(err => {
      formErreur.innerHTML = err
    })
  }

  return (
    <form action="" onSubmit={handleLogin} id="connexion-form" className="connexion-form">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
      <label htmlFor="mdp">Mot de passe</label>
      <input type="password" name="mdp" id="mdp" onChange={(e) => setMdp(e.target.value)} value={mdp}/>
      <input type="submit" className="btn_bleue mt-20" value="Se connecter" />
      <div className="form-erreur erreur"></div>

    </form>
  )
}

export default Connexion;
