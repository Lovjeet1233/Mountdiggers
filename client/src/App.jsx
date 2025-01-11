import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import TrekDetails from "./pages/TrekDetails";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import RegistrationForm from "./components/RegistrationForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminnn" element={<AdminPanel />} />
        <Route path="/treks/:id" element={<TrekDetails />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/treks/:id/register" element={<RegistrationForm />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
