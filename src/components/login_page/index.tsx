import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { LoginpageContainer } from "./styles";
import { useTranslation } from "react-i18next";


interface LoginpageProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Loginpage({ setIsLoggedIn }: LoginpageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const { t } = useTranslation();
  
  const navigate = useNavigate(); 

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setStatus("Login realizado com sucesso!");

        setIsLoggedIn(true);
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
        <h1>{t('Login')}</h1>
        <div className="input-group">
          <label htmlFor="email">{t('Email')}</label>
          <input 
            type="email" 
            id="email" 
            name={t('email')} 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">{t('Senha')}</label>
          <input 
            type="password" 
            id="password" 
            name={t('password')} 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{t('Entrar')}</button>
        {status && (
          <p style={status !== "Login realizado com sucesso!" ? { color: "white", backgroundColor: "#25bee473" } : {}}>
            {status}
          </p>
        )}
      </form>
    </LoginpageContainer>
  );
}
