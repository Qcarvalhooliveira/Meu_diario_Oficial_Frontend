import styled from "styled-components";

export const HomepageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../../assets/capa.jpg");
  position: relative;
  padding: 20px;

  .keen-slider {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
  }

  .keen-slider__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px; /* Define uma altura mínima para os slides */
    background-color: rgba(0, 0, 0, 0.6); /* Cor de fundo para os slides */
    color: #fff;
    padding: 20px;
  }

  .slide-content {
    text-align: center;
  }
`;

// Estilos para as setas de navegação
export const Arrow = styled.button<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? 'left: 10px;' : '')}
  ${(props) => (props.right ? 'right: 10px;' : '')}
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 24px;
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
    background-color: #ccc;
    border: none;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: #333;
  }
`;
