import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./page/public/HomePage";
import CoworkingsPage from "./page/admin/CoworkingsPage";
import CreateCoworkingPage from "./page/admin/CreateCoworkingPage";
import UpdateCoworkingPage from "./page/admin/UpdateCoworkingPage";
import LoginPage from "./page/public/LoginPage";
import DashBoardPage from "./page/admin/DashBoardPage";
import ReviewCoworkingPage from "./page/public/ReviewCoworkingPage";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/admin" element={<DashBoardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/coworkings" element={<CoworkingsPage />} />
        <Route path="/admin/createcoworking" element={<CreateCoworkingPage />} />
        <Route exact path="/admin/coworkings/:id/update" element={<UpdateCoworkingPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/public/ReviewCoworkingsPagePublic" element={<ReviewCoworkingPage />} />
      </Routes>

    </Router >
  );
}

export default App;
