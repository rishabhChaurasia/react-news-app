import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
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
  return (
    <>
      <Navbar />
      <Routes>
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
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
