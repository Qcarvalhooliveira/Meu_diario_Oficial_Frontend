import { LoginpageContainer } from "./styles";


export function Loginpage() {

return (
    <LoginpageContainer>
        <form>
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </LoginpageContainer>
);
}