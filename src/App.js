import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./page/HomePage";
import CoworkingsPage from "./page/CoworkingsPage";
import CreateCoworkingPage from "./page/CreateCoworkingPage";
import UpdateCoworkingPage from "./page/UpdateCoworkingPage";
import LoginPage from "./page/LoginPage";
import HeaderAdmin from "./component/HeaderAdmin";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/coworkings" element={<CoworkingsPage />} />
          <Route path="/admin/createcoworking" element={<CreateCoworkingPage />} />
          <Route exact path="/admin/coworkings/:id/update" element={<UpdateCoworkingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
