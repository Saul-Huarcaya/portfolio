import { Link } from "react-scroll";
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { ContextTheme } from "../Context/ContextTheme";
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: black;
`;

const NavbarContainer = styled.nav`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    gap: 1rem;
    
    @media screen and (max-width:768px){
        justify-content: space-between;
        height: 3rem;
    }
    @media screen and (min-width:769px)  {
        padding-left: 1rem;
        padding-right: 1rem;
        align-items: center;
    }
`;

const NavbarWrapper = styled.div`
    @media screen and (max-width:768px){
        position: fixed;
        width: 100%;
        top: 3rem;
        bottom: 0;
        right: ${({click}) => (click ? 0 :"-100%")};
        background-color: rgb(29, 31, 27);

        z-index: 2000;
        transition: .5s;
        overflow-y: hidden;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    @media screen and (max-width:768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: calc(100vh - 3rem);
        background-color: rgb(29, 31, 27);
    }
`;

const Item = styled.li`
    cursor: pointer;
    color: white;
    position: relative;

    a{
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
    }
    a.active{
        background-color: rgb(209, 28, 28);
    }
    @media screen and (min-width:769px){
        a{
            border-radius: 4px;
            border: 4px solid transparent;
        }
        a.item{
            font-size: 1.2rem;
        }
        /* a.item:hover::after{
            content: "";
            position: absolute;
            width: calc(50% - 4px);
            height: 4px;
            margin-top: -0.36rem;
            border-radius: 50px;
            background-color: rgb(209, 28, 28);
            transition: width 0.4s ease-in;
            left: 2px;
            top: 0;
        }
        a.item:hover::before{
            content: "";
            position: absolute;
            width: calc(50% - 4px);
            height: 4px;
            margin-bottom: -0.36rem;
            border-radius: 50px;
            background-color: rgb(209, 28, 28);
            transition: width 0.2s ease-in;
            left: 2px;
            bottom: 0;
        } */
        a::before{
            content: "";
            position: absolute;
            width: 1%;
            bottom: -4px;
            right: 0;
            height: 4px;
            opacity: 1;
            border-radius: 50px;
            background-color: transparent;
            
        }
        a::after{
            content: "";
            position: absolute;
            width: 1%;
            bottom: -4px;
            left: 50%;
            height: 4px;
            opacity: 1;
            border-radius: 50px;
            background-color: transparent;
            
        }
        a:hover::before{
            content: "";
            position: absolute;
            width: calc(50% - 12px);
            background-color: rgb(209, 28, 28);
            right: 50%;
            transition: width 0.3s ease-in-out ;
        }
        a:hover::after{
            content: "";
            position: absolute;
            width: calc(50% - 8px);
            background-color: rgb(209, 28, 28);
            left: 48%;
            transition: width 0.3s ease-in-out ;
        }
    }
`;

const ButtonTheme = styled.div`
    border: none;
    font-size: 2rem;
    cursor: pointer;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 0.5rem;
    user-select: none;

    @media screen and (min-width:769px){
        font-size: 1.5rem;
        margin-left: 0.5rem;
        top: -2px;
        position: relative;
        right: 0px;
        padding: 0.4rem 0.2rem;
    }
`;

const IconMobile = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 2rem;
    color: white;
    cursor: pointer;

    @media screen and (min-width:769px){
        display: none;
    }
`;

const items = [
    {
        id:1,
        referencia:"home",
        texto:"Inicio",
    },
    {
        id:2,
        referencia:"project",
        texto:"Proyectos",
    },
    ,
    {
        id:3,
        referencia:"skill",
        texto:"Habilidades",
    },
    ,
    {
        id:4,
        referencia:"contact",
        texto:"Contacto",
    }
];

function Nav(){
    const [visible,setVisible] = useState(false);
    const {handleTheme,theme} = useContext(ContextTheme);

    return <Header color={theme}>
        <NavbarContainer className="container">
                <NavbarWrapper click={visible} color={theme}>
                    <Menu>
                        {
                            items.map(item => <Item key={item.id}>
                                <Link 
                                to={item.referencia} 
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={0} 
                                className="item" 
                                activeClass="active"
                                onClick={() => setVisible(false)}>{item.texto}</Link>
                            </Item>)
                        }
                    </Menu>
                </NavbarWrapper>
                
                <ButtonTheme onClick={handleTheme}>☀️</ButtonTheme>

                <IconMobile  onClick={()=> setVisible(!visible)}>
                        {visible ? <AiOutlineClose/> : <AiOutlineMenu/>}
                </IconMobile>
                
        </NavbarContainer>
    </Header> 
    
    
}

export default Nav;