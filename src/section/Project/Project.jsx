import "./Project.css";
import { AiOutlineRight } from "react-icons/ai";

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
    }
]

function Project(){
    return <section id="project">
        <div className="container section-project">
            <h2 className="section-title">Proyectos</h2>
            <div className="container-project">
                {
                    project.map((el)=> <div className="card-project" key={el.id}>
                        <h3 className="card-project-title">{el.title}</h3>
                        <p className="card-project-description">{el.description}</p>
                        <a href={el.route} className="btn-project" target="_blank">
                            <AiOutlineRight/>
                        </a>
                    </div>
                    )
                }
            </div>
        </div>
    </section>
}
export default Project;