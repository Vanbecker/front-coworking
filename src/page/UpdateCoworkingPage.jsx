import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCoworkingPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // État pour stocker les données du coworking
    const [coworkingData, setCoworkingData] = useState(null);

    useEffect(() => {
        // Fonction pour récupérer les données du coworking par l'id
        const fetchCoworkingData = async () => {
            try {
                const response = await fetch(`http://localhost:3010/api/coworkings/${id}`);
                const data = await response.json();

                // Mettre à jour l'état avec les données récupérées
                setCoworkingData(data);
            } catch (error) {
                console.error("Une erreur est survenue lors de la récupération des données du coworking :", error);
            }
        };

        // Appel de la fonction pour récupérer les données au chargement du composant
        fetchCoworkingData();
    }, [id]);

    // Fonction pour gérer la soumission du formulaire
    const handleUpdateCoworking = async (event) => {
        event.preventDefault();

        try {
            // Effectuer une requête PUT pour mettre à jour le coworking avec les données du formulaire
            const response = await fetch(`http://localhost:3010/api/coworkings/${id}`, {
                method: "PUT",
                body: JSON.stringify(coworkingData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                // Redirection vers la liste des coworkings après la mise à jour réussie
                navigate("/coworkings");
            } else {
                console.error("Une erreur est survenue lors de la mise à jour du coworking.");
            }
        } catch (error) {
            console.error("Une erreur est survenue lors de la mise à jour du coworking :", error);
        }
    };

    return (
        <div className="container mt-5">
            {coworkingData ? (
                <form onSubmit={handleUpdateCoworking}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={coworkingData.name} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="superficy" className="form-label">Superficy</label>
                        <input type="number" className="form-control" id="superficy" name="superficy" value={coworkingData.superficy} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="capacity" className="form-label">Capacity</label>
                        <input type="number" className="form-control" id="capacity" name="capacity" value={coworkingData.capacity} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price_hour" className="form-label">Price by hour</label>
                        <input type="number" className="form-control" id="price_hour" name="price_hour" value={coworkingData.price_hour} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price_day" className="form-label">Price by day</label>
                        <input type="number" className="form-control" id="price_day" name="price_day" value={coworkingData.price_day} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price_month" className="form-label">Price by month</label>
                        <input type="number" className="form-control" id="price_month" name="price_month" value={coworkingData.price_month} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address_number" className="form-label">Address number</label>
                        <input type="number" className="form-control" id="address_number" name="address_number" value={coworkingData.address_number} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address_street" className="form-label">Address street</label>
                        <input type="text" className="form-control" id="address_street" name="address_street" value={coworkingData.address_street} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address_postcode" className="form-label">Address zipcode</label>
                        <input type="number" className="form-control" id="address_postcode" name="address_postcode" value={coworkingData.address_postcode} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address_city" className="form-label">Address city</label>
                        <input type="text" className="form-control" id="address_city" name="address_city" value={coworkingData.address_city} />
                    </div>

                    <button type="submit" style={{ backgroundColor: "#FFB8BD", borderColor: "#FFB8BD", color: "white" }} className="btn btn-primary">Modifier</button>
                </form>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default UpdateCoworkingPage;












