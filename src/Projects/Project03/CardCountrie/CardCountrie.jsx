
import "./CardCountrie.css";
function CardCountrie({nombre,ruta,capital,poblacion,subregion}){
    return <div className="card-pais">
                <img className="card-pais-img" src={ruta} alt={nombre}/>
                <div className="card-content">
                <h2 className="pais-title">{nombre}</h2>
                    
                <div className="row-card-content">
                    <p className="card-subtitle">Capital: </p> 
                    <p className="card-pais-data">{(capital) ? capital.join(" "): "No Tiene"}</p> 
                </div>

                <div className="row-card-content">
                    <p className="card-subtitle">Población: </p> 
                    <p className="card-pais-data">{(poblacion != "0")? poblacion:"-" }</p> 
                </div>
                
                <div className="row-card-content">
                    <p className="card-subtitle">Subregion: </p>
                    <p className="card-pais-data">{(subregion)? subregion:"No Tiene"}</p> 
                </div>
        </div>
    </div>
}
export default CardCountrie;