import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  z-index: 1;

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

  .side-links {
    
    position: absolute;
    top: 50px;
    right:100px;
    display: flex;
    gap: 15px; 

   button {
      background: transparent;
      border: none;
      text-decoration: none;
      text-align: center;
      padding: 0.5rem 1rem;
      color: #ffffffdf;
      width: 130px;
      height: 35px;
      border-radius: 22px;
      font-weight: 600;
      font-size: 14px;
      box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
      padding: 0.5rem 1rem;
      background-color: #25bee463;
      
    
      cursor: pointer;
      transition:0.3s;

   &:hover{
    background-color: #25bee4d6;
    color: #fff;
   }
   
   }
}

.intro {
   
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 28px; 
    font-weight: 600;
    max-width: 450px; 
    max-height: 200px; 
    span {
      color: #fff;
      font-weight: 600;
      font-size: 22px

    }
      
}

`;
