import styled from "styled-components";
import logoNavbar from "../../assets/logo.png";
import userImage from "../../assets/user-image.png"


export function Navbar(){
    return(
        <Header data-test="header">
            <img src={logoNavbar} alt="Logo"/>
            <div>
                <img className="user-picture" src={userImage} alt="imagem de usuario"/>
            </div>
        </Header>
    )
}


const Header = styled.header`
    max-width: 768px;
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img{
        margin: 0 18px;
    }
    div{
        height: inherit;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div .user-picture{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`