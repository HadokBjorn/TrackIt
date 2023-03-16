import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./styles/GlobalStyle";
import logoNavbar from "./assets/logo.png";
import userImage from "./assets/user-image.png"
import Login from "./pages/Login/Login";

function App() {
  return (
    <section>
      <BrowserRouter>
        {/* <Navbar>
          <img src={logoNavbar} alt="Logo"/>
          <div>
            <img src={userImage} alt="imagem de usuario"/>
          </div>
        </Navbar> */}
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
