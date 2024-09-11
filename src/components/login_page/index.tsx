import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginpageContainer } from "./styles";

export function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;

        localStorage.setItem("token", token);

        setStatus("Login realizado com sucesso!");

        navigate("/dashboard");
      } else {
        setStatus("Falha ao realizar login. Por favor, tente novamente.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          setStatus("Email ou senha incorretos.");
        } else {
          console.error("Erro ao realizar login:", error);
          setStatus("Ocorreu um erro. Por favor, tente novamente.");
        }
      } else {
        console.error("Erro desconhecido:", error);
        setStatus("Ocorreu um erro desconhecido. Por favor, tente novamente.");
      }
    }
  };

  return (
    <LoginpageContainer>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
        {status && (
          <p style={status !== "Login realizado com sucesso!" ? { color: "red", backgroundColor: "black" } : {}}>
            {status}
          </p>
        )}
      </form>
    </LoginpageContainer>
  );
}
