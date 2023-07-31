import React from "react";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Mon Entreprise. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
