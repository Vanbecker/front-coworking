// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { Link } from "react-router-dom";

// const CoworkingsPage = () => {
//     const [coworkings, setCoworkings] = useState([]);
//     const [reviews, setReviews] = useState([]);
//     const [content, setContent] = useState("");
//     const [rating, setRating] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");

//     // Fonction pour récupérer la liste des coworkings depuis l'API
//     const fetchCoworkings = async () => {
//         try {
//             const response = await fetch("http://localhost:3010/api/coworkings");
//             const responseJs = await response.json();
//             setCoworkings(responseJs.data);
//         } catch (error) {
//             console.error("Erreur lors de la récupération des coworkings :", error);
//         }
//     };

//     // Fonction pour récupérer les reviews d'un coworking spécifique depuis l'API
//     const fetchReviews = async (coworkingId) => {
//         try {
//             const response = await fetch(`http://localhost:3010/api/coworkings/${coworkingId}/reviews`);
//             const responseJs = await response.json();
//             setReviews(responseJs.data);
//         } catch (error) {
//             console.error("Erreur lors de la récupération des reviews :", error);
//         }
//     };

//     // Au chargement initial de la page, on récupère la liste des coworkings
//     useEffect(() => {
//         fetchCoworkings();
//     }, []);

//     // Fonction pour gérer la soumission du formulaire de création de review
//     const handleSubmitReview = async (coworkingId) => {
//         const token = Cookies.get("jwt");
//         const headers = {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//         };

//         try {
//             const response = await fetch(`http://localhost:3010/api/coworkings/${coworkingId}/reviews`, {
//                 method: "POST",
//                 headers,
//                 body: JSON.stringify({
//                     content,
//                     rating,
//                 }),
//             });

//             if (response.ok) {
//                 setSuccessMessage("Review créée avec succès !");
//                 setContent("");
//                 setRating("");
//                 fetchReviews(coworkingId); // Rafraîchir la liste des reviews après création
//             } else {
//                 setSuccessMessage("");
//             }
//         } catch (error) {
//             console.error("Erreur lors de la création de la review :", error);
//             setSuccessMessage("");
//         }
//     };

//     return (
//         <div>
//             <h1>Liste des coworkings</h1>
//             {/* Affichage de chaque coworking */}
//             {coworkings.map((coworking) => (
//                 <div key={coworking.id}>
//                     <h2>{coworking.name}</h2>
//                     <p>
//                         Adresse : {coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
//                         {coworking.address.city}
//                     </p>
//                     <p>Description : {coworking.description}</p>

//                     {/* Formulaire pour ajouter une review */}
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             handleSubmitReview(coworking.id);
//                         }}
//                     >
//                         <div>
//                             <label>Contenu de la review:</label>
//                             <input
//                                 type="text"
//                                 value={content}
//                                 onChange={(e) => setContent(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label>Note / Rating:</label>
//                             <input
//                                 type="number"
//                                 value={rating}
//                                 onChange={(e) => setRating(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit">Ajouter une review</button>
//                     </form>

//                     {/* Affichage des reviews */}
//                     <h3>Reviews :</h3>
//                     {reviews.map((review) => (
//                         <div key={review.id}>
//                             <p>{review.content}</p>
//                             <p>Note : {review.rating}</p>
//                         </div>
//                     ))}

//                     <hr />
//                 </div>
//             ))}
//             {/* Affichage du message de succès */}
//             {successMessage && <p>{successMessage}</p>}
//             {/* Lien pour revenir à l'accueil */}
//             <Link to="/">Retour à l'accueil</Link>
//         </div>
//     );
// };

// export default CoworkingsPage;


//////////////

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const ReviewCoworkingsPagePublic = () => {
    const [coworkings, setCoworkings] = useState([]);

    const fetchCoworkings = async () => {
        const response = await fetch("http://localhost:3010/api/coworkings", {
            method: "GET",
        });
        const responseJs = await response.json();
        setCoworkings(responseJs.data);
    };

    useEffect(() => {
        fetchCoworkings();
    }, []);

    const handleCreateReview = async (event, coworkingId) => {
        // empêche le rechargement de la page
        event.preventDefault();

        // récupérer les données du formulaire
        const content = event.target.content.value;
        const rating = event.target.rating.value;

        // créer un objet avec les données du formulaire
        // tel qu'il est attendu par l'api
        const reviewCreateData = {
            content: content,
            rating: parseInt(rating),
        };

        // récupère le jwt dans les cookies
        const jwt = Cookies.get("jwt");

        // je fais l'appel fetch de création
        // en lui passant les données du form
        // en body
        // et le jwt en header
        const responseReview = await fetch(`http://localhost:3010/api/reviews/${coworkingId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify(reviewCreateData),
        });

        const responseReviewJs = await responseReview.json();

        console.log(responseReviewJs);
    };

    return (
        <>
            <div>
                <h1>Liste des coworkings</h1>
                {coworkings.map((coworking) => (
                    <div key={coworking.id}>
                        <h2>{coworking.name}</h2>
                        <p>
                            Adresse :{coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
                            {coworking.address.city}
                        </p>
                        <form onSubmit={(event) => handleCreateReview(event, coworking.id)}>
                            <label htmlFor="content">Votre review</label>
                            <textarea name="content" rows="4" cols="50"></textarea>

                            <label htmlFor="rating">Votre note</label>
                            <input type="number" name="rating" min="0" max="5" />

                            <button type="submit">Créer la review</button>
                        </form>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ReviewCoworkingsPagePublic;