import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";


interface HeaderProps {
  isLoggedIn: boolean;
}
export function Header({ isLoggedIn }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div className="logo">
        <img src={logo} alt="logo_diario" />
      </div>


      {!isLoggedIn && (
        <div className="side-links">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/cadastrar")}>Cadastrar</button>
        </div>
      )}
    </HeaderContainer>
  );
}
