import { useContext } from "react";
import styled from "styled-components";
import { ContextTheme } from "../../Context/ContextTheme";


const ControlsCountries = styled.div`
    width: 100%;
    background-color: ${props => props.color == "dark" ? "rgb(29, 31, 27)":"white"};
    div{
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input{
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
        width: 140px;
        color: ${props => props.color == "dark" ? "white":"black"};
        background-color: ${props => props.color == "dark" ? "black":"white"};
        box-shadow: 0px 0px 10px 2px ${props => props.color=="dark" ? "transparent":"gray"};
    }
    select{
        padding: 0.25rem 1rem;
        background-color: ${props => props.color == "dark" ? "black":"white"};
        color: ${props => props.color == "dark" ? "white":"black"};
        box-shadow: 0px 0px 10px 2px ${props => props.color=="dark" ? "transparent":"gray"};
    }
    @media screen and (min-width:480px){
        input{

            width: 300px;
        }
    }

    @media screen and (min-width:768px){
        width: calc(100% - 2rem);
        margin-left: auto;
        margin-right: auto;
    }


`;
function HeaderControls({setSearch , search , setUrl , setLoader}){
    const {theme} = useContext(ContextTheme);
    
    const Search = (e) =>{  
        setSearch(e.target.value);
    }

    const Filtro = (e) =>{
        setLoader(true);
        if(e.target.value === "all"){
            setUrl("https://restcountries.com/v3.1/all");
            setLoader(false);
        }else{
            setUrl(`https://restcountries.com/v3.1/region/${e.target.value}`)
            setLoader(false);
        }
    }

    return <ControlsCountries color={theme}>
        <div className="container">
            <input type="text"placeholder="Buscar País" value={search} onChange={Search} maxLength={50} />
            
            <select name="paises" onChange={Filtro} >
                <option value="all">Todos</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </ControlsCountries>
}

export default HeaderControls;