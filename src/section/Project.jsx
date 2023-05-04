import { useEffect  } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useContext } from "react";
import { ContextTheme } from "../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';

const Section = styled.section`
    min-height: 100vh;
    padding-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.color === "dark")?"dark":"white"};

    @media screen and (min-width:1024px) {
        padding-top: 4rem;
    }
`;

const ContainerProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
`;

const TitleProject = styled.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${props => (props.color === "dark") ? "white":"brown" };
`;

const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    
    @media screen and (min-width:541px){
        padding: 0rem 1rem;
    }
`;

const CardProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.color === "dark" ? "white":"rgb(29, 31, 27)"};
    color: ${props => props.color === "dark" ?"rgb(29, 31, 27)":"white"};
    padding: 1rem;
    border-radius: 5px;
    width: 32%;
    gap: 0.5rem;
    text-align: justify;

    @media screen and (max-width:540px){
        width: 100%;
    }
    @media screen and (min-width:541px){
        width: 48%;
    }
    @media screen and (min-width:940px){
        width: 32%;
    }
`;

const CardContent = styled.div`
    h3{
        text-align: center;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    p{
        text-align: justify;
    }
`;


const ButtonContainer = styled.div`
    width: 100%;
    flex: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    a{
        background-color: brown;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 50%;
        padding: 0.8rem;
        font-size: 1.5rem;
        transition: all 0.2s ease-in-out;
    }

    a:hover{
        transform: translate(5px,0px);
        background-color: rgb(252, 19, 19);
    }
`;
const project = [
    {  
        id:1,
        title:"CRUD",
        description:"Son operaciones para operar la información (crear , leer , actualizar , eliminar) utilizando la api de usecontext + useReducer + useForm.",
        route:"#/projects/crud"
    },
    {
        id:2,
        title:"Rick and Morty",
        description:"Aplicación para buscar los personajes de Rick and Morty + scroll infinito , utilizando la Api rickandmorty.",
        route:"#/projects/rick-and-morty"        
    },{
        id:3,
        title:"App de Países",
        description:"Aplicación que busca todos los países, mediante nombre del pais o region utiliza la Api RestCountries.",
        route:"#/projects/api-countries"
    },{
        id:4,
        title:"App de Cryptomonedas",
        description:"Aplicación para buscar los mejores precios de las cryptomonedas buscando mediante el nombre además de utilizar la Crypto Api.",
        route:"#/projects/api-cryptomonedas"
    },
    {
        id:5,
        title:"Carrito de Compras",
        description:"Aplicación que simula el proceso para adquirir uno o varios productos tecnológicos.",
        route:"#/projects/ecommerce"
    }
];

function Project(){
    useEffect(()=>{
        const sr = ScrollReveal({
            duration:1500,
            delay:0,
            reset:true,
            origin:"left"
        });
        sr.reveal(".left",{distance:"100px"});
        sr.reveal(".left2",{distance:"100px"})
    },[])
    
    const {theme} = useContext(ContextTheme);

    return <Section id="project" color={theme}>
        <ContainerProject className="container">

            <TitleProject className="left" color={theme}>Proyectos</TitleProject>
            
            <ContainerProjects className="left2">
                {
                    project.map((el)=> <CardProject color={theme} key={el.id}>

                        <CardContent>
                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                        </CardContent>

                        <ButtonContainer>
                            <a href={el.route} target="_blank">
                                <AiOutlineRight/>
                            </a>
                        </ButtonContainer>

                    </CardProject>
                    )
                }
            </ContainerProjects>

        </ContainerProject>
    </Section>
}
export default Project;