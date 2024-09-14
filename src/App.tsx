import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Header } from "./components/header";
import { Homepage } from "./components/homepage/Index";
import { AppContainer } from "./styles";
import background from "./assets/capa.jpg";
import { Loginpage } from "./components/login_page";
import { Signinpage } from "./components/signin_page";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact_page";
import { Aboutuspage } from "./components/aboutus_page";
import { Termspage } from "./components/terms_page";
import { Privacypage } from "./components/privacy_page";
import { Dashboardpage } from "./components/dashboard_page";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token); 
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <GlobalStyle />
      <AppContainer style={{ backgroundImage: `url(${background})` }}>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/cadastrar" element={<Signinpage />} />
          <Route path="/about" element={<Aboutuspage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Termspage />} />
          <Route path="/privacy" element={<Privacypage />} />
          <Route path="/dashboard" element={<Dashboardpage handleLogout={handleLogout} />} />
        </Routes>      
      </AppContainer>
      <Footer />
    </Router>
  );
}

export default App;
