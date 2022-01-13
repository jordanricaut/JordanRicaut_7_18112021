import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link exact to="/">
            <img src="./img/icon-left-font-monochrome-black.png" alt="logo" />
          </Link>
        </div>
        {uid ? (
          <ul className="navbar-profil">
            <li>
              <h4 className="navbar-bienvenue">Bienvenue Jean</h4>
            </li>
            <li>
              <Link exact to="/profil">
                <input
                  className="btn_profil"
                  type="button"
                  value="Votre profil"
                />
              </Link>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul className="navbar-profil">
            <li></li>
            <li>
              <Link exact to="/profil">
                <input
                  className="btn_profil"
                  type="button"
                  value="Se connecter"
                />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
