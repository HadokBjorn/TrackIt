import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body{
        background: #E5E5E5;

        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: 'Lexend Deca', sans-serif;
    }
    section{
        max-width: 768px;
        height: 100vh;
        position: relative;
    }

    #root{
        width: 100%;
    }
`

export const Navbar = styled.header`
    max-width: 768px;
    height: 70px;
    padding: 10px 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    div img{
        width: 51px;
        height: 51px;

        border-radius: 98.5px;
    }
`
export const FooterMenu = styled.footer`
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 101px;

    display: flex;
    justify-content: space-between;

    div{
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        align-self: flex-end;
        width: 50%;
    }

    .central-button{
        position: relative;
        background: transparent;
        align-self: flex-start;
        height: inherit;
        z-index: 2;
    }
    .semi-circle{
        position: absolute;
        padding-left: 6px;
    }
`