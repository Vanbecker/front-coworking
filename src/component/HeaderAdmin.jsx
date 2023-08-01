// import { Link } from "react-router-dom";

// const HeaderAdmin = () => {
//     return (
//         <header>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to={"/admin/coworkings"}>Liste des coworkings</Link>
//                     </li>
//                     <li>
//                         <Link to={"/admin/coworkings/create"}>Ajouter un coworking</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default HeaderAdmin;

/////

import React from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
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
                                <Link to={"/admin/coworkings"}>Liste des coworkings</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to={"/admin/coworkings/create"}>Ajouter un coworking</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdmin;
