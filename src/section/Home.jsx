import img_author from "../assets/Imagenes/perfil.png";
import CV from "../assets/CV/CV-SAUL-HUARCAYA-QUISPE.pdf";
import { useContext, useEffect} from "react";
import { ContextTheme } from "../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';
import { AiOutlineDownload } from "react-icons/ai";


/*------------------------------ BOTON CV------------------------------------*/
const Buton = styled.a`
    font-weight: 800;
    cursor: pointer;
    color: white;
    background-color: rgb(209, 28, 28);
    text-align: center;
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
    transition: background-color 0.3s ease-in;
    text-decoration: none;
    display: ${props => props.tipo == "mobile"?"block":"none"};
    cursor: pointer;
    position:relative;
    overflow: hidden;
    width: 200px;

    &:hover{
        background-color: #111111;
        background-color: ${props => props.color == "dark" ? "black":"#111111"};
    }

    &:before{
        content: " ";
        background-color: ${props => props.color == "dark" ? "black":"#111111"};
        width: 280px;
        height: 200px;
        position: absolute;
        top: -200px;
        left: -40px;
        border-radius: 50%;
        transition: top .3s ease;
    }
    &:hover::before{
        top: -50px;
    }

    @media screen and (max-width: 375px) {
        font-size: 1rem;
        padding: 0.8rem;
    }
    @media screen and (min-width: 321px) {
        padding: 1rem;
    }

    @media screen and (min-width:769px) {
        font-size: 1.1rem;
        padding: 0.8rem 1rem;
        margin-left: 0;
        margin-right: 0;
        display: ${props => props.tipo == "desktop"?"block":"none"};
    }

    button{
        outline: none;
        border: none;
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-size: 1.4rem;
        background-color: transparent;
        color: white;
        align-items: center;
        cursor: pointer;
        position: relative;
        z-index: 400;
    }

    button span:nth-child(2){
        display: flex;
        font-size: 1.6rem;
        border-radius: 8px;
    }
`;

export function BotonCV({text,tipo,href}){

    const {theme} = useContext(ContextTheme);

    return <Buton tipo={tipo} href={href} download color={theme}> 
        <button>
            <span>{text}</span>
            <span>
                <AiOutlineDownload/>
            </span>
        </button>
    </Buton>
}

/*---------------------------- TODA LA VISTA --------------------------------*/
const Section = styled.section`
    min-height: 100vh;
    padding-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${ props => props.color === "dark" ? "rgb(29, 31, 27)":"white"};

    @media screen and (min-width:1024px) {
        padding-top: 4.5rem
    }
`;

const ContainerHome = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width:769px) {
        flex-direction: row;
        padding-left: 1rem;
        padding-right: 1rem;
        gap: 2rem;
    }
    

    @media screen and (min-width:1024px) {
        flex-direction: row;
        justify-content: space-between;
        
    }
`;

const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    @media screen and (min-width:769px) {
        gap: 2rem;
    }

    @media screen and (min-width:1024px) {
        gap: 0.5rem;

    }
`;

const Title = styled.h1`
    text-align: center;
    line-height: 2rem;
    color: ${ props => props.color === "dark" ? "white":"rgb(209, 28, 28)"};
    font-size: calc(1.5rem + 1vh);

    @media screen and (min-width: 375px) {
        font-size: calc(1.8rem + 1vh);
        line-height: 2.1rem;
    }

    @media screen and (min-width:769px) {
        text-align: left;
        font-size: calc(3.6rem + 1vh);
        line-height: calc(3.8rem + 1vh);
        font-weight: 600;
        padding: 0px;
    }
    @media screen and (min-width:1024px) {
        margin-bottom: 1rem;
    }
`;

const Description = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: ${props => props.color === "dark" ? "white":"rgb(29, 31, 27)"};

    @media screen and (max-width:375px) {
        font-size: 1rem;
    }

    @media screen and (min-width:769px) {
        text-align: left;
        max-width: 600px;
        font-size: calc(1rem + 1vh);
        line-height: 2rem;
        font-weight: 400;
    }
    @media screen and (min-width:1024px) {
        margin-bottom: 1rem;
    }
`;

const ContainerAuthor = styled.div`
    min-width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    img{
        margin-bottom: 1rem;
        background-color: rgb(209, 28, 28) ;
        border: 8px solid white;
        max-width: 200px;
        border-radius: 20px;
    }

    /* img:hover{
        transform: scale();
    } */
    @media screen and (min-width: 321px){
        img{
            max-width: 260px;
            margin-bottom: 0.5rem;
        } 
    }

    @media screen and (min-width:769px) {
        display: flex;
        align-items: end;
        min-width: 40%;
        img{
            max-width: 300px;
            border-radius: 20px;
        }
    }

    @media screen and (min-width:1024px) {
        img{
            width: 100%;
            max-width: 320px;
        }
    }

`;

function Home(){

    useEffect(()=>{
        const sr = ScrollReveal({
            origin:"top",
            duration:1500,
            reset:true
        });
        sr.reveal(".top",{origin:"top",delay:100,distance:"300px"});
    },[]);
    
    const {theme} = useContext(ContextTheme);

    return <Section id="home" color={theme}>
        <ContainerHome className="container top">
            <Presentation>

                <Title color={theme}>Saul Huarcaya Quispe</Title>

                <Description color={theme}>Desarrollador de Software, manejo tecnologias frontend y backend , me considero entusiasta y perserverante en lo que hago.</Description>

                <BotonCV text="Descargar cv" tipo="desktop" href={CV}/>

            </Presentation>

            <ContainerAuthor color={theme}>
                <img src={img_author} alt="author"/>

                <BotonCV text="Descargar cv" tipo="mobile" href={CV}/>
            </ContainerAuthor>

        </ContainerHome>
    </Section>
}
export default Home;