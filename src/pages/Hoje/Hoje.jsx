import styled from "styled-components";
import { Navbar } from '../../components/Navbar/Navbar'
import { FooterMenu } from '../../components/FooterMenu/FooterMenu';
import { FaCheck} from "react-icons/fa"
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export function Hoje(){
    const { infoUser } = useContext(UserContext)
    const [tarefas, setTarefas] = useState([])

    useEffect( () => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {headers: {Authorization: `Bearer ${infoUser.token}`}}
        
        axios.get(url, config)
        .then((res)=>{
            setTarefas(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })

    }, [infoUser] )

    return(
        <section>
            <Navbar/>
            <HojeContainer>
                <header>
                    <p>Segunda, 17/05</p>
                    {(tarefas.length===0)?
                    (<h3>Nenhum hábito adicionado</h3>):
                    (<h3>Nenhum hábito concluído ainda</h3>)}
                </header>
                <main>
                    {(tarefas.length===0)?"":(<CardHoje>
                        <div>
                            <p>Ler 1 capítulo de livro</p>
                            <h3>Sequência atual: 3 dias</h3>
                            <h3>Seu recorde: 5 dias</h3>
                        </div>
                        <button>
                            <FaCheck size={35} className="icon-check"/>
                        </button>
                    </CardHoje>)}

                    {/* <CardHoje>
                        <div>
                            <p>Ler 1 capítulo de livro</p>
                            <h3>Sequência atual: 3 dias</h3>
                            <h3>Seu recorde: 5 dias</h3>
                        </div>
                        <button>
                            <FaCheck size={35} className="icon-check"/>
                        </button>
                    </CardHoje>

                    <CardHoje>
                        <div>
                            <p>Ler 1 capítulo de livro</p>
                            <h3>Sequência atual: 3 dias</h3>
                            <h3>Seu recorde: 5 dias</h3>
                        </div>
                        <button>
                            <FaCheck size={35} className="icon-check"/>
                        </button>
                    </CardHoje>

                    <CardHoje>
                        <div>
                            <p>Ler 1 capítulo de livro</p>
                            <h3>Sequência atual: 3 dias</h3>
                            <h3>Seu recorde: 5 dias</h3>
                        </div>
                        <button>
                            <FaCheck size={35} className="icon-check"/>
                        </button>
                    </CardHoje>

                    <CardHoje>
                        <div>
                            <p>Ler 1 capítulo de livro</p>
                            <h3>Sequência atual: 3 dias</h3>
                            <h3>Seu recorde: 5 dias</h3>
                        </div>
                        <button>
                            <FaCheck size={35} className="icon-check"/>
                        </button>
                    </CardHoje> */}
                </main>
            </HojeContainer>
            <FooterMenu/>
        </section>
    )
}

const HojeContainer = styled.div`
    width: 90%;
    height: 100vmax;

    padding-bottom: 15px;



    overflow-y: hidden;

    margin: 28px 18px 100px 18px;
    header{
        margin-bottom: 20px;
        width: 100%;
        max-height: 235px;

    }
    header p{

        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }
    header h3{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #BABABA;
    }
    main{
        width: 100%;
        height: 100%;
        max-height: 91%;

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow-y: auto;
    }
    main::-webkit-scrollbar{
        width: 0;
    }
`

const CardHoje = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div{
        margin: 15px 13px;
    }
    button{
        width: 69px;
        height: 69px;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        margin-right: 13px;
    }
    .icon-check{
        color: #fff;
    }
    
    h3{
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }
    p{
        margin-bottom: 8px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;


        color: #666666;
    }

`