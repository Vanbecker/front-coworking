import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("jwt");

        navigate("/login");
    };

    const jwt = Cookies.get("jwt");
    const userData = jwtDecode(jwt);

    return (
        <header>
            <div className="container d-flex justify-content-center mt-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Page Administrateur</h3>
                    </div>
                    <div className="card-body"></div>
                    <nav>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to={"/admin"}>Accueil</Link>
                            </li>
                            <li className="list-group-item">
                                <Link Link style={{ color: "#FFB8BD" }} to={"/admin/coworkings"}>Liste des coworkings</Link>
                            </li>
                            <li className="list-group-item">
                                <Link Link style={{ color: "#FFB8BD" }} to={"admin/createcoworking"}>Ajouter un coworking</Link>
                            </li>
                            <li className="list-group-item">
                                <p>Connecté en tant que {userData.data.username}</p>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="link-danger" onClick={handleLogout}>
                                    Se déconnecter
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HeaderAdmin;

