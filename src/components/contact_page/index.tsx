import { ContactContainer, Title, Form, Input, Textarea, Button } from "./styles";

export function Contact() {
    return (
      <ContactContainer>
        <Title>Contato</Title>
        <Form>
          <Input type="text" placeholder="Nome" required />
          <Input type="email" placeholder="Email" required />
          <Textarea rows={5} placeholder="Mensagem" required></Textarea>
          <Button type="submit">Enviar</Button>
        </Form>
      </ContactContainer>
    );
  }
  