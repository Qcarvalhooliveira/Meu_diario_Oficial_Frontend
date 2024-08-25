import { useState, useEffect } from 'react';
import { HomepageContainer, NavigationWrapper, Dots, Arrow } from "./styles";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [typedText, setTypedText] = useState('');
  const fullText = "Passionate about technology and innovation, I am on a continuous journey to enhance my skills in Web Development.";
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

  return (
    <HomepageContainer>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="slide-content">
            <h3>Bem-vindo ao Meu Diario Oficial!</h3>
            <p>{typedText}</p>
          </div>
        </div>

        <div className="keen-slider__slide">
          <div className="slide-content">
            <h3>Segundo Slide</h3>
            <p>Texto do segundo slide aqui.</p>
          </div>
          
        </div>

        <div className="keen-slider__slide">
          <div className="slide-content">
            <h3>Terceiro Slide</h3>
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
