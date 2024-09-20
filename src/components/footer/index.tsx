import { FooterContainer, LinkSection, LinkItem } from "./styles";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const { t } = useTranslation();

  return (
    <FooterContainer>
      <div className="logo">
        <img src={logo} alt="logo_diario" />
      </div>
      <div className="footersection">
      <LinkSection>
        <LinkItem href="/about">{t('Sobre Nós')}</LinkItem>
        <LinkItem href="/contact">{t('Contato')}</LinkItem>
        <LinkItem href="/terms">{t('Termos de Serviço')}</LinkItem>
        <LinkItem href="/privacy">{t('Política de Privacidade')}</LinkItem>
      </LinkSection>

      <div className="copyright">
        Meu Diário Oficial © {currentYear}. {t('Todos os direitos reservados.')}
      </div>
      </div>
    </FooterContainer>
  );
}
