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
`;

const NavbarWrapper = styled.div`
    @media screen and (max-width:768px){
        position: fixed;
        width: 100%;
        /* height: 100%; */
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
    margin-left: 0.5rem;
    cursor: pointer;
    padding-bottom: 2px;
    transition: padding-bottom 0.3s ease;
    color: white;

    a{
        padding: 0.25rem 0.5rem;
    }
    a.active{
        border-bottom: 4px solid rgb(209, 28, 28);
        border-top: 4px solid rgb(209, 28, 28);
        background-color: rgb(209, 28, 28);
    }
    @media screen and (min-width:769px){
        a.item{
            font-size: 1.2rem;
            margin-left: 1rem;
        }
        a.item:hover{
            border-bottom: 4px solid rgb(209, 28, 28);
            border-top: 4px solid rgb(209, 28, 28);

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

    @media screen and (min-width:769px){
        margin-right: 3rem;
        font-size: 1.5rem;
        margin-left: 0.5rem;
        top: -2px;
        position: relative;
        right: 0px;
    }
`;

const IconMobile = styled.div`
    width: 3rem;
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
    const {handleTheme} = useContext(ContextTheme);

    return <Header>
        <NavbarContainer className="container">
                <NavbarWrapper click={visible}>
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