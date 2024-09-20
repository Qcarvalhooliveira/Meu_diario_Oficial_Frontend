import styled from "styled-components";


export const PrivacypageContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.7rem auto;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.767);
    box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
    padding: 0.8rem;
    border-radius: 10px;
    max-width: 62.5rem;
    width: 100%;
    min-height: 100vh;
    gap: 1rem;

  .h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: white;
  }

  .privacy p {
    text-align: justify;
    color: white;
    line-height: 1.5;
    max-width: 100%;
    margin: 0;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 1rem;
    
  }
`