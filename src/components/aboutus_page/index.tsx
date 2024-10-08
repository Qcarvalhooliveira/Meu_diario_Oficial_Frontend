import { AboutuspageContainer } from "./styles";
import { useTranslation } from "react-i18next";

export function Aboutuspage() {

    const { t } = useTranslation();

    return (
        <AboutuspageContainer>
            <h1 tabIndex={0}>{t('Sobre Nós')}</h1>
            <section className="aboutus" aria-labelledby="about-us-description">
                <p id="about-us-description" tabIndex={0}>
                    {t('O Meu Diário Oficial é um serviço que facilita o acompanhamento de publicações oficiais da cidade de Salvador. Nossa plataforma verifica diariamente o Diário Oficial e notifica você por e-mail sempre que seu nome é mencionado. Nosso objetivo é simplificar o acesso a informações importantes e garantir que você esteja sempre informado sobre convocações, notificações legais e outros avisos relevantes. Com o Meu Diário Oficial, você nunca perderá uma publicação importante!')}
                </p>
            </section>
        </AboutuspageContainer>
    );
}
