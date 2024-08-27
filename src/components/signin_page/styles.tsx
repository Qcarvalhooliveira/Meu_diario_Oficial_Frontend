import styled from "styled-components";


export const SigninpageContainer = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Faz a página de login ocupar toda a altura da janela */

  h1 {
    text-align: center; /* Centraliza o texto do h1 */
    margin-bottom: 20px; /* Adiciona espaço abaixo do título */
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
    padding: 30px;
    border-radius: 10px;
    max-width: 400px; /* Largura máxima do formulário */
    width: 100%;
  }

  .input-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }


  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 22px;
  }

  button {
    padding: 10px;
    max-width: 100px;
    margin-top: 10px;
    margin-left: 300px;
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