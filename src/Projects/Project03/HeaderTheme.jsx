import { useContext } from "react";
import styled from "styled-components";
import { ContextTheme } from "../../Context/ContextTheme";
const ContainerTheme = styled.div`
    width: 100%;
    color: white;
    background-color: ${props => props.color == "dark" ? "black":"white"};
    color:${props => props.color == "dark" ? "white" : "black"};
    box-shadow: 0px 0px 6px 2px gray;
    z-index: 100;

    div{
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h1{
        font-size: 1.5rem;
    }
    button{
        border: none;
        outline: none;
        font-size: 1.5rem;
        padding: 2px;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 0px 0px 6px 2px transparent;
        transition: box-shadow 0.3s ease-in;
        background-color: transparent;
    }
    button:hover{
        box-shadow: 0px 0px 6px 2px gray;
    }

    @media screen and (min-width:768px){
        div{
            width: calc(100% - 2rem);
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

function HeaderTheme(){
    const {theme,handleTheme} = useContext(ContextTheme);
    return <ContainerTheme color={theme}>
        <div className="container">
            <h1>Where in the world?</h1>
            <button onClick={handleTheme} color={theme}>☀️</button>
        </div>
    </ContainerTheme>
}
export default HeaderTheme;