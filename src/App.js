import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import { Habitos } from "./pages/Habitos/Habitos";
import { Hoje } from "./pages/Hoje/Hoje";
import { Historico } from "./pages/Historico/Historico";
import UserContext from "./contexts/UserContext"


function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <UserContext.Provider>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/habitos" element={<Habitos/>}/>
            <Route path="/hoje" element={<Hoje/>}/>
            <Route path="/historico" element={<Historico/>}/>  
          </UserContext.Provider>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
