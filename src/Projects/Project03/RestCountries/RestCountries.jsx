import { useState , useEffect } from "react";
import Loader from "../../../components/Loader/Loader";
import "./RestCountries.css";
import CardCountrie from "../CardCountrie/CardCountrie";   
import BotonTop from "../../../components/BotonTop/BotonTop";

function RestCountries(){
    const [paises,setPaises] = useState([]);
    const [url,setUrl] = useState("https://restcountries.com/v3.1/all");
    const [search,setSearch] = useState("");

    const Search = (e) =>{
        setSearch(e.target.value);
    }

    let results = [];
    if(!search){
        results = paises;
    }else{
        results = paises.filter((dato) => dato.name.common.toLowerCase().includes(search.toLowerCase()))      
    }

    const Filtro = (e) =>{
        if(e.target.value === "all"){
            setUrl("https://restcountries.com/v3.1/all")
        }else{
            setUrl(`https://restcountries.com/v3.1/region/${e.target.value}`)
        }
    }

    const Proceso = () =>{
        const countries = fetch(url);
        countries
        .then(
            (data)=>data.json()
        ).then(
            (res)=>setPaises([...res])
        ).catch(error => 
            console.log(error)
        );
    }
    
    useEffect(()=>{
        setPaises([]);
        Proceso();
    },[url]);

    return <div>
        <div className="container">
            <header className="cabecera-countries">

                <div className="container-title-countries">
                    <h1 className="title-countries">Where in the world?</h1>
                </div>
                
                <div className="controls-countries container">
                    <input value={search} onChange={Search} type="text" placeholder="Buscar País" className="input-search"/>
                    
                    <select name="paises" className="select-countries" onChange={Filtro}>
                        <option value="all">Todos</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </header>
            
            <div className="main-countries">
                {(results.length === 0)? 
                <div className="container-Loader">
                    <Loader/>
                </div>:
                <div className="container-countries">{
                        results.map((pais)=> 
                            <CardCountrie 
                                key={pais.name.common}
                                nombre={pais.name.common}
                                ruta={pais.flags.svg}
                                capital={pais.capital}
                                poblacion={pais.population}
                                subregion={pais.subregion}
                            /> 
                        )
                    }
                </div>
                }
            </div>
            <BotonTop/>
        </div>
    </div>
}
export default RestCountries;