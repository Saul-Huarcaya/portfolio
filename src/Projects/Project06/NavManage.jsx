import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    background-color: ${props => (props.colorHeader) ? "white" : "transparente"};
    
`;
const HeaderContent = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    left: 0;
    top: 0;
    justify-content: space-between;
    max-width: 1024px;
    height: 4rem;
    @media screen and (min-width:769px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width:1025px) {
        margin-left: auto;
        margin-right: auto;
    }
`;
const ContainerLogo = styled.div`
    display:flex;
    height: inherit;
    justify-content: center;
    align-items: center;
    img{
        width: 120px;
        height: 1rem;
    }
`;
const ContainerAmburguesa = styled.div`
    display: none;

    @media screen and (max-width:768px){
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;
const ContainerMenu = styled.div`
    ul{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }
    li{
        color: var(--dark_blue);
        cursor: pointer;
    }
    li:hover{
        color: var(--bright_red);
    }
    @media screen and (max-width: 768px) {
        background-color: rgb(0, 0, 0,0.8);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        top: 4rem;
        color: black;
        visibility: ${({click}) => (click ? "visible":"hidden")};
        transition: opacity 0.4s linear;
        opacity: ${({click}) => (click ? "1":"0")};
        height: 100vh;
        padding: 1rem;
        z-index: 1000;

        ul{
            flex-direction: column;
            background-color: white;
            margin: 0 auto;
            border-radius: 8px;
            overflow: hidden;
            z-index: 1000;
            background-color: white;
            margin: 0 auto;
            border-radius: 8px;
            overflow: hidden;
            z-index: 1000;
        }
        li{
            padding:1rem 0;
            width: 100%;
            text-align: center;
            cursor: pointer;
        }
        li:hover{
            background-color:hsl(12,88%,59%);
            color: white;
        }
    }
`;

const ContainerButton = styled.div`
    display:block;
    button{
        border: none;
        outline: none;
        margin: auto;
        border-radius: 40px;
        width: 100px;
        background-color: var(--bright_red);
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        transition: box-shadow 0.3s linear;
        color: white;
    }
    button:hover{
        opacity: 0.9;
        box-shadow: 1px 1px 6px 2px rgb(0, 0, 0,0.9);
    }
    @media screen and (max-width:768px){
        display: none;
    }
`;
function NavManage(){
    const [visible,setVisisble] = useState(false);
    const [colorHeader,setColorHeader] = useState(false);

    useEffect(()=>{
        const HandleScrollColor = () =>{
            
            if(window.scrollY >= 30){
                setColorHeader(true); 
            }else{
                setColorHeader(false);
            }
    
        }

        window.addEventListener("scroll",HandleScrollColor);
        
        return () =>{
            window.removeEventListener("scroll",HandleScrollColor);
        }
        
    },[]);
    

    return <Header colorHeader={colorHeader}>

    <HeaderContent className="container" >
        <ContainerLogo>
            <img src="imagenes-manage/logo.svg" alt="logo"/>
        </ContainerLogo>
    
        <ContainerMenu click={visible}>
            <ul>
                <li>Pricing</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
            </ul>
        </ContainerMenu>
        <ContainerButton>
            <button className="btn-started">Get Started</button>
        </ContainerButton>

        <ContainerAmburguesa onClick={() => setVisisble(!visible)}>
            {
                (!visible) ? 
                <img src="imagenes-manage/icon-hamburger.svg" alt="icono de amburguesa mobile" id="amburguesa"/>
                : 
                <img src="imagenes-manage/icon-close.svg" alt="icono de cerrar" />
            }
        </ContainerAmburguesa>

    </HeaderContent>
</Header>
}
export default NavManage;

