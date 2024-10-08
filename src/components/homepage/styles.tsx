import styled from "styled-components";

export const HomepageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .keen-slider {
    width: 100%;
    max-width: 44rem;
    height: 19rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
  }

  .keen-slider__slide {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    max-width: 60rem;
    min-height: 56.5rem;
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
    max-width: 34rem;
    height: 12.5rem;
    margin: 0.7rem;
    gap: 1.5rem;

  }

  .slide-content button {
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0.7rem;
    max-width: 12.5rem;
    margin-top: 0.7rem;
    background-color: #25bee473;
    color: white;
    border: none;
    border-radius: 22px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #25bee4d6;
    }
  }
`;

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
  padding: 0.4rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;


export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  
  .dot {
    background-color: #fff;
    border: none;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 0.4rem;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: #8b7a7a;
  }

`;
