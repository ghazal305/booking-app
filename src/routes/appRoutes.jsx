// 📁 src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/LayOut";

// Pages
import Home from "../pages/home/Home";
import SearchPage from "../pages/search/SearchPage";
import HotelDetailsPage from "../pages/detailsPage/HotelDetailsPage";
import Login from "../pages/logIn/LogIn.jsx";
import SignupPage from "../pages/signUp/SignUp.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>

      {/*  Routes without layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/SignupPage" element={<SignupPage />} />
    </Routes>
  );
};

export default AppRoutes;
