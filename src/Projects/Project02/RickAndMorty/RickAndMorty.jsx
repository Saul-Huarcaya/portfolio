import { useEffect , useState } from "react";
import BotonTop from "../../../components/BotonTop/BotonTop";
import Loader from "../../../components/Loader/Loader"; 
import "./RickAndMorty.css";
import CardCharacter from "../CardCharacter/CardCharacter";
import "../CardCharacter/CardCharacter.css";
import InfiniteScroll from "react-infinite-scroll-component"

function RickAndMorty(){

    let [character,setCharacter] = useState([]);
    let [infoPage,setInfoPage] = useState(null);
    /* let [busqueda,setBusqueda] = useState(""); */
    
    //llenar el array mediante los datos de la url
    const getPersonajes = (url) =>{
        console.log(url);
        let ruta = url == null ? `https://rickandmortyapi.com/api/character/?page=${1}`: url; 

        fetch(ruta)
        .then((res) => 
            res.json())
        .then((data) => {
            setInfoPage(data.info.next);
            data.results.map((personaje) => setCharacter((e) => [...e,personaje]))
        })
    }
    
    useEffect(()=>{
        getPersonajes(infoPage);
    },[])


    /*busqueda*/
    /* const HandleBusqueda = (e) =>{
        setBusqueda(e.target.value);
    } */

    /*copia del array de los personajes y el filtrado por nombre*/
    /* let results = [];

    if(!busqueda){
        results = character;
    }else{
        results = character.filter(personaje => personaje.name.toLowerCase().includes(busqueda.toLowerCase()))
    }  */

    {/* <div className="container-loader">
                    <Loader/>
                </div> */}
    
    
    return <div>
        <div className="header-morty">
            <h1 className="title-app-morty">Rick and Morty</h1>
            
            <input 
                type="text" 
                /* value={busqueda} 
                onChange={HandleBusqueda}  */ 
                placeholder="Buscar personaje" 
                maxLength="50"
                className="input-busqueda" 
            />

        </div> 
        <div className='container-morty' id="infiniteScroll">
            <InfiniteScroll
                dataLength={character.length}
                next={() =>getPersonajes(infoPage)}
                hasMore={true}
                loader={<h4>cargando....</h4> }
                scrollableTarget="infiniteScroll"
            >
                
            <div className="main-morty">
                {character.map(personaje =><CardCharacter 
                    key={personaje.id}
                    image={personaje.image}
                    name={personaje.name}
                    status={personaje.status}
                    specie={personaje.species}
                    />)}
            </div>
            {/* <BotonTop/> */}
            </InfiniteScroll>
        </div>
    </div>
}
export default RickAndMorty;