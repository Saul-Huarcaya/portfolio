import { useContext } from "react";
import { ContextCrud } from "../../../Context/ContextCrud";
import "./Delete.css";
import types from "../../../actions/actions";

function Delete({setModal,id}){

    const {data,dispatch} = useContext(ContextCrud);
    
    const usuario = data.find((usuario) => usuario.id == id);

    const handleEliminar = () =>{
        dispatch({type:types.DELETE,payload:usuario.id});
        setModal(false);
    }

    return <div className="aviso-delete">
            <p className="text-delete">
                ¿Estas seguro de eliminar al usuario
                <span> {usuario.nombre} {usuario.apellido}</span>
                ?    
            </p>
            <div className="container-button-delete">
                <button className="btn-delete yes" onClick={    handleEliminar} >Si</button>
                <button className="btn-delete no" onClick={()=>setModal(false)}>No</button>
            </div>
    </div>
}
export default Delete;