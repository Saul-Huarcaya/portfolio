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
                    <a href="#gi/portfolio/projects/rick-and-morty" className="btn-project" target="_blank">
                        <AiOutlineRight/>
                    </a>
                </div>  
                <div className="card-project">
                    <h3 className="card-project-title">CRUD</h3>
                    <p className="card-project-description">Las operaciones CRUD sirven para manejar la informacion (crear , leer , actulizar , eliminar ) utilizaremos la api de context + useReducer + useForm.</p>
                    <a href="#/portfolio/projects/crud" className="btn-project" target="_blank">
                        <AiOutlineRight/>
                    </a>
                </div>  
                <div className="card-project">
                    <h3 className="card-project-title">Pagina Responsiva con Boostrap</h3>
                    <p className="card-project-description">Pagina que se adapta a los diferentes tipos de pantallas como mobiles, pc , tablet etc.Utilizando el framework de Boostrap</p>
                    <a href="#" className="btn-project">
                        <AiOutlineRight/>
                    </a>
                </div>  
            </div>
        </div>
    </section>
}
export default Project;