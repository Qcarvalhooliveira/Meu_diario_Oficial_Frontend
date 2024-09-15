import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isLoggedIn: boolean;
}

export function Header({ isLoggedIn }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogoNavigateToHomePage = () =>{
    navigate('/')
  }

  return (
    <HeaderContainer>
      <div className="logo" onClick={handleLogoNavigateToHomePage}>
        <img src={logo} alt="logo_diario" />
      </div>

      {/* Exibir os botões de login e cadastrar apenas se o usuário NÃO estiver logado */}
      {!isLoggedIn && (
        <div className="side-links">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/cadastrar")}>Cadastrar</button>
        </div>
      )}
    </HeaderContainer>
  );
}
