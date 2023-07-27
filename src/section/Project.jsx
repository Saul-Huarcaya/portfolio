import { useEffect , useContext, useState  } from "react";
/* import { AiOutlineRight } from "react-icons/ai"; */
import { ContextTheme } from "../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';
import { BsFillArrowDownLeftCircleFill , BsFillArrowUpRightCircleFill , BsGithub} from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import Modal from "../components/Modal";


const ContentModal = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    max-width: 400px;
    h2{
        color: rgb(209, 28, 28);
    }
    p{
        text-align: justify;
    }
`;
const ImgModal = styled.div`
    display: flex;
    border-radius: 8px;
    img{
        border-radius: 8px;
        width: 100%;
        height: auto;
    }
`;
const ContainerButtons = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1rem;
        width: 3rem;
    }
    a{
        font-size: 1.3rem;
        padding: 0.4rem;
        display: flex;
        border-radius: 4px;
        color: white;
        background-color: rgb(209, 28, 28);
        transition: background-color 0.3s ease-in-out;
    }
    a:hover{
        background-color: black;
    }

`;
export function ContainerModal({id}){
    const data = project.find((item) => item.id == id );
    return <ContentModal>

                <h2>{data.title}</h2>
                
                <ImgModal>
                    <img src={`img-projects/${data.route_img}`} alt={data.alt_img}/>
                </ImgModal>
                
                <p>{data.description}</p>
                
                <ContainerButtons>
                    <div><a href={data.route_github} target="_blank"><BsGithub/></a></div>
                    <div><a href={data.route} target="_blank"><IoOpenOutline/></a></div>
                </ContainerButtons>

    </ContentModal>  
}



/* ------------------ TODA LA SECCION------------------  */
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

const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    
    @media screen and (min-width:541px){
        padding: 0rem 1rem;
    }
`;

/* ----------------------------- La presentacion de la card --------------------------- */
const CardProject = styled.div`

    display: flex;
    position: relative;
    border-radius: 6px;
    background-color: ${props => props.color === "dark" ? "white":"rgb(29, 31, 27)"};
    color: ${props => props.color === "dark" ?"rgb(29, 31, 27)":"white"};
    border: 6px solid ${props => props.color === "dark" ?"white":"rgb(29, 31, 27)"};
    cursor: pointer;
    
    @media screen and (max-width:375px) {
        height: 200px;
    }
    @media screen and (max-width: 575px) {
        height: 240px;
        width: 100%;
    }
    @media screen and (min-width: 576px) {
        width: 48%;
    }
    @media screen and (min-width:768px){
        height: 220px;
    }
    @media screen and (min-width:940px){
        width: 32%;
    }

`;
const ContainerImg = styled.div`
    display: flex;
    background-color: black;
    width: 100%;
    height: auto;
    border-radius: 6px;
    overflow: hidden;
    
    img{
        width: 100%;
        height: auto;
        border-radius: 6px;
        min-height: 100px;
    }

`;
const ContainerLink = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 100;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: ${props => props.color === "dark" ?"rgb(255, 255, 255,0.8)":"rgb(29, 31, 27,0.9)"};
        color: ${props => props.color === "dark" ?"rgb(209, 28, 28)":"rgb(255, 255, 255)"}; 
        font-size: 4rem;
    }
    &:hover{
        opacity: 1;
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
        title:"Room Homepage",
        description:"Desafio Room Homepage propuesto por la web FrontendMentor nivel intermedio se realizo con React.",
        route:"#/projects/room-page",
        route_github:"https://github.com/Saul-Huarcaya/room-homepage",
        route_img:"room-homepage.jpg",
        alt_img:"Imagen de una room homepage reto de una sola pagina Frontend Mentor."
    },
    {
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
        title:"Carrito de Compras",
        description:"Aplicación que simula el proceso para adquirir uno o varios productos tecnológicos.",
        route:"#/projects/ecommerce",
        route_github:"https://github.com/Saul-Huarcaya/carrtito-compras",
        route_img:"carrito.JPG",
        alt_img:"Carrito de crompras hecho con React"
    },{
        id:5,
        title:"Manage Page",
        description:"Desafio Manage page propuesto por la web FrontendMentor nivel intermedio se realizo con React y la libreria swiper.js.",
        route:"#/projects/mana-page",
        route_github:"https://github.com/Saul-Huarcaya/manage-page",
        route_img:"manage-page.jpg",
        alt_img:"Carrito de crompras hecho con React"
    }
];

export default function Project(){
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
    const [ModalProject,setModalProject]= useState(false);
    const [ItemId,setItemId] = useState(1);
    const getId = (id) =>{
        setItemId(id);
        setModalProject(true);
    }

    return <Section id="project" color={theme}>
        <ContainerProject className="container">

            <TitleProject className="left" color={theme}>Proyectos</TitleProject>
            
            <ContainerProjects className="left2">
                {
                    project.map((item) =>
                    <CardProject color={theme}  onClick={()=> getId(item.id)} key={item.id}>
                        <ContainerImg >
                            <img src={`img-projects/${item.route_img}`} alt={item.alt_img} color={theme}/>
                        </ContainerImg >
                            <ContainerLink color={theme}>
                                <div>
                                    <IoAddCircle/>
                                </div>
                            </ContainerLink>
                    </CardProject>)

                }
            </ContainerProjects>

        </ContainerProject>
        {
            ModalProject && <Modal
                Modal={ModalProject}
                setModal={setModalProject}
            >
                <ContainerModal id={ItemId} setModalProject={setModalProject}/>
            </Modal>
        }
    </Section>
}

