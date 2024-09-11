import { useState, useEffect } from "react";
import { ConfirmButton, ConfirmDialog, DashboardpageContainer, Menu, MenuButton, MenuItem } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Dashboardpage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token não encontrado. Faça o login primeiro.");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://127.0.0.1:5000/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const { name, id } = response.data;
          setUserName(name);
          setUserId(id);
        } else {
          console.error("Erro ao buscar os dados do usuário.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token não encontrado. Faça o login primeiro.");
      return;
    }

    try {
      const response = await axios.delete(`http://127.0.0.1:5000/delete_user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert("Usuário deletado com sucesso.");
        handleLogout();
      } else {
        alert("Erro ao deletar usuário.");
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      alert("Ocorreu um erro ao deletar o usuário. Tente novamente.");
    }
  };

  return (
    <DashboardpageContainer>
      <h1>Dashboard</h1>

      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </MenuButton>

      {menuOpen && (
        <Menu>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
          <MenuItem onClick={() => setShowConfirm(true)}>Deletar Conta</MenuItem>
        </Menu>
      )}

      <p>Bem-vindo, {userName}</p>

      {showConfirm && (
        <ConfirmDialog>
          <p>Você tem certeza que deseja deletar sua conta?</p>
          <ConfirmButton onClick={handleDeleteAccount}>Sim</ConfirmButton>
          <ConfirmButton onClick={() => setShowConfirm(false)}>Não</ConfirmButton>
        </ConfirmDialog>
      )}
    </DashboardpageContainer>
  );
}
