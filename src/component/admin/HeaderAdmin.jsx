// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie"; // N'oubliez pas d'importer le module Cookies

// const HeaderAdmin = () => {
//     const navigate = useNavigate();
//     ////
//     useEffect(() => {
//         const jwt = Cookies.get("jwt");

//         // S'il n'existe pas, cela signifie que l'utilisateur n'est pas connecté
//         // On le redirige vers la page de login
//         if (!jwt) {
//             navigate("/login");
//         }

//         // On décode le jwt
//         const user = jwtDecode(jwt);

//         // Si l'utilisateur a le rôle user (ID 1)
//         // On le redirige vers l'accueil public
//         if (user.data.role === 1) {
//             navigate("/");
//         }
//     }, []);
//     ////

//     const handleLogout = () => {
//         Cookies.remove("jwt");
//         navigate("/login");
//     };

//     return (
//         <div className="container d-flex justify-content-center mt-4">
//             <div className="card">
//                 <div className="card-header">
//                     <h3>Page Administrateur</h3>
//                 </div>
//                 <div className="card-body">
//                     <nav>
//                         <ul className="list-group">
//                             <li className="list-group-item">
//                                 <Link style={{ color: "#FFB8BD" }} to={"/admin/coworkings"}>Liste des coworkings</Link>
//                             </li>
//                             <li className="list-group-item" >
//                                 <Link style={{ color: "#FFB8BD" }} to={"/admin/createcoworking"}>Ajouter un coworking</Link>
//                             </li>
//                             <li className="list-group-item">
//                                 <a href="#" className="link-danger" onClick={handleLogout}>
//                                     Se déconnecter
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeaderAdmin;


//////


// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";
// import { Link, useNavigate } from "react-router-dom";

// const HeaderAdmin = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         Cookies.remove("jwt");

//         navigate("/login");
//     };

//     const jwt = Cookies.get("jwt");
//     const user = jwtDecode(jwt);

//     return (
//         <div className="container d-flex justify-content-center mt-4">
//             <div className="card">
//                 <div className="card-header">
//                     <h3>Page Administrateur</h3>
//                 </div>
//                 <div className="card-body">
//                     <nav>
//                         <ul className="list-group">
//                             <li style={{ color: "#FFB8BD" }} className="list-group-item">
//                                 <p>Connecté en tant que {user.data}</p>
//                             </li>
//                             <li className="list-group-item">
//                                 <Link style={{ color: "#FFB8BD" }} to={"/admin/coworkings"}>Liste des coworkings</Link>
//                             </li>
//                             <li className="list-group-item" >
//                                 <Link style={{ color: "#FFB8BD" }} to={"/admin/createcoworking"}>Ajouter un coworking</Link>
//                             </li>

//                             <li className="list-group-item">
//                                 <a href="#" className="link-danger" onClick={handleLogout}>
//                                     Se déconnecter
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeaderAdmin;


/////

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const HeaderAdmin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const jwt = Cookies.get("jwt");

        // S'il n'existe pas, cela signifie que l'utilisateur n'est pas connecté
        // On le redirige vers la page de login
        if (!jwt) {
            navigate("/login");
        }

        // On décode le jwt
        const user = jwtDecode(jwt);

        // Si l'utilisateur a le rôle user (ID 1)
        // On le redirige vers l'accueil public
        if (user.data.role === 2) {
            navigate("/");
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove("jwt");
        navigate("/login");
    };

    return (
        <div className="container d-flex justify-content-center mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>Page Administrateur</h3>
                </div>
                <div className="card-body">
                    <nav>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link style={{ color: "#FFB8BD" }} to={"/admin/coworkings"}>Liste des coworkings</Link>
                            </li>
                            <li className="list-group-item" >
                                <Link style={{ color: "#FFB8BD" }} to={"/admin/createcoworking"}>Ajouter un coworking</Link>
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
        </div>
    );
};

export default HeaderAdmin;

