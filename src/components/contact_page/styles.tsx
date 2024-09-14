import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    margin: 1.5rem auto;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
    padding: 2rem;
    border-radius: 10px;
    max-width: 25rem;
    width: 100%;
    height: auto;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 22px;
`;

export const Textarea = styled.textarea`
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const Button = styled.button`
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
`;
