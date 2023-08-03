import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Cookies from "js-cookie";

const UpdateCoworkingPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // État pour stocker les données du coworking
    const [coworkingData, setCoworkingData] = useState(null);

    // Fonction pour récupérer les données du coworking par l'id
    const fetchCoworkingData = async () => {
        try {
            const response = await fetch(`http://localhost:3010/api/coworkings/${id}`);
            const data = await response.json();

            // Mettre à jour l'état avec les données récupérées
            setCoworkingData(data.data);
        } catch (error) {
            console.error("Une erreur est survenue lors de la récupération des données du coworking :", error);
        }
    };
    useEffect(() => {
        if (!Cookies.get("jwt")) {
            navigate("/login");
        }
        // Appel de la fonction pour récupérer les données au chargement du composant
        fetchCoworkingData();
    }, [id]);

    // Fonction pour gérer la soumission du formulaire
    const handleUpdateCoworking = async (event) => {
        event.preventDefault();
        ////
        const name = event.target.name.value;
        const superficy = event.target.superficy.value;
        const capacity = event.target.capacity.value;
        const price_hour = event.target.price_hour.value;
        const price_day = event.target.price_day.value;
        const price_month = event.target.price_month.value;
        const address_number = event.target.address_number.value;
        const address_street = event.target.address_street.value;
        const address_postcode = event.target.address_postcode.value;
        const address_city = event.target.address_city.value;

        const coworkingData = {
            name: name,
            price: {
                hour: price_hour ? parseInt(price_hour) : null,
                day: price_day ? parseInt(price_day) : null,
                month: price_month ? parseInt(price_month) : null,
            },
            superficy: superficy ? parseInt(superficy) : superficy,
            capacity: capacity ? parseInt(capacity) : null,
            address: {
                number: address_number ? parseInt(address_number) : null,
                street: address_street,
                postCode: address_postcode ? parseInt(address_postcode) : null,
                city: address_city,
            },
        };
        ////

        try {

            const token = Cookies.get('jwt');

            // Effectuer une requête PUT pour mettre à jour le coworking avec les données du formulaire
            const response = await fetch(`http://localhost:3010/api/coworkings/${id}`, {
                method: "PUT",
                body: JSON.stringify(coworkingData),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });

            console.log(response)

            if (response.ok) {
                // Redirection vers la liste des coworkings après la mise à jour réussie
                navigate("/admin/coworkings");
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
                        <input type="text" className="form-control" id="name" name="name" defaultValue={coworkingData && coworkingData.name} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="superficy" className="form-label">Superficy</label>
                        <input type="number" className="form-control" id="superficy" name="superficy" defaultValue={coworkingData && coworkingData.superficy} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="capacity" className="form-label">Capacity</label>
                        <input type="number" className="form-control" id="capacity" name="capacity" defaultValue={coworkingData && coworkingData.capacity} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price_hour" className="form-label">Price by hour</label>
                        <input type="number" className="form-control" id="price_hour" name="price_hour" defaultValue={coworkingData && coworkingData.price.hour} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price_day" className="form-label">Price by day</label>
                        <input type="number" className="form-control" id="price_day" name="price_day" defaultValue={coworkingData && coworkingData.price.day} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price_month" className="form-label">Price by month</label>
                        <input type="number" className="form-control" id="price_month" name="price_month" defaultValue={coworkingData && coworkingData.price.month} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="address_number" className="form-label">Address number</label>
                        <input type="number" className="form-control" id="address_number" name="address_number" defaultValue={coworkingData && coworkingData.address && coworkingData.address.number} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address_street" className="form-label">Address street</label>
                        <input type="text" className="form-control" id="address_street" name="address_street" defaultValue={coworkingData && coworkingData.address && coworkingData.address.street} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address_postcode" className="form-label">Address zipcode</label>
                        <input type="number" className="form-control" id="address_postcode" name="address_postcode" defaultValue={coworkingData && coworkingData.address && coworkingData.address.postCode} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address_city" className="form-label">Address city</label>
                        <input type="text" className="form-control" id="address_city" name="address_city" defaultValue={coworkingData && coworkingData.address && coworkingData.address.city} />
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












