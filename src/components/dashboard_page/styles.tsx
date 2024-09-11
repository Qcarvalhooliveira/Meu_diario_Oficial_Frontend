import styled from "styled-components";

export const DashboardpageContainer = styled.div`
  display: flex;
  margin: 10px auto;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 3px 3px 10px 3px rgba(0.25,0.25,0.25,0.25);
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  height: 500px;
  position: relative;

  h1 {
    text-align: left;
    margin-bottom: 20px;
    color: white;
    font-weight: small;
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 42px;
  right: 20px;
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
  top: 80px;
  right: 20px;
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;

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
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: white;

  p {
    margin-bottom: 20px;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #777;
  }`