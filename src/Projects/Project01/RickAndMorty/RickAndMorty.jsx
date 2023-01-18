import { useEffect , useState } from "react";
import Loader from "../../../components/Loader/Loader";
import CardCharacter from "../CardCharacter/CardCharacter";
import Paginacion from "../Paginacion/Paginacion";
import "./RickAndMorty.css";

function RickAndMorty(){

    const [character,setCharacter] = useState([]);
    const [info,setInfo] = useState({})
    const [pagina,setPagina] = useState(1);
    const [loader,setLoader] = useState();
    
    const fetchCharacters = (url) =>{
        const peticion = fetch(url);
        setLoader(true)
        peticion.then(data =>data.json())
        .then(res =>{
            setInfo(res.info);
            setLoader(false);
            setCharacter(res.results);
        })
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        fetchCharacters(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
    },[]);
    
    return <>
        <div className="header-morty">
            <h1 className="title-app-morty">Rick and Morty</h1>
        </div>
        <div className='container-morty'>
            <Paginacion
                info={info}
                pagina={pagina}
                setPagina={setPagina}
                fetchCharacters={fetchCharacters}
            />

            {loader && <div className="container-loader">
                <Loader/>
            </div>}
            
            <div className="main-morty">
                {!loader &&<CardCharacter character={character}/>}
            </div>
        </div>
    </>
}
export default RickAndMorty;