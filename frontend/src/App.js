import React, { useState, useEffect } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

function App() {
  useEffect(() => {
    return (document.title = "Groupomania");
  }, []);

  const [uid, setUid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("Pas de token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
