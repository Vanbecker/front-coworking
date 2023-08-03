import Cookies from "js-cookie";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardPage = () => {
    const navigate = useNavigate();

    if (!Cookies.get("jwt")) {
        navigate("/login");
    }

    return (
        <>
            <HeaderAdmin />

            <h2 class="text-center mt-5">Hola que tal, Vous êtes sur le dashboard</h2>
        </>
    );
};

export default DashboardPage;