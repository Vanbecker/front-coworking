import React from "react";
import Header from "../../component/public/Header"
import Footer from '../../component/public/Footer';

const HomePage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <img className="img-responsive" src="/image/cowo2.jpg" alt="Logo" />
            <Footer />
        </div>
    );
};

export default HomePage;
