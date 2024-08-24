import { Header } from "./components/header";
import { Homepage } from "./components/homepage/Index";
import { AppContainer } from "./styles";
import background from "./assets/capa.jpg";

function App() {
  return (
    <AppContainer style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Homepage />
    </AppContainer>
  );
}

export default App;
