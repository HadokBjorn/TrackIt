import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginLogo from "../../assets/login-logo.png";
import { PageContainer, FormContainer } from "../Login/Login";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

function Cadastro(){
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [form, setForm] = useState({
        email: '',
        name: '',
        image: '',
        password: '',
    })
    
    function sendCadastro(e){
        setLoader(true);
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        axios.post(url,form)
            .then((res)=>{
                setLoader(false);
                navigate("/");
                console.log(res.data);
            })
            .catch((err)=>{
                setLoader(false);
                alert(err.response.data.message);
            })

        e.preventDefault();
    }
    function capturaInput(e){
        setForm({...form,[e.target.name]:e.target.value})
    }
    return(
        <PageContainer onSubmit={(e)=>sendCadastro(e)}>
            <img src={loginLogo} alt="Logo de Login"/>
                <FormContainer>
                    <input
                    disabled={loader}
                    data-test="email-input"
                    required 
                    name="email"
                    value={form.email} 
                    type={"email"} 
                    placeholder={"email"}
                    onChange={capturaInput}
                    />

                    <input
                    disabled={loader}
                    data-test="password-input"
                    required
                    name="password"
                    value={form.password} 
                    type={"password"} 
                    placeholder={"senha"}
                    onChange={capturaInput}
                    />

                    <input
                    disabled={loader}
                    data-test="user-name-input"
                    required
                    name="name"
                    value={form.name} 
                    type={"text"} 
                    placeholder={"nome"}
                    onChange={capturaInput}
                    />

                    <input
                    disabled={loader}
                    data-test="user-image-input"
                    required
                    name="image"
                    value={form.image}
                    type={"url"} 
                    placeholder={"foto"} 
                    onChange={capturaInput}
                    /> 

                    <button data-test="signup-btn" disabled={loader} type="submit">
                        {loader?(<ThreeDots 
                        height="45" 
                        width="80"
                        radius="13"
                        color="#fff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}/>):'Cadastrar'}
                    </button>

                    <Link data-test="login-link" to={"/"}>
                        <p>Já tem uma conta? Faça login!</p>
                    </Link>
                </FormContainer>
        </PageContainer>
    )
}

export default Cadastro;
