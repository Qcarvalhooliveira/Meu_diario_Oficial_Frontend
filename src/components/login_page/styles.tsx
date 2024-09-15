import styled from "styled-components";


export const LoginpageContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
    padding: 2rem;
    border-radius: 10px;
    max-width: 25rem;
    width: 100%;
  }

  .input-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }


  label {
    margin-bottom: 0.4rem;
    font-weight: bold;
  }

  input {
    padding: 0.7rem;
    border: 1px solid #ddd;
    border-radius: 22px;
  }

  button {
    padding: 0.7rem;
    max-width: 6.5rem;
    margin-top: 0.7rem;
    margin-left: 15rem;
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