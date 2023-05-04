import { useEffect , useState , useRef } from "react";
import Loader from "../../../components/Loader";
import BotonTop from "../../../components/BotonTop";
import "./RickAndMorty.css";
import CardCharacter from "../CardCharacter/CardCharacter";
import "../CardCharacter/CardCharacter.css";

function RickAndMorty(){

    let [character,setCharacter] = useState([]);
    let [busqueda,setBusqueda] = useState("");
    let [pagina,setPagina] = useState(1);

    /*---------------------------- CARGAR POR PRIMERA VEZ LOS PERSONAJES ------------------------- */
    useEffect(()=> { 
        let ruta = `https://rickandmortyapi.com/api/character/?page=${pagina}`;

        fetch(ruta).then((res) => 
            res.json())
        .then((data) => {
            data.results.map((personaje) => setCharacter((e) => [...e,personaje]))
        }) 
    }, [pagina]);

    /*------------------------------------CARGAR CON SCROLL--------------------------------------- */
    const ScrollMove = () => {
        const {scrollTop,clientHeight,scrollHeight} = document.documentElement;

        if(scrollTop + clientHeight >= scrollHeight - 16){
            setPagina((e) => e + 1);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",ScrollMove);

        return () =>{
            window.removeEventListener("scroll",ScrollMove);
        } 

    },[]);

    /*------------------------------------FILTRADO DE PERSONAJES-----------------------------------*/

    let results = [];

    (!busqueda)? results = character : results = character.filter(personaje => personaje.name.toLowerCase().includes(busqueda.toLowerCase()));

    /*---------------------------------- BUSQUEDA Y SCROLL TOP --------------------------------------*/
    const HandleTop = (e) => {
        setBusqueda(e.target.value);
        window.scrollTo(0,0);
    }
    return <div>
            <div className="container-app-morty" id="infiniteScroll">
                    <header className="header-morty" >
                        <h1 className="title-app-morty">Rick and Morty</h1>
                        
                        <input 
                            type="text" 
                            value={busqueda} 
                            onChange={HandleTop}
                            placeholder="Buscar personaje" 
                            maxLength="50"
                            className="input-busqueda"
                            />
                    </header> 
                    <main className="main-morty">
                            {(results.length > 0) && results.map(personaje =>
                            <CardCharacter 
                                key={personaje.id}
                                image={personaje.image}
                                name={personaje.name}
                                status={personaje.status}
                                specie={personaje.species}
                            />)}
                    </main>
                    {( results.length === 0 )&& <div className="container-loader">
                            <Loader/>
                    </div>}
                    <BotonTop/>
            </div>
    </div> 
}
export default RickAndMorty;