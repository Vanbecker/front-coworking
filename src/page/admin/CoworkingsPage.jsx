
/////SANS BOOSTRAP/////

// import React, { useEffect, useState } from "react";
// import CoworkingItem from "../../component/public/CoworkingItem";
// import Cookies from "js-cookie";
// import { Link, useNavigate } from "react-router-dom";

// const CoworkingsPage = () => {
//     const [coworkings, setCoworkings] = useState([]);
//     const [deleteMessage, setDeleteMessage] = useState("");

//     const fetchCoworkings = async () => {
//         try {
//             const response = await fetch("http://localhost:3010/api/coworkings");
//             const responseJs = await response.json();
//             setCoworkings(responseJs.data);
//         } catch (error) {
//             console.error("Erreur lors de la récupération des coworkings :", error);
//         }
//     };

//     useEffect(() => {
//         fetchCoworkings();
//     }, []);

//     const handleDelete = async (coworkingId) => {
//         try {
//             const response = await fetch(`http://localhost:3010/api/coworkings/${coworkingId}`, {
//                 method: "DELETE",
//             });

//             const responseJs = await response.json();
//             setDeleteMessage(responseJs.message);

//             if (response.ok) {
//                 fetchCoworkings();
//             }
//         } catch (error) {
//             console.error("Erreur lors de la suppression :", error);
//             setDeleteMessage("Une erreur est survenue lors de la suppression du coworking.");
//         }
//     };

//     return (
//         <div>
//             {coworkings.map((coworking) => (
//                 <CoworkingItem key={coworking.id} coworking={coworking} handleDelete={handleDelete} />
//             ))}
//             {deleteMessage && <p>{deleteMessage}</p>}
//         </div>
//     );
// };

// export default CoworkingsPage;

///////AVEC BOOSTRAP /////

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import HeaderAdmin from "../../component/admin/HeaderAdmin";
// import Cookies from "js-cookie";

// const CoworkingsPage = () => {
//     const [coworkings, setCoworkings] = useState([]);
//     const [deleteCoworkingMessage, setDeleteCoworkingMessage] = useState(null);

//     const navigate = useNavigate();

//     const fetchCoworkings = async () => {
//         const response = await fetch("http://localhost:3010/api/coworkings", {
//             method: "GET",
//         });
//         const responseJs = await response.json();

//         setCoworkings(responseJs.data);
//     };

//     // useEffect avec la variable deleteCoworkingMessage
//     // dans le tableau, permet de dire qu'on executer
//     // la fonction fetchCoworkings à chaque fois que
//     // la variable deleteCoworkingMessage est modifiée
//     useEffect(() => {
//         if (!Cookies.get("jwt")) {
//             navigate("/login");
//         }
//         fetchCoworkings();
//     }, [deleteCoworkingMessage]);

//     const handleDeleteCoworking = async (coworkingId) => {
//         const token = Cookies.get("jwt");

//         const responseDelete = await fetch(`http://localhost:3010/api/coworkings/${coworkingId}`, {
//             method: "DELETE",
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         const responseDeleteJs = await responseDelete.json();

//         setDeleteCoworkingMessage(responseDeleteJs.message);
//     };

//     return (
//         <>
//             <HeaderAdmin />
//             <div>
//                 <h1>Liste des coworkings</h1>
//                 {deleteCoworkingMessage && <p>{deleteCoworkingMessage}</p>}
//                 {coworkings.map((coworking) => (
//                     <div key={coworking.id}>
//                         <h2>{coworking.name}</h2>
//                         <p>
//                             Adresse :{coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
//                             {coworking.address.city}
//                         </p>
//                         <Link to={`/admin/coworkings/${coworking.id}/update`}>Mettre à jour le coworking</Link>
//                         <button onClick={() => handleDeleteCoworking(coworking.id)}>Supprimer le coworking</button>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default CoworkingsPage;



/////////

import React, { useEffect, useState } from "react";
import CoworkingItem from "../../component/public/CoworkingItem";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const CoworkingsPage = () => {
    const [coworkings, setCoworkings] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState("");

    const navigate = useNavigate();

    const fetchCoworkings = async () => {
        try {
            const response = await fetch("http://localhost:3010/api/coworkings");
            const responseJs = await response.json();
            setCoworkings(responseJs.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des coworkings :", error);
        }
    };

    useEffect(() => {
        const jwt = Cookies.get("jwt");
        if (!jwt) {
            navigate("/login"); // Redirige vers la page de connexion si le JWT n'est pas présent
        } else {
            fetchCoworkings();
        }
    }, []);

    const handleDelete = async (coworkingId) => {
        try {
            const token = Cookies.get("jwt");
            const response = await fetch(`http://localhost:3010/api/coworkings/${coworkingId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const responseJs = await response.json();
            setDeleteMessage(responseJs.message);

            if (response.ok) {
                fetchCoworkings();
            }
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
            setDeleteMessage("Une erreur est survenue lors de la suppression du coworking.");
        }
    };


    return (
        <div>
            {coworkings.map((coworking) => (
                <CoworkingItem key={coworking.id} coworking={coworking} handleDelete={handleDelete} />
            ))}
            {deleteMessage && <p>{deleteMessage}</p>}
        </div>
    );
};

export default CoworkingsPage;
