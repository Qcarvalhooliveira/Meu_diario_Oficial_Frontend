import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Header } from "./components/header";
import { Homepage } from "./components/homepage/Index";
import { AppContainer } from "./styles";
import background from "./assets/capa.jpg";
import { Loginpage } from "./components/login_page";
import { Signinpage } from "./components/signin_page";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact_page";

function App() {
  return (
    <Router>
    <AppContainer style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/cadastrar" element={<Signinpage />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>      
    </AppContainer>
    <Footer />
    </Router>
  );
}

export default App;
