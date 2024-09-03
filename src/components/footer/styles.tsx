import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  background-color: #00619B;
  box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
  

  .logo {
    display: flex;
    img {
      margin: 20px;
      width: 80px;
      height: auto;
      box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
    }
  }

  .copyright {
    color: #ffffff;
    font-size: 14px;
  }

  .footersection {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 80%;
    gap: 30px;
    height: 100px;
    margin: 10px;
 }

`;

  
// Seção de Links
export const LinkSection = styled.div`
  display: flex;
  gap: 20px; /* Espaçamento entre os links */
`;

export const LinkItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    text-decoration: underline; /* Sublinhar links ao passar o mouse */
  }
`;
