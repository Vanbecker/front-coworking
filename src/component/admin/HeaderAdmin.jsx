import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("jwt");

        navigate("/login");
    };

    const jwt = Cookies.get("jwt");
    const userData = jwtDecode(jwt);

    return (
        <header>
            <div className="container d-flex justify-content-center mt-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Page Administrateur</h3>
                    </div>
                    <div className="card-body"></div>
                    <nav>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to={"/"}>Accueil</Link>
                            </li>
                            <li className="list-group-item">
                                <Link Link style={{ color: "#FFB8BD" }} to={"/admin/coworkings"}>Liste des coworkings</Link>
                            </li>
                            <li className="list-group-item">
                                <Link Link style={{ color: "#FFB8BD" }} to={"/admin/createcoworking"}>Ajouter un coworking</Link>
                            </li>
                            <li className="list-group-item">
                                <p>Connecté en tant que {userData.data.username}</p>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="link-danger" onClick={handleLogout}>
                                    Se déconnecter
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HeaderAdmin;


/////////////


// import React from "react";
// import { Link } from "react-router-dom";
// import jwtDecode from "jwt-decode";


// const handleLogout = () => {
//     Cookies.remove("jwt");

//     navigate("/login");
// };

// const jwt = Cookies.get("jwt");
// const userData = jwtDecode(jwt);

// const HeaderAdmin = () => {
//     return (
//         <header className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container">
//                 <Link className="navbar-brand d-flex align-items-center" to="/">
//                     <img
//                         src="/image/airauralogo2.jpg"
//                         alt="Logo"
//                         style={{ height: "50px", marginRight: "30px" }}
//                     />
//                     {/* Mes Coworkings */}
//                 </Link>

//                 {/* Bouton du menu de navigation */}
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
//                 {/* Fin du bouton du menu de navigation */}

//                 {/* Liens de navigation */}
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ml-auto">
//                         <li className="nav-item">

//                         </li>
//                         <li li className="nav-item">
//                             <Link className="nav-link" to={"/admin"}>Accueil</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/admin/coworkings">
//                                 Espaces de coworking
//                             </Link>

//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="admin/createcoworking">
//                                 Création de coworking
//                             </Link>
//                         </li>
//                         <li>
//                             <p>Connecté en tant que {userData.data.username}</p>
//                         </li >
//                         <li className="nav-item">
//                             <a href="#" className="nav-link" onClick={handleLogout}>
//                                 Se déconnecter
//                             </a>
//                         </li>


//                     </ul>
//                 </div>

//                 {/* Fin des liens de navigation */}
//             </div>
//         </header>
//     );
// };

// export default Header;

///

{/* <div>
    <div>
        <div>
            <h3>Page Administrateur</h3>
        </div>
        <div></div>
        <nav>
            <ul>
                <li li className="nav-item">
                    <Link className="nav-link" to={"/admin"}>Accueil</Link>
                </li>
                <li>
                    <Link>Liste des coworkings</Link>
                </li>
                <li>
                    <Link>Ajouter un coworking</Link>
                </li>
                <li>
                    <p>Connecté en tant que {userData.data.username}</p>
                </li>
                <li>
                    <a href="#" onClick={handleLogout}>
                        Se déconnecter
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div> */}




