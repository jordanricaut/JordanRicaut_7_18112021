import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer)

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="./img/icon-left-font-monochrome-black.png" alt="logo" />
          </Link>
        </div>
        {uid ? (
          <ul className="navbar-profil">
            <li>
              <Link to="/profil">
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
              <Link to="/profil">
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
