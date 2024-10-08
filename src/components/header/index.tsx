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
      <img src={logo} alt={t("Logotipo do Meu Diário Oficial")} role="button" tabIndex={0} aria-label={t("Voltar para a página inicial")} />
    </div>
    <div
      className={`menu-icon ${menuOpen ? "open" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={t("Abrir menu")}
      aria-expanded={menuOpen}
      role="button"
      tabIndex={0}
    >
      &#9776;
    </div>
    <nav className={`side-links ${menuOpen ? "show" : ""}`} aria-label={t("Navegação de links")}>
      {!isLoggedIn && (
        <>
          <button 
            onClick={() => navigate("/login")}
            aria-label={t("Ir para a página de login")}
          >
            {t('Login')}
          </button>
          <button 
            onClick={() => navigate("/cadastrar")}
            aria-label={t("Ir para a página de cadastro")}
          >
            {t('Cadastrar')}
          </button>
        </>
      )}
    </nav>
  </HeaderContainer>
);
}