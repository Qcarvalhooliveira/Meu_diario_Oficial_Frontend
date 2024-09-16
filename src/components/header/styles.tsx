import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height:15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .side-links {
    
    position: absolute;
    top: 3.2rem;
    right:6.5rem;
    display: flex;
    gap: 1rem; 

   button {
      background: transparent;
      border: none;
      text-decoration: none;
      text-align: center;
      padding: 0.5rem 1rem;
      color: #ffffffdf;
      width: 8.2rem;
      height: 2.2rem;
      border-radius: 22px;
      font-weight: 600;
      font-size: 14px;
      box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
      padding: 0.5rem 1rem;
      background-color: #25bee462;
      
    
      cursor: pointer;
      transition:0.3s;

   &:hover{
    background-color: #25bee4d6;
    color: #fff;
   }
   
   }
}

.logo {
    display: flex;
    padding-left: 2.5rem;
    margin-top: 1.6rem;
    cursor: pointer;
    transition:0.3s;
    

    img {
      width: 5rem;
      height: auto;
      box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);

    }
  }

`;
