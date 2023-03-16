import { useState } from "react";
import styled from "styled-components";
import loginLogo from "../../assets/login-logo.png";

function Login(){
const [isLogin, setIsLogin] = useState(true)

if(isLogin){
    
}
    return(
        <PageContainer>
            <img src={loginLogo} alt="Logo de Login"/>
            {isLogin ? (
                <FormContainer>
                    <input type={"email"} placeholder={"email"}/>
                    <input type={"password"} placeholder={"senha"}/>
                    <button>Entrar</button>

                    <p onClick={()=>setIsLogin(false)}>Não tem uma conta? Cadastre-se!</p>
                </FormContainer>
            ):(
                <FormContainer>
                    <input type={"email"} placeholder={"email"}/>
                    <input type={"password"} placeholder={"senha"}/>
                    <input type={"text"} placeholder={"nome"}/>
                    <input type={"url"} placeholder={"foto"} alt="foto de perfil"/> 
                    <button>Entrar</button>

                    <p onClick={()=>setIsLogin(true)}>Já tem uma conta? Faça login!</p>
                </FormContainer>
            )}
            
        </PageContainer>
    )
}

const PageContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 68px 36px 0 36px;

    img{
        width: 180px;
        height: 178.38px;
    }
    p{
        margin-top: 25px;
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`
const FormContainer = styled.form`
    width: 100%;
    gap: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: -webkit-fill-available;
        height: 45px;
        padding: 0 11px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
    input::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
    button{
        width: inherit;
        height: 45px;

        background: #52B6FF;
        border:none;
        border-radius: 4.63636px;

        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
    }
`

export default Login;