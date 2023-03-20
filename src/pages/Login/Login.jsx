import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import styled from "styled-components";
import loginLogo from "../../assets/login-logo.png";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export function Login(){

    const { setInfoUser } = useContext(UserContext);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const [form, setForm] = useState({email: '', password: ''})
    
    function sendLogin(e){
        setLoader(true);
        e.preventDefault();

        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        axios.post(url,form)
        .then((res) => {
            setLoader(false);
            setInfoUser({image:res.data.image, token:res.data.token});
            navigate("/hoje");
        })
        .catch((err) => {
            setLoader(false);
            alert(err.response.data.message);
        })
    }

    function capturaInput(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    return(
        <PageContainer>
            <img src={loginLogo} alt="Logo de Login"/>

                <FormContainer onSubmit={sendLogin}>
                    <input
                    disabled={loader}
                    type={"email"}
                    name="email"
                    value={form.email}
                    placeholder={"email"} 
                    data-test="email-input"
                    onChange={capturaInput}
                    />

                    <input
                    disabled={loader}
                    type={"password"}
                    name="password"
                    value={form.password}
                    placeholder={"senha"} 
                    data-test="password-input"
                    onChange={capturaInput}
                    />

                    <button data-test="login-btn" disabled={loader} type="submit">
                        {loader?(<ThreeDots 
                        height="45" 
                        width="80"
                        radius="13"
                        color="#fff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}/>):'Entrar'}
                    </button>

                    <Link to={"/cadastro"}>
                        <p data-test="signup-link">Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </FormContainer>
            
        </PageContainer>
    )
}

export const PageContainer = styled.div`
    width: -webkit-fill-available;
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
export const FormContainer = styled.form`
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
        font-family: 'Lexend Deca', sans-serif;
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
        
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        
        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;
    }
`