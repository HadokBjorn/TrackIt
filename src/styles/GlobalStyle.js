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
    .custom-ui{
        font-size: 18px;
        font-weight: 700;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .delete-cancel{
        margin-top: 20px;
        gap: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .delete-cancel button{
        border: none;
        width: 80px;
        height: 40px;
        border-radius: 10px;
        background-color: darkgray;
        color: aliceblue;
        font-weight: 700;

    }
    .delete-cancel .delete{
        background-color: tomato;
    
    }
`
