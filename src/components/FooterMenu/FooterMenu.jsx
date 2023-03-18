import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function FooterMenu(){
    return(
        <Footer>
            <div>
                <div className="footer-buttons">
                    <button>Hábitos</button>
                    <button>Histórico</button>
                </div>
                <div className="central-button">
                    <CircularProgressbar 
                        value={50} 
                        text={"Hoje"}
                        background={true}
                        backgroundPadding={6}
                        styles={buildStyles({
                            pathColor: '#fff',
                            trailColor: '#52B6FF',
                            backgroundColor: '#52B6FF',
                            textColor: '#FFFFFF',
                            
                        })}
                    />
                </div>
            </div>
        </Footer>
    )
}


const Footer= styled.footer`
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 101px;

    div{
        position: relative;
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: space-between;
    }

    .footer-buttons{
        height: 70px;
        width: inherit;
        background-color: #FFF;
        align-self: flex-end;
        justify-content: space-between;
        
    }

    button{
        border: none;
        width: 36%;
        
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .central-button{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        
        width: 91px;
        height: 91px;

        
        border-radius: 50%;
        
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #FFFFFF;

    }
`