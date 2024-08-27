import { SigninpageContainer } from "./styles";


export function Signinpage() {

return (
    <SigninpageContainer>
        <form>
        <h1>Cadastrar</h1>
        <div className="input-group">
          <label htmlFor="name">Nome Completo</label>
          <input type="name" id="name" name="name" required />
        </div>
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
    </SigninpageContainer>
);
}