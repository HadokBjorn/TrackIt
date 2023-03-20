import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export function FooterMenu(){
    return(
        <Footer>
            <div>
                <div className="footer-buttons">
                    <Link to={"/habitos"}>
                        <button>Hábitos</button>
                    </Link>
                    <Link to={"/historico"}>
                        <button>Histórico</button>
                    </Link>
                </div>
                
                <div className="central-button">
                    <Link to={"/hoje"}>
                        <CircularProgressbar 
                            value={30} 
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
                    </Link>
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

    button, a{
        border: none;
        width: 36%;
        
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-decoration: none;
        text-align: center;
        color: #52B6FF;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    a:active{
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    a:focus{
        -webkit-tap-highlight-color:transparent;
        user-select: none;
        outline: none;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .central-button, .central-button a{
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