import { HomepageContainer } from "./styles";
import { useState, useEffect } from 'react';


export function Homepage(){

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


    return(
        <HomepageContainer>
            <div className="intro">
            Bem-vindo ao Meu Diario Oficial!
            <span>{typedText}</span>
            </div>
        </HomepageContainer>

    );
}