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
    justify-content: center;
    img {
      margin: 1.5rem;
      width: 5rem;
      height: auto;
      box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
    }
  }

  .copyright {
    color: #ffffff;
    font-size: 14px;
    text-align: center;
  }

  .footersection {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 80%;
    gap: 2rem;
    margin: 0.7rem;
 }

 @media screen and (max-width: 768px) {

  display: flex;
  height: 40vh;
  justify-content: center;
  

  .logo {
    position: relative;
    display: flex;
    top: -4rem;
    img {
      width: 4rem;
      height: auto
    }
  }

  .copyright {
    margin-left: -8rem;
  }

}
`;

export const LinkSection = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    margin-left: -7rem;
  }
`;

export const LinkItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }

`;

  
