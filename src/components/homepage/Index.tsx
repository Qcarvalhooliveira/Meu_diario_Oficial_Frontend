import { useState, useEffect } from 'react';
import { HomepageContainer, Dots, Arrow } from "./styles";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useNavigate } from "react-router-dom";

export function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [typedText, setTypedText] = useState('');
  const fullText = "Fique sempre informado quando seu nome for mencionado nas publicações oficiais de Salvador.";
  const typingDelay = 100;
  const readingTime = 5000;
  const restartDelay = 2000;

  useEffect(() => {
    const typeText = (index = 0, currentText = '') => {
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
  }, [fullText, readingTime, typingDelay, restartDelay]);

  const navigate = useNavigate(); 

  return (
    <HomepageContainer>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="slide-content">
            <h1>Bem-vindo ao Meu Diario Oficial!</h1>
            <p>{typedText}</p>
          </div>
        </div>

        <div className="keen-slider__slide">
          <div className="slide-content">
            <h1>Sobre Nós</h1>
            <p>O Meu Diário Oficial é um serviço que facilita o acompanhamento de publicações oficiais da cidade de Salvador.</p>
            <button onClick={() => navigate("/about")}>Saiba mais</button>
          </div>
          
        </div>

        <div className="keen-slider__slide">
          <div className="slide-content">
            <h1>Terceiro Slide</h1>
            <p>Texto do terceiro slide aqui.</p>
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