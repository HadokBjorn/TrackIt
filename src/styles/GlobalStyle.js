import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body{
        background: #E5E5E5;
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: 'Lexend Deca', sans-serif;
    }
    section{
        position: relative;

        max-width: 768px;
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #root{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button{
        font-family: 'Lexend Deca';
        font-style: normal;
    }
`
