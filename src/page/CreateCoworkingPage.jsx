// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCoworkingPage = () => {
    const navigate = useNavigate();

    // appelé au submit du formulaire
    const handleCreateCoworking = async (event) => {
        event.preventDefault();

        // on récupère les infos du form
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

        // on construit l'objet coworking tel qu'il est attendu par l'api
        const coworkingData = {
            name: name,
            price: {
                hour: parseInt(price_hour),
                day: parseInt(price_day),
                month: parseInt(price_month),
            },
            superficy: parseInt(superficy),
            capacity: parseInt(capacity),
            address: {
                number: parseInt(address_number),
                street: address_street,
                postCode: parseInt(address_postcode),
                city: address_city,
            },
        };

        // on fait l'appel à l'api
        // avec une requête POST
        // en lui passant les données du coworking
        // en json dans la clé "body"
        // on précise qu'on envoie un json, via le header
        const responseCreate = await fetch("http://localhost:3010/api/coworkings", {
            method: "POST",
            body: JSON.stringify(coworkingData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseCreateJs = await responseCreate.json();

        // on redirige vers la liste des coworkings
        navigate("/coworkings");
    };

    return (
        <form className="container mt-5" onSubmit={handleCreateCoworking}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" />
            </div>

            <div className="mb-3">
                <label htmlFor="superficy" className="form-label">Superficy</label>
                <input type="number" className="form-control" id="superficy" name="superficy" />
            </div>

            <div className="mb-3">
                <label htmlFor="capacity" className="form-label">Capacity</label>
                <input type="number" className="form-control" id="capacity" name="capacity" />
            </div>

            <div className="mb-3">
                <label htmlFor="price_hour" className="form-label">Price by hour</label>
                <input type="number" className="form-control" id="price_hour" name="price_hour" />
            </div>

            <div className="mb-3">
                <label htmlFor="price_day" className="form-label">Price by day</label>
                <input type="number" className="form-control" id="price_day" name="price_day" />
            </div>

            <div className="mb-3">
                <label htmlFor="price_month" className="form-label">Price by month</label>
                <input type="number" className="form-control" id="price_month" name="price_month" />
            </div>

            <div className="mb-3">
                <label htmlFor="address_number" className="form-label">Address number</label>
                <input type="number" className="form-control" id="address_number" name="address_number" />
            </div>

            <div className="mb-3">
                <label htmlFor="address_street" className="form-label">Address street</label>
                <input type="text" className="form-control" id="address_street" name="address_street" />
            </div>

            <div className="mb-3">
                <label htmlFor="address_postcode" className="form-label">Address zipcode</label>
                <input type="number" className="form-control" id="address_postcode" name="address_postcode" />
            </div>

            <div className="mb-3">
                <label htmlFor="address_city" className="form-label">Address city</label>
                <input type="text" className="form-control" id="address_city" name="address_city" />
            </div>

            <button type="submit" style={{ backgroundColor: "#FFB8BD", borderColor: "#FFB8BD", color: "white" }} className="btn btn-primary">Submit</button>
        </form>
    );
};

export default CreateCoworkingPage;

/////

