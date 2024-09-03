import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    margin: 20px auto;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
    padding: 30px;
    border-radius: 10px;
    max-width: 400px; /* Largura máxima do formulário */
    width: 100%;
    height: auto;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 22px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const Button = styled.button`
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
`;
