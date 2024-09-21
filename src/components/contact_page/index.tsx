import { useState } from "react";
import axios from "axios";
import { ContactContainer, Title, Form, Input, Textarea, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://127.0.0.1:5000/contact", {
        
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setStatus(t("Mensagem enviada com sucesso!"));
        setName("");
        setEmail("");
        setMessage("");
        alert(t("Mensagem enviada com sucesso!"));
        navigate("/");
      } else {
        setStatus(t("Falha ao enviar a mensagem. Por favor, tente novamente."));
      }
    } catch (error) {
      console.error(t("Erro ao enviar a mensagem:"), error);
      setStatus(t("Ocorreu um erro. Por favor, tente novamente."));
    }
  };

  return (
    <ContactContainer>
      <Title tabIndex={0}>{t('Contato')}</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">{t('Nome')}</label>
        <Input 
          id="name"
          type="text" 
          placeholder={t('Nome')}
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          aria-required="true"
        />
        
        <label htmlFor="email">{t('Email')}</label>
        <Input 
          id="email"
          type="email" 
          placeholder={t('Email')}
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          aria-required="true"
        />

        <label htmlFor="message">{t('Mensagem')}</label>
        <Textarea 
          id="message"
          rows={5} 
          placeholder={t('Mensagem')}
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          aria-required="true"
        ></Textarea>

        <Button type="submit">{t('Enviar')}</Button>
      </Form>
      
      {status && <p aria-live="polite">{status}</p>}
    </ContactContainer>
  );
}