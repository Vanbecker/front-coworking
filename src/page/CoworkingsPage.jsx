
import React, { useEffect, useState } from "react";
import CoworkingItem from "../component/CoworkingItem";

const CoworkingsPage = () => {
    const [coworkings, setCoworkings] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState("");

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
        fetchCoworkings();
    }, []);

    const handleDelete = async (coworkingId) => {
        try {
            const response = await fetch(`http://localhost:3010/api/coworkings/${coworkingId}`, {
                method: "DELETE",
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

