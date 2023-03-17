import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, FooterMenu } from "./styles/GlobalStyle";
import logoNavbar from "./assets/logo.png";
import userImage from "./assets/user-image.png"
import semiCirculo from "./assets/semi-circulo.png"
import circulo from "./assets/blue-circle.png"
import Login from "./pages/Login/Login";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Navbar data-test="header">
          <img src={logoNavbar} alt="Logo"/>
          <div>
            <img src={userImage} alt="imagem de usuario"/>
          </div>
        </Navbar>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      {/* <FooterMenu>
        <div>Esquerda</div>
        
        <div className="central-button">
          <img src={circulo} alt="botão-hoje"/>
          <img className={"semi-circle"} src={semiCirculo} alt="semicirculo"/>
        </div>
        
        <div>Direita</div>
      </FooterMenu> */}
      </BrowserRouter>
    </section>
  );
}

export default App;
