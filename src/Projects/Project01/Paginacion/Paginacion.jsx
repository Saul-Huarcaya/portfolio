import "./Paginacion.css";

import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { useState } from "react";

function Paginacion({info,pagina,setPagina,fetchCharacters}){
    
    const [input,setInput] = useState(1);

    const onPrev = () =>{
        setInput(parseInt(input) - 1);
        setPagina(pagina - 1);
        fetchCharacters(info.prev);
    }

    const onNext = () =>{
        setInput(parseInt(input) + 1);
        setPagina(pagina + 1);
        fetchCharacters(info.next);
    }

    const handlechange = (e) =>{
        setInput(e.target.value);
    }

    const handleKeyDowm = (e) =>{
        if(e.keyCode == 13){
            setInput(parseInt(e.target.value));

            if(
                parseInt(e.target.value) <= 0 || parseInt(e.target.value) > 42 ||  
                isNaN(parseInt(e.target.value)) 
            ){
                setPagina(1);
                setInput(1);
            }else{
                fetchCharacters(`https://rickandmortyapi.com/api/character/?page=${input}`);
            }
        }
    }
    
    return(
        <div className="paginacion">
            {info.prev && 
                <button
                    onClick={onPrev} 
                    className="btn-paginacion">
                    <GrCaretPrevious/>
                </button>
            }

            <input
                type="number"
                className="input-pagina"
                onChange={handlechange}
                onKeyDown={handleKeyDowm}
                value={input}
            />

            <span> - {info.pages}</span>
            
            {info.next &&
                <button 
                onClick={onNext} 
                className="btn-paginacion">
                    <GrCaretNext/>
                </button>
            }

        </div>
    )
}
export default Paginacion;