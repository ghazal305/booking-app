// 📁 src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/LayOut";
import ProtectedRoute from "./protectedRoute";

// Pages
import Home from "../pages/home/Home";
import SearchPage from "../pages/search/SearchPage";
import HotelDetailsPage from "../pages/detailsPage/HotelDetailsPage";
import Login from "../pages/logIn/LogIn.jsx";
import SignupPage from "../pages/signUp/SignUp.jsx";
import BookHotel from "../pages/bookHotel/BookHotel.jsx";
import MyBookings from "../pages/myBookings/MyBookings.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book/:hotelId" element={<ProtectedRoute><BookHotel /></ProtectedRoute>} />
        <Route path="/my-bookings" element={<ProtectedRoute><MyBookings /></ProtectedRoute>} />
      </Route>

      {/* Routes without layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      
      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
