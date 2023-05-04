import img_author from "../assets/Imagenes/001212518.jpg";
/* import BotonCV from "../components/BotonCv/BotonCv"; */
import CV from "../assets/CV/CV-SAUL-HUARCAYA-QUISPE.pdf";
import { useContext, useEffect } from "react";
import { ContextTheme } from "../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';

const Buton = styled.a`
    outline: none;
    border: none;
    width: 200px;
    font-weight: 800;
    cursor: pointer;
    color: white;
    background-color: brown;
    text-align: center;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    transition: all 0.3s ease-in;
    text-decoration: none;
    display: ${props => props.tipo == "mobile"?"block":"none"};
    
    &:hover{
        background-color: rgb(252, 19, 19);
        color: white;
    }

    @media screen and (max-width: 320px) {
        font-size: 1rem;
        padding: 0.8rem;
    }
    @media screen and (min-width: 321px) {
        padding: 1rem;
    }

    @media screen and (min-width:769px) {
        font-size: 1.25rem;
        margin-left: 0;
        margin-right: 0;
        display: ${props => props.tipo == "desktop"?"block":"none"};
    }
`;

export function BotonCV({text,tipo,href}){
    return <Buton tipo={tipo} href={href} download>
        {text}
    </Buton>
}

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

    @media screen and (min-width:769px) {
        gap: 1.5rem;
    }

    @media screen and (min-width:1024px) {
        padding: 0 2rem 2rem;
        gap: 1rem;
    }
`;

const Title = styled.h1`
    text-align: center;
    line-height: 2rem;
    color: ${ props => props.color === "dark" ? "white":"brown"};
    font-size: 1.8rem;
    
    @media screen and (min-width: 321px) {
        font-size: calc(1.8rem + 1vh);
        line-height: 2.1rem;
    }

    @media screen and (min-width:769px) {
        text-align: left;
        font-size: calc(3rem + 1vh);
        line-height: 4rem;
        font-weight: 600;
    }
    @media screen and (min-width:1024px) {
        font-size: calc(3.6rem + 1vh);
    }
`;

const Description = styled.p`
    text-align: justify;
    font-size: calc(1rem + 1vh);
    color: ${props => props.color === "dark" ? "white":"rgb(29, 31, 27)"};

    @media screen and (min-width:769px) {
        margin-left: auto;
        margin-right: auto;
        max-width: 600px;
        font-size: calc(1.1rem + 1vh);
        line-height: 2.1rem;
        font-weight: 200;
    }
    @media screen and (min-width:1024px) {
        font-size: calc(1.25rem + 1vh);
    }
`;

const ContainerAuthor = styled.div`
    min-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width:1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const ImgAuthor = styled.img`
    margin-bottom: 1rem;
    border: 8px solid rgb(29, 31, 27); 
    background-color: rgb(29, 31, 27);
    max-width: 200px;
    border-radius: 8px;

    @media screen and (min-width: 321px){
        max-width: 260px;
        margin-bottom: 0.5rem;
    }

    @media screen and (min-width:769px) {
        max-width: 300px;
        border-radius: 20px;
    }
    @media screen and (min-width:1024px) {
        width: 100%;
        max-width: 320px;
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

                <Title color={theme} >Hola,Soy Saul Huarcaya</Title>

                <Description color={theme}>Manejo tecnologias de frontend y backend me considero entusiasta y perserverante en lo que Hago.</Description>

                <BotonCV text="Descargar CV" tipo="desktop" href={CV}/>

            </Presentation>

            <ContainerAuthor>
                <ImgAuthor src={img_author} alt="author"/>

                <BotonCV text="Descargar CV" tipo="mobile" href={CV}/>
            </ContainerAuthor>

        </ContainerHome>
    </Section>
}
export default Home;