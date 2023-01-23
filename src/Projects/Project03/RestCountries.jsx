import { useState , useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import "./RestCountries.css";   

function RestCountries(){
    const [paises,setPaises] = useState([]);

    useEffect(()=>{
        const url = "https://restcountries.com/v3.1/all";

        const countries = fetch(url);

        countries.then((data)=>data.json())
        .then(res =>{
            res.map(pais =>{
                console.log(pais);
                setPaises((e) =>
                    [...e,
                    <div className="card-pais" key={pais.name.common}>
                        <img className="card-pais-img" src={pais.flags.svg} alt={pais.name.common}/>
                        <div className="card-content">
                            <p className="card-pais-title">Nombre: {pais.name.common}</p>
                            <p className="card-pais-region">Capital: {(pais.capital) ? pais.capital: "No Tiene"}</p>
                            <p className="card-pais-poblacion">Poblacion: {(pais.population)}</p>
                            <p className="card-pais-subregion">Subregion: {(pais.subregion)? pais.subregion:"No tiene"}</p>
                        </div>
                    </div> 
                ])
            })
        });
    },[]);

    return <div>
        <div className="container">
            <div className="container-paises">
                {(paises.length === 0)? <Loader/> : paises}
            </div>
        </div>
    </div>
}
export default RestCountries;