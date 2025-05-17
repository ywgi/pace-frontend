import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//pages
import HomePage from "./Pages/HomePage"
import InitialMelPage from "./Pages/InitialMelPage";
import FinalMelPage from "./Pages/FinalMelPage"
import AboutUsPage from "./Pages/AboutUsPage";
import HowToPage from "./Pages/HowToPage";
import ContactUsPage from "./Pages/ContactUsPage";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents/initial-mel" element={ <InitialMelPage /> } />
        <Route path="/documents/final-mel" element={<FinalMelPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/how-to" element={<HowToPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App
