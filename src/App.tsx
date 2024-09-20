import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Header } from "./components/header";
import { Homepage } from "./components/homepage/Index";
import { AppContainer, LanguageSwitcher } from "./styles";
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
import './i18n';
import { useTranslation } from 'react-i18next';
import brFlag from '../src/assets/Brasil.png';
import usFlag from '../src/assets/USA.png';

function App() {

  const { i18n } = useTranslation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token); 
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, [i18n]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
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

      <LanguageSwitcher>
          <img src={brFlag} alt="Português" onClick={() => changeLanguage('pt')} />
          <img src={usFlag} alt="English" onClick={() => changeLanguage('en')} />
        </LanguageSwitcher>
    </Router>
  );
}

export default App;
