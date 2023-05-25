import { useEffect , useContext, useState  } from "react";
/* import { AiOutlineRight } from "react-icons/ai"; */
import { ContextTheme } from "../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';
import { BsFillArrowDownLeftCircleFill , BsFillArrowUpRightCircleFill , BsGithub} from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";

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
    border-radius: 4px;
    gap: 1rem;
    text-align: justify;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    border: 6px solid ${props => props.color === "dark" ?"white":"rgb(29, 31, 27)"};

    @media screen and (max-width:540px){
        width: 100%;
        height: 260px;
    }
    @media screen and (min-width:541px){
        width: 48%;
        height: 260px;
    }
    @media screen and (min-width:768px){
        height: 220px;
    }
    @media screen and (min-width:940px){
        width: 32%;
    }
    /* img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    } */
`;

const CardImg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    flex: 1;
    img{
        width: 100%;
        height: 100%;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }

    button{
        position: absolute;
        border-top-left-radius: 6px;
        border-bottom-right-radius: 2px;
        overflow: hidden;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        outline: none;
        border: none;
        right: 0rem;
        bottom: 0rem;
        cursor: pointer;
        font-size: 1.8rem;
        transition: color 0.3s ease-in, background-color 0.3s ease-in-out;
        color: white;
        background-color: rgb(252, 19, 19);
    }
    button:hover{
        background-color: black;
        color: white;
    }
    
`;

const CardContent = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    padding: 1rem 1rem 0rem 1rem;
    position: absolute;
    z-index: 80;
    overflow: hidden;
    bottom: ${props => props.visible ? "0%" : "100%"} ;
    left: ${props => props.visible ? "0" : "100%"};
    transition: bottom 0.3s ease-in , left 0.3s ease-in;
    background-color: ${props => props.color === "dark" ?"white":"rgb(29, 31, 27)"};
    height: inherit;
    width: 100%;
    h3{
        text-align: center;
        font-size: calc(1rem + 1vh);
        font-weight: 600;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(252, 19, 19);
        color: ${props => props.color === "dark" ?"rgb(252, 19, 19)":"white"};
    }
    p{
        text-align: justify;
    }

    button{
        border-top-left-radius: 8px;
        color:white;
        position: absolute;
        width: 3rem;
        height: 3rem;
        outline: none;
        border: none;
        right: 0;
        bottom: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(252, 19, 19);
        font-size: 1.7rem;
        background-color: rgb(252, 19, 19);
        color: white;
        transition: color 0.3s ease-in, background-color 0.3s ease-in-out;
    }
    button:hover{
        background-color: black;
        color: white;
    }   
`;

const ContainerButtons = styled.div`
    align-self: flex-start;
    display: flex;
    width: 6rem;
    height:3rem;
    div{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    a{
        font-size: 1.3rem;
        background-color: rgb(252, 19, 19);
        padding: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgb(252, 19, 19);
        color: white;
    }
    a:hover{
        background-color:black;
    }
`;
const project = [
    {  
        id:1,
        title:"CRUD",
        description:"Son operaciones para operar la información (crear, leer, actualizar, eliminar) utilizando la api de usecontext + useReducer + useForm.",
        route:"#/projects/crud",
        route_github:"https://github.com/Saul-Huarcaya/crudreact",
        route_img:"crud.JPG",
        alt_img:"Imagen de un crud realizado con react"
    },
    {
        id:2,
        title:"Rick and Morty",
        description:"Aplicación para buscar los personajes de Rick and Morty + scroll infinito , utilizando la Api rickandmorty.",
        route:"#/projects/rick-and-morty",
        route_github:"https://github.com/Saul-Huarcaya/app-countries",
        route_img:"rick.JPG",
        alt_img:"Imagen de un scroll infinito de la serie Rick and Morty"      
    },{
        id:3,
        title:"App de Países",
        description:"Aplicación que busca todos los países, mediante nombre del pais o region utiliza la Api RestCountries.",
        route:"#/projects/api-countries",
        route_github:"https://github.com/Saul-Huarcaya/app-countries",
        route_img:"banderas.JPG",
        alt_img:"Imagen de una aplicación para buscar países."
    },
    {
        id:4,
        title:"Room Homepage",
        description:"Desafio Room Homepage propuesto por la web FrontendMentor nivel intermedio se realizo con React.",
        route:"#/projects/room-page",
        route_github:"https://github.com/Saul-Huarcaya/room-homepage",
        route_img:"room-homepage.jpg",
        alt_img:"Imagen de una room homepage reto de una sola pagina Frontend Mentor."
    },
    {
        id:5,
        title:"Carrito de Compras",
        description:"Aplicación que simula el proceso para adquirir uno o varios productos tecnológicos.",
        route:"#/projects/ecommerce",
        route_github:"https://github.com/Saul-Huarcaya/carrtito-compras",
        route_img:"carrito.JPG",
        alt_img:"Carrito de crompras hecho con React"
    },
];


export function Card({title,description,route,route_github,route_img,alt_img}){
    
    const {theme} = useContext(ContextTheme);
    const [visible,setVisible] = useState(false);
    
    return  <CardProject color={theme}>
                <CardImg>
                    <img src={`img-projects/${route_img}`} alt={alt_img}/>
                    <button onClick={() => setVisible(true)}>
                        <BsFillArrowDownLeftCircleFill/>
                    </button>
                </CardImg>

                <CardContent visible={visible} color={theme}>
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <ContainerButtons>
                        <div><a href={route_github} target="_blank"><BsGithub/></a></div>
                        <div><a href={route} target="_blank"><IoOpenOutline/></a></div>
                    </ContainerButtons>
                    
                    <button onClick={()=> setVisible(false)}>
                        <BsFillArrowUpRightCircleFill/>
                    </button>
                </CardContent>

            </CardProject>
}

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
    color: ${props => (props.color === "dark") ? "white":"rgb(209, 28, 28)" };
`;


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
                    project.map((el)=> <Card 
                        key={el.id}
                        title={el.title}
                        description={el.description}
                        route={el.route}
                        route_github={el.route_github}
                        route_img={el.route_img}
                        alt_img={el.alt_img}
                    />
                    )
                }
            </ContainerProjects>

        </ContainerProject>
    </Section>
}
export default Project;