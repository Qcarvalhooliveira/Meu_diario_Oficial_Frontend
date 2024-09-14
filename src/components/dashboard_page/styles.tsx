import styled from "styled-components";

export const DashboardpageContainer = styled.div`
  display: flex;
  margin: 0.7rem auto;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
  padding: 1.5rem;
  border-radius: 10px;
  max-width: 37.5rem;
  width: 100%;
  height: 31.5rem;
  position: relative;

  h1 {
    text-align: left;
    margin-bottom: 1.5rem;
    color: white;
    font-weight: small;
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 2.7rem;
  right: 1.5rem;
  background-color: transparent;
  color: white;
  font-size: 30px;
  border: none;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 5rem;
  right: 1.5rem;
  background-color: #333;
  padding: 0.7rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 0.7rem;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 0.7rem;

  &:hover {
    background-color: #444;
  }

  
`;

export const ConfirmDialog = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #222;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: white;

  p {
    margin-bottom: 1.5rem;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #777;
  }`

export const TimesSelected = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap:1rem;
`