import "./Project.css";
import { useEffect  } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useContext } from "react";
import { ContextTheme } from "../../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';

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
]

function Project(){
    useEffect(()=>{
        const sr = ScrollReveal({
            distance:"130px",
            duration:2000,
            reset:true
        });
        sr.reveal(".section-title-01",{origin:"left",delay:100,distance:"100px"});
        sr.reveal(".container-project",{origin:"left",delay:160,distance:"150px"})
    },[])

    const {theme} = useContext(ContextTheme);

    return <section id="project" className={`${theme}`}>
        <div className="container section-project">
            <h2 className="section-title section-title-01">Proyectos</h2>
            <div className="container-project">
                {
                    project.map((el)=> <div className="card-project" key={el.id}>
                        <div className="card-project-content">
                            <h3 className="card-project-title">{el.title}</h3>
                            <p className="card-project-description">{el.description}</p>
                        </div>
                        <div className="container-btn-project">
                            <a href={el.route} className="btn-project" target="_blank">
                                <AiOutlineRight/>
                            </a>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    </section>
}
export default Project;