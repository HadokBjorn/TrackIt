import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import { Habitos } from "./pages/Habitos/Habitos";


function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/habitos" element={<Habitos/>}/>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
