import "./Table.css";
import Modal from "../../../components/Modal/Modal";
import Update from "../Update/Update";
import { BsPenFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useContext } from "react";
import { ContextCrud} from "../../../Context/ContextCrud";
import Delete from "../Delete/Delete";

function Table(){

    const {data} = useContext(ContextCrud);
    const [idUpdate,setIdUpdate] = useState();
    const [idDelete,setIdDelete] = useState();
    const [ModalUpdate,setModalUpdate] = useState(false);
    const [ModalDelete,setModalDelete] = useState(false);

    const HandleUpdate = (id) =>{
        setIdUpdate(id);
        setModalUpdate(true);
    }

    const HandleDelete = (id) =>{
        setIdDelete(id);
        setModalDelete(true);
    }

    
    return(
        <div className="container-table">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                    {console.log(data.length)}
                <tbody>
                    {
                        (data.length === 0)?
                            <tr>
                                <td colSpan={4}>Sin datos</td>
                            </tr>
                        
                        :data.map((user)=>
                            <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.edad}</td>
                                <td>
                                    <BsPenFill 
                                        className="btn-crud update"
                                        onClick={
                                            ()=>HandleUpdate(user.id)
                                        }
                                    />
                                    <AiFillDelete 
                                        className="btn-crud delete"
                                        onClick={()=>HandleDelete(user.id)}
                                    />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {ModalUpdate &&
                <Modal 
                    Modal={ModalUpdate} 
                    setModal={setModalUpdate}>
                    <Update 
                    id={idUpdate} 
                    setModal={setModalUpdate}/>
                </Modal>
            }

            {ModalDelete && 
                <Modal
                    Modal={ModalDelete}
                    setModal={setModalDelete}>
                    <Delete 
                    id={idDelete} 
                    setModal={setModalDelete} /> 
                </Modal>
            }
            
        </div>
    )
}

export default Table;