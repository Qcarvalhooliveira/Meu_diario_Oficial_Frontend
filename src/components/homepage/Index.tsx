import { useState, useEffect } from 'react';
import { HomepageContainer, Dots, Arrow } from "./styles";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export function Homepage() {
  const { t , i18n} = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [typedText, setTypedText] = useState('');
  const typingDelay = 100;
  const readingTime = 5000;
  const restartDelay = 2000;

  useEffect(() => {
    const typeText = (index = 0, currentText = '') => {
      const fullText = t('Fique sempre informado quando seu nome for mencionado nas publicações oficiais de Salvador.');
  
      if (index < fullText.length) {
        const nextText = currentText.slice(0, -1) + fullText[index] + '|';
        setTypedText(nextText);
        setTimeout(() => typeText(index + 1, nextText), typingDelay);
      } else {
        const finalText = currentText.slice(0, -1);
        setTypedText(finalText);

        setTimeout(() => {
          typeText();
        }, readingTime + restartDelay);
      }
    };

    typeText();

    return () => {
      setTypedText('');
    };
  }, [t, readingTime, typingDelay, restartDelay, i18n]);

  const navigate = useNavigate(); 

  

  return (
    <HomepageContainer>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="slide-content">
            <h1>{t('Bem-vindo ao Meu Diario Oficial!')}</h1>
            <p>{typedText}</p>
          </div>
        </div>

        <div className="keen-slider__slide">
          <div className="slide-content">
            <h1>{t('Sobre Nós')}</h1>
            <p>{t('O Meu Diário Oficial é um serviço que facilita o acompanhamento de publicações oficiais da cidade de Salvador.')}</p>
            <button onClick={() => navigate("/about")}>{t('Saiba mais')}</button>
          </div>
          
        </div>

        <div className="keen-slider__slide">
          <div className="slide-content">
            <h1>{t('Precisando de Ajuda?')}</h1>
            <p>{t('Fale conosco e tire suas dúvidas sobre nossas publicações. Estamos aqui para ajudar!')}</p>
            <button onClick={() => navigate("/contact")}>{t('Envie sua mensagem')}</button>
          </div>
        </div>

      <Arrow left onClick={() => instanceRef.current?.prev()}>&#8249;</Arrow>
      <Arrow right onClick={() => instanceRef.current?.next()}>&#8250;</Arrow>

      <Dots>
        {[...Array(3).keys()].map((idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`dot${currentSlide === idx ? ' active' : ''}`}
          ></button>
        ))}
      </Dots>
      </div>
    </HomepageContainer>
  );
}
