import "./Crud.css";
import { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import Table from "../Table.jsx/Table";
import Add from "../Add/Add";
import { ProviderCrud } from "../../../Context/ContextCrud";

function Crud(){

    const [ModalAdd,setModalAdd] = useState(false);
    
    return (
        <ProviderCrud>
            <div className="section">
                <div className="container container-crud">
                    <h1 
                        className="title-crud">
                        CRUD useContext +  useReducer + useForm
                    </h1>

                    <button 
                        className="btn-Add" 
                        onClick={() => setModalAdd(true)}>
                        Agregar
                    </button>

                    <Modal 
                        Modal={ModalAdd} 
                        setModal={setModalAdd}>
                        <Add setModalAdd={setModalAdd}/>
                    </Modal>

                    <Table/>
                </div>
            </div>
        </ProviderCrud>
    )
}
export default Crud;