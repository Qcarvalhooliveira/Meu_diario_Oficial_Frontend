import styled from "styled-components";

export const HomepageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .keen-slider {
    width: 100%;
    max-width: 700px;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
  }

  .keen-slider__slide {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    max-width: 80%;
    min-height: 900px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    
  }

  .slide-content {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 550px;
    height: 200px;
    margin: 10px;

  }
`;

// Estilos para as setas de navegação
export const Arrow = styled.button<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? 'left: 10px;' : '')}
  ${(props) => (props.right ? 'right: 10px;' : '')}
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 34px;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  padding: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

// Estilos para os indicadores (bolinhas)
export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  
  .dot {
    background-color: #fff;
    border: none;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: #8b7a7a;
  }
`;
