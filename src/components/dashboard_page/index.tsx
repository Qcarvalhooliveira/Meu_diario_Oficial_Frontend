import { useState, useEffect } from "react";
import { ConfirmButton, ConfirmDialog, DashboardpageContainer, Menu, MenuButton, MenuItem, TimesSelected } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

interface DashboardpageProps {
  handleLogout: () => void;
}

interface UserSelection {
  selected_at: string; 
}

export function Dashboardpage({ handleLogout }: DashboardpageProps) { 
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [selections, setSelections] = useState<UserSelection[]>([])
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
          const { name, id, selections } = response.data;
          setUserName(name);
          setUserId(id);
          setSelections(selections);
        } else {
          console.error("Erro ao buscar os dados do usuário.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  // Função de logout
  const handleLogoutClick = () => {
    handleLogout();
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
        handleLogoutClick();
      } else {
        alert("Erro ao deletar usuário.");
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      alert("Ocorreu um erro ao deletar o usuário. Tente novamente.");
    }
  };

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  return (
    <DashboardpageContainer>
      <h1>Dashboard</h1>

      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </MenuButton>

      {menuOpen && (
        <Menu>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          <MenuItem onClick={() => setShowConfirm(true)}>Deletar Conta</MenuItem>
        </Menu>
      )}

      <p>Bem-vindo, {userName}</p>

      <TimesSelected >
        <h3>Aqui estão as datas em que seu nome foi mencionado no Diário Oficial:</h3>
        <ul>
          {selections.length > 0 ? (
            selections.map((selection, index) => (
              <li key={index}>{formatDate(selection.selected_at)}</li>
            ))
          ) : (
            <p>Seu nome ainda não foi mencionado no Diário Oficial.</p>
          )}
        </ul>
        </TimesSelected>


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
