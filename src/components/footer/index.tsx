import { FooterContainer, LinkSection, LinkItem } from "./styles";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const { t } = useTranslation();

  return (
    <FooterContainer>
      <div className="logo">
        <img src={logo} alt={t("Logotipo do Meu Diário Oficial")} />
      </div>
      <div className="footersection">
        <LinkSection>
          <LinkItem href="/about" aria-label={t('Sobre Nós')}>{t('Sobre Nós')}</LinkItem>
          <LinkItem href="/contact" aria-label={t('Contato')}>{t('Contato')}</LinkItem>
          <LinkItem href="/terms" aria-label={t('Termos de Serviço')}>{t('Termos de Serviço')}</LinkItem>
          <LinkItem href="/privacy" aria-label={t('Política de Privacidade')}>{t('Política de Privacidade')}</LinkItem>
        </LinkSection>

        <div className="copyright" aria-label={t('Informações de Copyright')}>
          Meu Diário Oficial © {currentYear}. {t('Todos os direitos reservados.')}
        </div>
      </div>
    </FooterContainer>
  );
}
