import { useState , useEffect, useContext } from "react";
import Loader from "../../components/Loader.jsx";
import CardCountrie from "./CardCountrie.jsx"; 
import styled from "styled-components";
import {ContextTheme, ProviderTheme} from "../../Context/ContextTheme.jsx";
import HeaderTheme from "./HeaderTheme.jsx";
import HeaderControls from "./HeaderControls.jsx";


/*CABEZA DE LA APP*/
const Header = styled.header`
    position: fixed;
    z-index: 400;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

/*CUERPO DE LA APP*/
const ContainerApp = styled.div`
    background-color: ${props => props.color == "dark" ? "rgb(29, 31, 27)":"white"};
    min-height: 100vh;
    width: 100%;
    padding-top: 6.7rem;
    padding-bottom: 1rem;
`;

const MainCountries = styled.main`  
    position: relative;
    width: 100%;
    scroll-behavior: smooth;

    @media screen and (min-width:768px){
        width: calc(100% - 2rem);
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width:1048px){
        width: 100%;
    } 

`;
const ErrorInput = styled.p`
    color: ${props => props.color == "dark" ? "white":"black"};
`;
const ContainerLoader = styled.div`
    position: fixed;
    height: 100vh;
    left: calc(50% - 28px);
`;
const ContainerCountries = styled.div`
    display: grid;
    grid-template-columns: repeat(1,minmax(1,1fr));
    gap: 1rem;

    @media screen and (min-width:480px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
    @media screen and (min-width:768px){
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 1.5rem;
    }
    @media screen and (min-width:1048px){
        grid-template-columns: repeat(4,minmax(0,1fr));
    }
`;

export function Countries(){
    const [paises,setPaises] = useState([]);
    const [url,setUrl] = useState("https://restcountries.com/v3.1/all");
    const [search,setSearch] = useState("");
    const {theme} = useContext(ContextTheme);
    const [loader,setLoader] = useState(false);
    
    useEffect(()=>{
        const Proceso = () =>{
            const countries = fetch(url);
            setLoader(true);
            countries
            .then(
                (data)=>data.json()
            ).then((res)=>{
                setPaises([...res]);
                setLoader(false);
            
            }).catch(error => 
                console.log(error)
            );
        }
        Proceso();
    },[url]);

    let results = [];
    if(!search){
        results = paises;
    }else{
        results = paises.filter((dato) => dato.name.common.toLowerCase().includes(search.toLowerCase()));
    }

    return <ContainerApp color={theme}>
        <div className="container">
            <Header>
                <HeaderTheme/>
                <HeaderControls 
                    setSearch={setSearch} 
                    search={search} 
                    results={results}
                    setUrl={setUrl} 
                    setLoader={setLoader}/>
            </Header>
            
            <MainCountries>
                {(loader)?
                    <ContainerLoader> 
                        <Loader/> 
                    </ContainerLoader>  
                    :
                    <ContainerCountries>
                        {
                            results.map((pais)=> 
                            <CardCountrie key={pais.name.common}
                                nombre={pais.name.common}
                                ruta={pais.flags.svg}
                                capital={pais.capital}
                                poblacion={pais.population}
                                subregion={pais.subregion}
                            />)
                        }
                    </ContainerCountries>
                }

                {(results.length === 0 && search != "") && <ErrorInput color={theme}>No se encuentra: <mark>{search}</mark></ErrorInput>}
            
            </MainCountries>
        </div>
    </ContainerApp>
    
}

export default function AppCountries(){
    return <ProviderTheme>
        <Countries/>
    </ProviderTheme>
}
