import React from "react";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";


const Header = () => {

    const jwt = Cookies.get("jwt");

    let userData = null;

    if (jwt) {
        userData = jwtDecode(jwt);

        console.log(userData);
    }


    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Image à gauche */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="/image/airauralogo2.jpg"
                        alt="Logo"
                        style={{ height: "50px", marginRight: "30px" }} // Ajuster la hauteur de l'image
                    />
                </Link>
                {/* Fin de l'image à gauche */}

                {/* Bouton du menu de navigation */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Fin du bouton du menu de navigation */}

                {/* Liens de navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">
                                Accueil
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/admin/coworkings">
                                Espaces de coworking
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="admin/createcoworking">
                                Création de coworking
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <Link className="nav-link" to="/public/ReviewCoworkingsPagePublic">
                                Commentaire des coworkings
                            </Link>
                        </li>

                        {!userData ?

                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Se connecter
                                </Link>
                            </li>

                            :

                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <p>Connecté en tant que {userData.data.username}</p>
                                </Link>

                            </li>
                        }

                    </ul>
                </div>
                {/* Fin des liens de navigation */}
            </div>
        </header>
    );
};

export default Header;

