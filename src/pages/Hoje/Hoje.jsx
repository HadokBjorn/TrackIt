import styled from "styled-components";
import { Navbar } from '../../components/Navbar/Navbar'
import { FooterMenu } from '../../components/FooterMenu/FooterMenu';
import { FaCheck} from "react-icons/fa"
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import * as dayjs from "dayjs";

export function Hoje(){
    const { infoUser, porcentagem, setPorcentagem } = useContext(UserContext)
    const [tarefas, setTarefas] = useState([])
    const [renderiza, setRenderiza] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)


    const updateLocale = require('dayjs/plugin/updateLocale')
    dayjs.extend(updateLocale)
    dayjs.updateLocale('en', {weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabádo"]})

    useEffect( () => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {headers: {Authorization: `Bearer ${infoUser.token}`}}
        
        axios.get(url, config)
        .then((res)=>{
            setTarefas(res.data)
            console.log(res.data)
            atualizaPorcentagem(res.data)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })

    }, [infoUser, renderiza] )

    function ConcluirHabito(item){

        setIsDisabled(true)

        const config = {headers: {Authorization: `Bearer ${infoUser.token}`}}
        const body = {}

        if(!item.done){
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/check`;
            axios.post(url,body, config)
            .then((res)=>{
                setRenderiza(item.name);
                setIsDisabled(false)
            })
            .catch((err)=>{
                alert(err.response.data.message)
                setIsDisabled(false)
            })
        }
        if(item.done){
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/uncheck`;
            axios.post(url,body, config)
            .then((res)=>{
                setRenderiza(item.id);
                setIsDisabled(false)
            })
            .catch((err)=>{
                alert(err.response.data.message)
                setIsDisabled(false)
            })
        }
    }

    function atualizaPorcentagem(data){
        if(data.length!==0){
            const itensConcluidos = data.filter(item => item.done === true)
            const newPorcentagem = parseInt((itensConcluidos.length/data.length)*100);
            console.log(newPorcentagem)
            setPorcentagem(newPorcentagem);
    }
    }

    return(
        <section>
            <Navbar/>
            <HojeContainer>
                <header>
                    <p  data-test="today">{dayjs().format('dddd')}, {dayjs().format('DD')}/{dayjs().format('MM')}</p>
                    {(porcentagem===0?
                    <h3 data-test="today-counter">Nenhum hábito concluído ainda</h3>:
                    <h3 data-test="today-counter" className="green">{porcentagem}% dos hábitos concluídos</h3>)}
                </header>
                <main>
                    {(tarefas.length===0)?"":
                    (tarefas.map((card,i)=>(
                        <CardHoje data-test="today-habit-container" key={i}>
                            <div>
                                <p data-test="today-habit-name">{card.name}</p>
                                <h3 data-test="today-habit-sequence">Sequência atual: 
                                    <span 
                                        className={(card.currentSequence===card.highestSequence && card.highestSequence>0 )?
                                        'recorde':''}
                                        > 
                                        {` ${card.currentSequence} dias`}
                                    </span>
                                </h3>
                                <h3 data-test="today-habit-record">Seu recorde: 
                                    <span
                                    className={(card.currentSequence===card.highestSequence && card.highestSequence>0 )?
                                        'recorde':''}
                                    >
                                        {` ${card.highestSequence} dias`}
                                    </span>
                                </h3>
                            </div>
                            <button data-test="today-habit-check-btn" disabled={isDisabled} onClick={()=> ConcluirHabito(card)} className={card.done?'concluido':''}>
                                <FaCheck size={35} className="icon-check"/>
                            </button>
                        </CardHoje>
                    )))}
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
    header .green{
        color:#8FC549;
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
        margin: 13px 0 15px 15px;
        width: 60%;
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

    .concluido{
        background-color: #8FC549;
    }
    .recorde{
        color: #8FC549;
    }

`