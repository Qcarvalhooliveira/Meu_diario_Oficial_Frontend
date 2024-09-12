import { useState } from "react";
import axios from "axios";
import { ContactContainer, Title, Form, Input, Textarea, Button } from "./styles";
import { useNavigate } from "react-router-dom";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://127.0.0.1:5000/contact", {
        
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setStatus("Mensagem enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
        alert("Mensagem enviada com sucesso!");
        navigate("/");
      } else {
        setStatus("Falha ao enviar a mensagem. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      setStatus("Ocorreu um erro. Por favor, tente novamente.");
    }
  };

  return (
    <ContactContainer>
      <Title>Contato</Title>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Textarea 
          rows={5} 
          placeholder="Mensagem" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        ></Textarea>
        <Button type="submit">Enviar</Button>
      </Form>
      {status && <p>{status}</p>}
    </ContactContainer>
  );
}