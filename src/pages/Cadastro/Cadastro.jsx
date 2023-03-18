import { Link } from "react-router-dom";
import loginLogo from "../../assets/login-logo.png";
import { PageContainer, FormContainer } from "../Login/Login";

function Cadastro(){
    
    function sendCadastro(e){
        e.preventDefault();
    }
    return(
        <PageContainer onSubmit={(e)=>sendCadastro(e)}>
            <img src={loginLogo} alt="Logo de Login"/>
                <FormContainer>
                    <input type={"email"} placeholder={"email"}/>
                    <input type={"password"} placeholder={"senha"}/>
                    <input type={"text"} placeholder={"nome"}/>
                    <input type={"url"} placeholder={"foto"} alt="foto de perfil"/> 
                    <button type="submit">Cadastrar</button>
                    <Link to={"/"}>
                        <p>Já tem uma conta? Faça login!</p>
                    </Link>
                </FormContainer>
        </PageContainer>
    )
}

export default Cadastro;
