import React, { useContext } from "react";
import FilActu from "../components/FilActu";
import { UidContext } from "../components/AppContext";
import NouveauPost from "../components/Post/NouveauPost";

function Accueil() {
  const uid = useContext(UidContext);

  return (
    <div className="accueil">
      <div className="main">
          {uid ? <NouveauPost /> : null }
        <FilActu />
      </div>
    </div>
  );
}

export default Accueil;
