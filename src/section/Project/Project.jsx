import "./Project.css";
import { AiOutlineRight } from "react-icons/ai";


function Project(){
    return <section id="project">
        <div className="container section-project">
            <h2 className="section-title">Proyectos</h2>
            <div className="container-project">
                <div className="card-project">
                    <h3 className="card-project-title">Rick and Morty</h3>
                    <p className="card-project-description">Pagina para ver todos los personajes que aparecen en la serie animada Rick and morty utilizando su api para obtner los datos de cada personaje.</p>
                    <a href="#/projects/rick-and-morty" className="btn-project" target="_blank">
                        <AiOutlineRight/>
                    </a>
                </div>  
                <div className="card-project">
                    <h3 className="card-project-title">CRUD</h3>
                    <p className="card-project-description">Las operaciones CRUD sirven para manejar la informacion (crear , leer , actulizar , eliminar ) utilizaremos la api de context + useReducer + useForm.</p>
                    <a href="#/projects/crud" className="btn-project" target="_blank">
                        <AiOutlineRight/>
                    </a>
                </div>  
                <div className="card-project">
                    <h3 className="card-project-title">App de Países</h3>
                    <p className="card-project-description">Aplicación que busca todos los países, mediante nombre del pais o region utiliza la Api RestCountries.</p>
                    <a href="#/projects/api-countries" className="btn-project" target="_blank">
                        <AiOutlineRight/>
                    </a>
                </div>  
            </div>
        </div>
    </section>
}
export default Project;