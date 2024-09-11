import { useState } from "react";
import { SigninpageContainer } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signinpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://127.0.0.1:5000/add_user", {
        name,
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        setStatus("Usuário criado com sucesso!");
        alert("Usuário criado com sucesso.");
        navigate("/login")
      } else {
        setStatus("Falha ao criar usuário. Por favor, tente novamente.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 409) {
          setStatus("Usuário já existe. Por favor, insira outro e-mail.");
        } else {
          console.error("Erro ao criar novo usuário:", error);
          setStatus("Ocorreu um erro. Por favor, tente novamente.");
        }
      } else {
        console.error("Erro desconhecido:", error);
        setStatus("Ocorreu um erro desconhecido. Por favor, tente novamente.");
      }
    }
  };

  return (
    <SigninpageContainer>
      <form onSubmit={handleSubmit}>
        <h1>Cadastrar</h1>
        <div className="input-group">
          <label htmlFor="name">Nome Completo</label>
          <input
            type="name" 
            id="name"
            name="name"
            required
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email" 
            name="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input 
          type="password" 
          id="password" 
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        </div>
        <button type="submit">Cadastrar</button>
        {status && 
         <p style={status !== "Usuário criado com sucesso!" ? { color: "white", backgroundColor: "#25bee473" } : {}}>
         {status}
       </p>}
      </form>
    </SigninpageContainer>
  );
}
