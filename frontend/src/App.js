import React, {useState, useEffect} from 'react';
import { UidContext } from './components/AppContext';
import Routes from './components/Routes'
import axios from 'axios';

function App() {

const [uid, setUid] = useState(false)
useEffect(async() => {
  await axios({
    method: 'GET',
    url:`${process.env.REACT_APP_API_URL}jwtid`,
    withCredentials: true
  })
  .then((res) => {
    console.log(res)
    setUid(res.data)
  })
  .catch((err) => console.log("Pas de token"))
}, [uid])

  return (
    <UidContext.Provider value={uid}>
      <Routes/>
    </UidContext.Provider>
  )
}

export default App;
