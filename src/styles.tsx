import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column; /* Alinha o Header e o conteúdo da Homepage verticalmente */
  color: white;
  
  /* Adiciona a camada sobreposta semi-transparente */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;
