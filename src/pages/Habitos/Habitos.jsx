import { Navbar } from '../../components/Navbar/Navbar'
import { FooterMenu } from '../../components/FooterMenu/FooterMenu';
import styled from 'styled-components';
import { BsTrash } from "react-icons/bs";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import { ThreeDots } from "react-loader-spinner";


export function Habitos(){
    const { infoUser } = useContext(UserContext)
    const [newHabito, setNewHabito] = useState(false);
    const semana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [diaSelecionado, setDiaSelecionado] = useState([])
    const [form, setForm] = useState({name:''})
    const [tarefas, setTarefas] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)
    const [renderizar, setRenderizar] = useState()

    useEffect(()=>{
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {headers: {Authorization: `Bearer ${infoUser.token}`}}

        axios.get(url, config)
        .then((res)=>{
            setTarefas(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })

    },[infoUser.token, renderizar])

    function selecionaDia(dia){
        if(!diaSelecionado.includes(dia)){

        const adicionaDia = [...diaSelecionado, dia];
        setDiaSelecionado(adicionaDia);
        console.log(adicionaDia);
        }else{
            const removeDia = [...diaSelecionado].filter(el => el !== dia)
            setDiaSelecionado(removeDia);
        }
    }

    return(
        <section>
            <Navbar/>
                <HabitosContainer>
                    <header>
                        <div>
                            <p>Meus hábitos</p>
                            <button onClick={()=>setNewHabito(true)}> + </button>
                        </div>
                        {newHabito?
                        (<CardHabito>
                            <form /* onSubmit={submitTarefa} */>
                                <input
                                value={form.name}
                                name="name"
                                type="text" 
                                required 
                                placeholder="nome do hábito"
                                /* onChange={capturaInput} */
                                />

                                <ul>
                                    {semana.map((dia,i)=>(
                                        <button
                                        type="button"
                                        onClick={()=>selecionaDia(i)}
                                        className={diaSelecionado.includes(i)?'active':''}
                                        disabled={isDisabled} 
                                        key={i}
                                        >
                                            {dia}
                                        </button>
                                    ))}
                                </ul>
                                <div className='container-button-save'>
                                    <p onClick={()=>setNewHabito(false)} className='cancelar'>Cancelar</p>
                                    <button disabled={isDisabled} type="submit">
                                        {isDisabled?(<ThreeDots 
                                        height="10" 
                                        width="100%"
                                        radius="10"
                                        color="#fff" 
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}/>):'Salvar'}
                                    </button>
                                </div>
                                
                            </form>
                        </CardHabito>):
                        ''}
                    </header>

                    <main>
                        {(tarefas.length===0)?
                        (<CardHabito>
                            <p>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                            </p>
                        </CardHabito>):
                        (tarefas.map((item,i)=>(
                            <CardHabito key={i}>
                                <div>
                                    <p>{item.name}</p>
                                    <ul>
                                        {semana.map((dia,j)=>(
                                            <button
                                            type="button"
                                            className={(item.days.includes(j) || (item.days.includes(7) && j===0))?
                                            'active':''} key={j}>
                                                {dia}
                                            </button>
                                        ))}
                                    </ul>
                                </div>
                                <DeleteTarefa /* onClick={()=>deletarHabito(item.id)} */>
                                    <BsTrash/>
                                </DeleteTarefa>
                        </CardHabito>
                        )))}
                    </main>
                </HabitosContainer>
            <FooterMenu/>
        </section>
    )
}

const HabitosContainer = styled.div`
    width: 90%;
    height: 100vmax;

    overflow-y: hidden;

    margin: 28px 18px 100px 18px;
    
    header > div{
        width: 100%;
        max-height: 235px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }
    header button{
        width: 40px;
        height: 35px;
        
        background: #52B6FF;
        border: none;
        border-radius: 4.63636px;

        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #fff;
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
const CardHabito = styled.div`
    width: 95%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    
    
    div{
        width: 95%;
        margin: 15px 13px;
    }

    form{
        width: 100%;
        margin: 18px;
    }

    form input{
        box-sizing: border-box;
        padding: 0 11px;
        margin-bottom: 8px;
        width: 100%;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }

    input::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }

    form div{
        margin: 29px 0;
        gap: 23px;
    }
    
    p{
        margin-bottom: 8px;

        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }

    ul{
        display: flex;
        column-gap: 4px;
    }

    ul button{
        width: 30px;
        height: 30px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }

    .container-button-save{
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .container-button-save button, .cancelar{
        width: 84px;
        height: 35px;

        background: #52B6FF;
        border-radius: 4.63636px;

        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0;

        color: #FFFFFF;
    }
    .cancelar{
        background: none;
        color: #52B6FF;
    }
    .active{
        background: #CFCFCF;
        color: #FFFFFF;
    }
`
const DeleteTarefa = styled.button`
    border: none;
    background-color: transparent;
    height: 100%;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`