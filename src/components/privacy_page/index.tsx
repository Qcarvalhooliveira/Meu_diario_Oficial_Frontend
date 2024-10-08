import { PrivacypageContainer } from "./styles";
import { useTranslation } from "react-i18next";

export function Privacypage() {

  const { t } = useTranslation();

  return (
    <PrivacypageContainer>
      <h1 tabIndex={0} aria-label={t('Política de Privacidade')}>
        {t('Política de Privacidade')}
      </h1>
      <div className="privacy" aria-live="polite" role="region" tabIndex={0}>
        <p>
            {t('Sua privacidade é importante para nós. Esta política descreve como o Meu Diário Oficial coleta, utiliza, e protege suas informações pessoais quando você utiliza nossos serviços.')}
          <br />

          <b>* {t('Coleta de Informações:')}</b> {t('Coletamos informações pessoais que você fornece diretamente, como seu nome e endereço de e-mail, quando você se registra para receber notificações ou utiliza nossos serviços.')}
          <br/>

          <b>* {t('Uso das Informações:')}</b> {t('Utilizamos suas informações para enviar notificações relevantes por e-mail, melhorar nossos serviços, e comunicar atualizações importantes sobre o serviço. Não compartilhamos suas informações com terceiros sem o seu consentimento.')}
          <br/>

          <b>* {t('Proteção de Dados:')}</b> {t('Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.')}
          <br/>

          <b>* {t('Seus Direitos:')}</b> {t('Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que mantemos. Para fazer isso, entre em contato conosco através do e-mail fornecido abaixo.')}
          <br/>

          <b>* {t('Alterações a Esta Política:')}</b> {t('Podemos atualizar esta política de privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas por e-mail ou através do nosso site.')}
          <br/>

          <b>* {t('Contato:')}</b> {t('Se você tiver qualquer dúvida sobre nossa Política de Privacidade ou sobre como suas informações são tratadas, entre em contato conosco em meu.diario.oficial.ssa@gmail.com.')}
          <br/>

          {t('Ao continuar a usar o Meu Diário Oficial, você confirma que leu e compreendeu esta política e concorda com a coleta e uso de suas informações conforme descrito.')}
        </p>
      </div>
    </PrivacypageContainer>
  );
}
