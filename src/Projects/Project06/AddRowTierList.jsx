import { useState } from "react";
import types from "../../actions/actionsTierList";
import { useContext } from "react";
import { ContextTierList } from "../../Context/contextTierList";
import styled from "styled-components";

const Form = styled.form`
    gap: 0.5rem;
    max-width: 1024px;
    margin: 1rem auto;
    flex-direction: row;
    display: flex;


    input[type="text"]{
        background-color: rgb(20, 19, 19);
        border-radius: 6px;
        padding: 0.5rem 1rem;
        color: white;
        border: none;
    }
    input[type="submit"]{
    background-color:white;
    border: none;
    color: rgb(20, 19, 19);
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    }
    input[type="submit"]:hover{
        cursor: pointer;
        background-color:rgb(20, 19, 19);
        transition: background-color 0.3s ease , color 0.3s ease;
        border: none;
        color: white;
    }
`

function AddRowTierList(){
    const [nombre,setNombre] = useState("");
    const {dispatch} = useContext(ContextTierList);
    const FormSubmit = (e) =>{
        e.preventDefault();
        let valor = e.target.nombre.value;
        let idAleatorio = crypto.randomUUID();
        if(valor !== ""){
            dispatch({type:types.CREATE_ROW,payload:{id:idAleatorio,nombre:valor,imagenes: []}});
        }
        setNombre("");
    }
    return (<Form onSubmit={FormSubmit}>
        <input 
            type="text" 
            placeholder="Ingresa nombre de la fila" 
            name="nombre" 
            onChange={(e)=> setNombre(e.target.value)} 
            value={nombre} 
            className='input-search'
        />
        <input 
            type="submit" 
            value="Crear" 
            className='input-save'
        />
    </Form>
    )
}

export default AddRowTierList;