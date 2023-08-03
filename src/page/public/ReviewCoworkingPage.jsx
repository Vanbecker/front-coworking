import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Header from '../../component/public/Header';
import Footer from "../../component/public/Footer";


const ReviewCoworkingPage = () => {
    const [coworkings, setCoworkings] = useState([]);

    let isUserConnected = false;

    const jwt = Cookies.get("jwt");

    if (jwt) {
        const decodedJwt = jwtDecode(jwt);
        const role = decodedJwt.data.role;

        if (role === 1 || role === 2 || role === 3) {
            isUserConnected = true;
        }
    }

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

    const ReviewCoworkingPage = async (event, coworkingId) => {
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
            <Header />
            <div className="container">
                <h1>Liste des coworkings</h1>
                {coworkings.map((coworking) => (
                    <div key={coworking.id} className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title">{coworking.name}</h2>
                            <p className="card-text">
                                Adresse : {coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
                                {coworking.address.city}
                            </p>
                            <form onSubmit={(event) => ReviewCoworkingPage(event, coworking.id)}>
                                <div className="form-group">
                                    <label htmlFor="content">Votre review</label>
                                    <textarea
                                        name="content"
                                        rows="4"
                                        cols="50"
                                        className="form-control"
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rating">Votre note</label>
                                    <input
                                        type="number"
                                        name="rating"
                                        min="0"
                                        max="5"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <button type="submit" style={{ backgroundColor: "#FFB8BD", borderColor: "#FFB8BD", color: "white", marginTop: "2rem", }} className="btn btn-primary">
                                    Créer la review
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div >
            <Footer />
        </>
    );
};

export default ReviewCoworkingPage;

