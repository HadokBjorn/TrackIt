import { Navbar } from "../../components/Navbar/Navbar";
import { FooterMenu } from "../../components/FooterMenu/FooterMenu";
import styled from "styled-components";

export function Historico(){
    return(
        <section>
            <Navbar/>
                <HistoricoContainer>
                    <header>
                        <p>Histórico</p>
                    </header>
                    <main>
                        <CardHistorico>
                            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                        </CardHistorico>
                    </main>
                </HistoricoContainer>
            <FooterMenu/>
        </section>
    )
}

const HistoricoContainer = styled.div`
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

const CardHistorico = styled.div`
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