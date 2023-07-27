import { useContext, useEffect, useState } from "react";
import { ContextTheme, ProviderTheme } from "../../Context/ContextTheme";
import HeaderTheme from "./HeaderTheme";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../components/Loader.jsx";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Header = styled.header`
    position: fixed;
    z-index: 400;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Contenedor = styled.div`
    padding-top: 4rem;
    min-height: 100vh;
    background-color: ${props => props.color == "dark" ? "rgb(29, 31, 27)":"white"};
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const ContenedorBoton = styled.div`
    width: 100%;
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    button{
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        box-shadow: 0px 0px 8px 4px ${props => props.color == "dark" ? "transparent":"gray"};
        background-color: ${props => props.color == "dark" ? "black":"white"};
        color: ${props => props.color == "dark" ? "white":"black"};
        width: 88px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    button span{
        
        display: flex;
        font-size: 1.2rem;
        font-weight: 800;
    }
    button:hover{
        transition: background-color 0.3s ease-in-out , color 0.3s ease-in-out;
        background-color: ${props => props.color == "dark" ? "white":"black"};
        color: ${props => props.color == "dark" ? "black":"white"};
    }
    @media screen and (min-width:769px) {
        &{
            padding-left: 0;
            padding-right: 0;
        }
    }
    @media screen and (min-width:768px){
        width: calc(100% - 2rem);
        margin-left: auto;
        margin-right: auto;
    }
`;
const ContainerCountrie = styled.section`
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
    width: calc(100% - 2rem);
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
    }
`;
const ContainerImg = styled.div`
    display: flex;
    width: 100%;
    box-shadow: 0px 0px 8px 4px ${props => props.color == "dark" ? "transparent":"gray"};
    max-height: 500px;
    img{
        object-fit: cover;
        display: flex;
        width: 100%;
        height: auto;
    }
`;
const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: transparent;
    gap: 1rem;
    padding: 1rem;
    background-color: ${props => props.color == "dark" ? "black":"white"};
    box-shadow: 0px 0px 8px 4px ${props => props.color == "dark" ? "transparent":"gray"};
    color: ${props => props.color == "dark" ? "white":"black"};
`;
const Description = styled.div`
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    h1{
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }
    p{
        gap:0.5rem;
        display: flex;
        font-size: 1.1rem;
    }
    span{
        font-weight: 800;
    }
`;
export function Content(){
    let {pais} = useParams();
    const [countrie,setCountrie] = useState([]);
    const {theme} = useContext(ContextTheme);
    const navegacion = useNavigate();
    useEffect(()=>{
        const getCountrie = () =>{
            const countries = fetch(`https://restcountries.com/v3.1/name/${pais}`);
            countries
            .then(
                (data)=>data.json()
            ).then((res)=>{
                setCountrie([...res]);
            }).catch(error => 
                console.log(error)
            );
        }
        getCountrie();
    },[]);

    return<>
    <Header>
        <HeaderTheme/>
    </Header>
    <Contenedor color={theme}>
        <ContenedorBoton className="container" color={theme}>
            <button onClick={()=>navegacion(-1)}>
            <span>
                <BsArrowLeft/>
            </span>
            Back
            </button>
        </ContenedorBoton>
        {
            (countrie.length > 0)?
            <ContainerCountrie className="container" >
                <ContainerImg color={theme}>
                    <img src={countrie[0].flags.svg} alt="algo" />
                </ContainerImg>
                <ContainerDescription color={theme} >
                        <Description>
                            <h1>{countrie[0].name.common}</h1>
                            <p><span>Población:</span> {countrie[0].population}</p>
                            <p><span>Región:</span>  {countrie[0].region}</p>
                            <p><span>Subregión:</span>  {countrie[0].subregion}</p>
                            <p><span>Capital:</span>  {countrie[0].capital.join(" ")}</p>
                            <p><span>Tld:</span>{countrie[0].tld}</p>
                            <p><span>Moneda: </span>{Object.keys(countrie[0].currencies)}</p>
                            <p><span>Lenguajes:</span> {Object.values(countrie[0].languages).join(" , ")}</p>
                            {
                                (countrie[0].borders)&&
                                <p><span>Países Fronterizos:</span>{countrie[0].borders.join(" , ")}</p>
                            }
                        </Description>
                </ContainerDescription>
            </ContainerCountrie>
            :<Loader/>
        }
        
    </Contenedor >
    </> 
}

function SectionCountries(){
    return <ProviderTheme>
        <Content/>
    </ProviderTheme>
}

export default SectionCountries;