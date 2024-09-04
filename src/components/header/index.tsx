import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {

  const navigate = useNavigate(); 


  return (
    <HeaderContainer>
      {/* Div para conter o logo */}
      <div className="logo">
        <img src={logo} alt="logo_diario" />
      </div>
      
      {/* Div para conter os botões de login e cadastro */}
      <div className="side-links">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/cadastrar")}>Cadastrar</button>
      </div>
    </HeaderContainer>
  );
}
