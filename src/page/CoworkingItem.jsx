import React, { useState } from "react";

const CoworkingItem = ({ coworking, handleDelete }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleShowConfirmation = () => {
        setShowConfirmation(true);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="card mb-3" key={coworking.id}>
            <div className="card-body">
                <h2 className="card-title">{coworking.name}</h2>
                <p className="card-text">
                    Adresse : {coworking.address.number} {coworking.address.street} - {coworking.address.postcode} {coworking.address.city}
                </p>
                {!showConfirmation && (
                    <button className="btn btn-danger custom-delete-button" onClick={handleShowConfirmation}>Supprimer</button>
                )}
                {showConfirmation && (
                    <div>
                        <p>Voulez-vous vraiment supprimer ce coworking ?</p>
                        <button className="btn btn-danger" onClick={() => handleDelete(coworking.id)}>Confirmer</button>
                        <button className="btn btn-secondary" onClick={handleCancel}>Annuler</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoworkingItem;



