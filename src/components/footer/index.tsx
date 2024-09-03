import { FooterContainer, LinkSection, LinkItem } from "./styles";
import logo from "../../assets/logo.png";

export function Footer() {
  // Pega o ano atual dinamicamente
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      {/* Logo da Empresa */}
      <div className="logo">
        <img src={logo} alt="logo_diario" />
      </div>
      <div className="footersection">
      {/* Seção de Links */}
      <LinkSection>
        <LinkItem href="/about">Sobre nós</LinkItem>
        <LinkItem href="/contact">Contato</LinkItem>
        <LinkItem href="/terms">Termos de Serviço</LinkItem>
        <LinkItem href="/privacy">Política de Privacidade</LinkItem>
      </LinkSection>

      {/* Texto de Direitos Autorais */}
      <div className="copyright">
        Meu Diário Oficial © {currentYear}. Todos os direitos reservados.
      </div>
      </div>
    </FooterContainer>
  );
}
