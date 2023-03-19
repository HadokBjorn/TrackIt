import { Navbar } from '../../components/Navbar/Navbar'
import { FooterMenu } from '../../components/FooterMenu/FooterMenu';
import styled from 'styled-components';
import { BsTrash } from "react-icons/bs";
import { useState } from 'react';

export function Habitos(){
    const [newHabito, setNewHabito] = useState(false)
    return(
        <section>
            <Navbar/>
                <HabitosContainer>
                    <header>
                        <div>
                            <p>Meus hábitos</p>
                            <button onClick={()=>setNewHabito(true)}> + </button>
                        </div>
                        {newHabito?(<CardHabito>
                            <form>
                                <input type="text" placeholder="nome do hábito" />
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                                <div className='container-button-save'>
                                    <p onClick={()=>setNewHabito(false)} className='cancelar'>Cancelar</p>
                                    <button>Salvar</button>
                                </div>
                                
                            </form>
                        </CardHabito>):''}
                    </header>

                    <main>
                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>

                        <CardHabito>
                            <div>
                                <p>Ler 1 capítulo de livro e hablar con mi amigos en el facebuko</p>
                                <ul>
                                    <li>D</li>
                                    <li>S</li>
                                    <li>Q</li>
                                    <li>Q</li>
                                    <li>S</li>
                                    <li>S</li>
                                </ul>
                            </div>
                            <button>
                                <BsTrash/>
                            </button>
                        </CardHabito>
                        
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

    li{
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

    button{
        border: none;
        background-color: transparent;
        height: 100%;
        padding-top: 15px;
        display: flex;
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
    
    
`