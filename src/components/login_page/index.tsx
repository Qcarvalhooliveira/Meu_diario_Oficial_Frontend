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
        setStatus(t("Login realizado com sucesso!"));

        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        setStatus(t("Falha ao realizar login. Por favor, tente novamente."));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          setStatus(t("Email ou senha incorretos."));
        } else {
          console.error(t("Erro ao realizar login:"), error);
          setStatus(t("Ocorreu um erro. Por favor, tente novamente."));
        }
      } else {
        console.error(t("Erro desconhecido:"), error);
        setStatus(t("Ocorreu um erro desconhecido. Por favor, tente novamente."));
      }
    }
  };

  return (
    <LoginpageContainer>
      <form onSubmit={handleSubmit} aria-label={t("Formulário de login")}>
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
            aria-required="true"
            aria-label={t("Campo de email")}
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
            aria-required="true"
            aria-label={t("Campo de senha")}
          />
        </div>
        <button type="submit" aria-label={t('Entrar')}>{t('Entrar')}</button>
        {status && (
          <p 
            role="alert" 
            style={status !== t("Login realizado com sucesso!") ? { color: "white", backgroundColor: "#25bee473" } : {}}
            aria-live="polite"
          >
            {status}
          </p>
        )}
      </form>
    </LoginpageContainer>
  );
}
