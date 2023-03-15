import { useEffect , useState } from "react";
import BotonTop from "../../../components/BotonTop/BotonTop";
import Loader from "../../../components/Loader/Loader"; 
import "./RickAndMorty.css";
import CardCharacter from "../CardCharacter/CardCharacter";
import "../CardCharacter/CardCharacter.css";

function RickAndMorty(){

    const [character,setCharacter] = useState([]);
    const [pagina,setPagina] = useState(1);
    const [busqueda,setBusqueda] = useState("");
    
    //llenar el array mediante los datos de la url
    useEffect(() =>{
        const getPersonajes = async () =>{
            let peticion = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
            let res = await peticion.json();
            res.results.map((personaje) => setCharacter((e) => [...e,personaje]));
        }
        getPersonajes();
    },[pagina])
    
    /*funcion que observa el scroll y modifica la pagina*/
    const ScrollMove = () =>{
        const {scrollTop,clientHeight,scrollHeight} = document.documentElement;
        if(scrollTop + clientHeight >= scrollHeight){
            setPagina((e) => e + 1);
        }
    }

    /*Evento del scroll*/
    useEffect(()=>{
        window.addEventListener("scroll",ScrollMove);

        return () =>{
            window.addEventListener("scroll",ScrollMove);
        }
    },[]);

    /*busqueda*/
    const HandleBusqueda = (e) =>{
        setBusqueda(e.target.value);
    }

    /* copia del array de los personajes y el filtrado por nombre*/
/*     let results = [];

    if(!busqueda){
        results = character;
    }else{
        results = character.filter(personaje => personaje.name.toLowerCase().includes(busqueda.toLowerCase()))
    } */
    
    
    return <>
        <div className="header-morty">
            <h1 className="title-app-morty">Rick and Morty</h1>
            
            <input 
                type="text" 
                value={busqueda} 
                onChange={HandleBusqueda} 
                placeholder="Buscar personaje" 
                maxLength="50"
                className="input-busqueda" 
            />

        </div>
        <div className='container-morty'>
            <div className="main-morty">
                {(character.length > 0) && character.map(personaje =><CardCharacter 
                    key={personaje.id}
                    image={personaje.image}
                    name={personaje.name}
                    status={personaje.status}
                    specie={personaje.species}
                />)}
            </div>
            <BotonTop/>
        </div>
{/*         <div className="container-loader">
            <Loader/>
        </div> */}
        
    </>
}
export default RickAndMorty;