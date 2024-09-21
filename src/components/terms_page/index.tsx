import { TermspageContainer } from "./styles";
import { useTranslation } from "react-i18next";


export function Termspage() {

    const { t } = useTranslation();

return (
    <TermspageContainer>
        <h1>{t('Termos de Serviço')}</h1>
        <div className="terms" role="contentinfo" aria-label={t('Termos de Serviço')}>
            <p>        
                {t('Ao utilizar nossos serviços, você concorda com os seguintes termos:')}<br/><br/>

                <b>* {t('Uso do Serviço:')}</b> {t('O Meu Diário Oficial fornece notificações por e-mail baseadas em publicações no Diário Oficial de Salvador. É de sua responsabilidade fornecer informações corretas e manter seu endereço de e-mail atualizado.')} <br/>

                <b>* {t('Privacidade e Dados:')}</b> {t('Respeitamos sua privacidade e protegemos suas informações pessoais. Seus dados serão utilizados apenas para fins de envio de notificações e comunicações relativas ao serviço. Para mais detalhes, consulte nossa Política de Privacidade.')}<br/>

                <b>* {t('Limitação de Responsabilidade:')}</b> {t('O Meu Diário Oficial não se responsabiliza por quaisquer perdas ou danos decorrentes do mau uso do serviço, incluindo, mas não se limitando a, erros de digitação de nome ou e-mail, impedidndo assim o envio da notificação.')}<br/>

                <b>* {t('Modificações no Serviço:')}</b> {t('Reservamo-nos o direito de modificar, suspender ou descontinuar o serviço, total ou parcialmente, a qualquer momento, sem aviso prévio.')}<br/>

                <b>* {t('Aceitação dos Termos:')}</b> {t('Ao criar uma conta ou utilizar nosso serviço, você concorda com estes Termos de Serviço. Se você não concorda com estes termos, por favor, não utilize o serviço.')}<br/>

                <b>* {t('Contato:')}</b> {t('Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco em meu.diario.oficial.ssa@gmail.com.')}<br/><br/>

                {t('Ao continuar a usar o Meu Diário Oficial, você confirma que leu e compreendeu estes termos e concorda em cumprir todas as políticas e diretrizes aqui estabelecidas.')}
            </p>
        </div>
    </TermspageContainer>


);
}