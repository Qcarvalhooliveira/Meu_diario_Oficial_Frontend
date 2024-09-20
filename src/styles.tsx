import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 110vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  color: white;
  
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

export const LanguageSwitcher = styled.div`
  position: absolute;
  bottom: -12rem;
  right: 8rem;
  display: flex;
  gap: 1rem;

  img {
    width: 3rem;
    height: auto;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 768px) {

    display: flex;
    flex-direction: column;
    bottom: -14rem;
    right: 3rem;
  }

  @media screen and (max-width: 480px) {

    bottom: -19rem;
    right: 2rem;
  }


`;
