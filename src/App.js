import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./page/HomePage";
import CoworkingsPage from "./page/CoworkingsPage";
import CreateCoworkingPage from "./page/CreateCoworkingPage"
// import CoworkingItem from "./page/CoworkingItem";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coworkings" element={<CoworkingsPage />} />
          <Route path="/createcoworking" element={<CreateCoworkingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
