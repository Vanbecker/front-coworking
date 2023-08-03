

import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


const LoginPage = () => {

    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        const loginResponse = await fetch("http://localhost:3010/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        // Si la réponse est valide
        if (loginResponse.status === 200) {
            const loginData = await loginResponse.json();

            // Récupérer le jwt dans le data
            const jwt = loginData.data;

            // Stocker le jwt dans un cookie
            Cookies.set("jwt", jwt);


            // décode le jwt pour récupérer le role
            const decodedToken = jwtDecode(jwt);
            const userRole = decodedToken.role;
            // en fonction du role tu diriges soit vers admin soit vers public 

            // Redirige l'utilisateur en fonction de son rôle
            if (userRole === "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                            <input type="text" className="form-control" name="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" name="password" />
                        </div>

                        <button type="submit" style={{ backgroundColor: "#FFB8BD", borderColor: "#FFB8BD", color: "white" }} className="btn btn-primary">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

