import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      {/* Div para conter o logo */}
      <div className="logo">
        <img src={logo} alt="logo_diario" />
      </div>
      
      {/* Div para conter os botões de login e cadastro */}
      <div className="side-links">
        <button>Login</button>
        <button>Cadastrar</button>
      </div>
    </HeaderContainer>
  );
}
