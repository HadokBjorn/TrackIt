import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import { Habitos } from "./pages/Habitos/Habitos";
import { Hoje } from "./pages/Hoje/Hoje";
import { Historico } from "./pages/Historico/Historico";
import UserContext from "./contexts/UserContext"
import { useState } from "react";


function App() {
  const [infoUser, setInfoUser] = useState();
  const [porcentagem, setPorcentagem] = useState(0);

  return (
    <section>
      <BrowserRouter>
      <UserContext.Provider value={{infoUser, setInfoUser, porcentagem, setPorcentagem}}>
        <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/habitos" element={<Habitos/>}/>
            <Route path="/hoje" element={<Hoje/>}/>
            <Route path="/historico" element={<Historico/>}/>  
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </section>
  );
}

export default App;
