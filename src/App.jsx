import React from "react";
import Login from "./page/Login";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./page/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import BusinessPage from "./page/BusinessPage";
import EntertainmentPage from "./page/EntertainmentPage";
import SportsPage from "./page/SportsPage";
import HealthPage from "./page/HealthPage";
import SciencePage from "./page/SciencePage";
import TechPage from "./page/TechPage";
import GeneralPage from "./page/GeneralPage";
import TrendPage from "./page/TrendPage";
import PoliticsPage from "./page/PoliticsPage";

function App() {
  const { authUser } = useSelector((state) => state.auth);

  return (
    <>
      {authUser && <Navbar />}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/general" element={<GeneralPage />} />
          <Route path="/trend" element={<TrendPage />} />
          <Route path="/politics" element={<PoliticsPage />} />
        </Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
