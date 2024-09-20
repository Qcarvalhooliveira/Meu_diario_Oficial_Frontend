import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  isLoggedIn: boolean;
}

export function Header({ isLoggedIn }: HeaderProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoNavigateToHomePage = () =>{
    navigate('/')
  }

  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <div className="logo" onClick={handleLogoNavigateToHomePage}>
        <img src={logo} alt="logo_diario" />
      </div>
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>
      <div className={`side-links ${menuOpen ? "show" : ""}`}>
      {!isLoggedIn && (
        <>
          <button onClick={() => navigate("/login")}>{t('Login')}</button>
          <button onClick={() => navigate("/cadastrar")}>{t('Cadastrar')}</button>
        </>
      )}
      </div>
    </HeaderContainer>
  );
}
