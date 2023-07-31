// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//     return (
//         <header className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container">
//                 <Link className="navbar-brand logo" to="/"><img src='/image/rlibrelogo.png' alt="Logo" /></Link>
//                 <a className="navbar-brand" href="/">Mes Coworkings</a>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-toggle="collapse"
//                     data-target="#navbarNav"
//                     aria-controls="navbarNav"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ml-auto">
//                         <li className="nav-item">
//                             <a className="nav-link" href="/">Accueil</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/coworkings">Espaces de coworking</a>
//                         </li>
//                         {/* Ajoutez ici d'autres liens de navigation si nécessaire */}
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;


//////

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
                    Mes Coworkings
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
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Fin du bouton du menu de navigation */}

                {/* Liens de navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/coworkings">
                                Espaces de coworking
                            </Link>
                        </li>
                        {/* Ajoutez ici d'autres liens de navigation si nécessaire */}
                    </ul>
                </div>
                {/* Fin des liens de navigation */}
            </div>
        </header>
    );
};

export default Header;

