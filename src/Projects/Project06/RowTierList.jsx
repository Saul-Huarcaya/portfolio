import { useContext } from "react";
import { ContextTierList } from "../../Context/contextTierList";
import { AiFillDelete } from "react-icons/ai";
import types from "../../actions/actionsTierList";
import Drop from "./Drop";
import styled from "styled-components";

const ContainerRow = styled.div`
    
    display: flex;
    align-items: center;
    margin-top: 1rem;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 18px;
    gap: 0.5rem;


    & div:nth-child(1){
    background-color: rgb(20, 19, 19);
    border: none;
    resize: none;
    height: 116px;
    width: 120px;
    color: white;
    border-radius: 18px;
    font-size: 0.9rem;
    padding: 0.8rem 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
    & div:nth-child(1):focus{
        text-align: center;
        height: 116px;
        width: 120px;
        align-items: center;
        justify-content: center;
    }
    & div:nth-child(2){
        display: flex;
        gap: 0.5rem;
        padding: 1rem;
        height: 116px;
        width: 100%;
        background-color: rgb(20, 19, 19);
        border-radius: 18px;
        overflow-x: auto;
    }
    button{
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        background-color: transparent;
        outline: none;
        border: none;
        color: white;
    }
    button:hover{
        cursor: pointer;
        color: rgb(20, 19, 19);
        transition: color 0.3s ease ;
    }
`;

export function Row({row}){
    const {dispatch} = useContext(ContextTierList);
    
    const deleteRow = (id) => {
        dispatch({type:types.ADD_IMG_DATA, payload: id});
        dispatch({type:types.DELETE_ROW, payload: id});
    }

    return <ContainerRow>
        
            <div contentEditable suppressContentEditableWarning={true}>
                <label>{row.nombre}</label>
            </div>

            <Drop id={row.id} row={row} key={row.id}/>

            <button onClick={() => deleteRow(row.id)}  className='button-delete'>
                <AiFillDelete />
            </button>

    </ContainerRow>
}

function RowTierList(){
    const {filas} = useContext(ContextTierList)
    return <>
        {
            (filas.length > 0) && filas.map(row => <Row key={row.id} row={row} />)
            
        }
    </>
}

export default RowTierList;