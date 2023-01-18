import { useContext, useEffect } from "react";
import {useForm} from "react-hook-form";
import "./Update.css";
import { ContextCrud } from "../../../Context/ContextCrud";
import types from "../../../actions/actions";

function Update({id,setModal}){

    const {data,dispatch} = useContext(ContextCrud);
    const usuario = data.find((user) => user.id === id);
    const {register,formState:{errors},reset, handleSubmit} = useForm({defaultValues:usuario});

    const DataUpdate = (dataUpdate) =>{
        if(dataUpdate){
            dispatch({type:types.UPDATE,payload:dataUpdate});
            setModal(false);
            reset();
        }
    }

    return <>
        <h2 className="title-form title-actualizar">Actualizar</h2>
        <form onSubmit={handleSubmit(DataUpdate)} className="form-update">
                <div>
                    <input 
                    type="text"
                    autoComplete="true"  
                    placeholder="Nombre" 
                    {...register("nombre",{
                        required:true,
                        maxLength:100
                    })}
                    name="nombre"
                    />

                    {errors.nombre?.type === "required" && <p className="text-error">El dato es obligatorio</p>}
                    {errors.nombre?.type === "maxLength" && <p className="text-error">El nombre es demasiado largo</p>}
                </div>

                <div>
                    <input 
                    type="text" 
                    placeholder="Apellido"
                    autoComplete="true"   
                    {...register("apellido",{
                        required:true,
                        maxLength:100
                    })}
                    name="apellido"
                    />

                    {errors.apellido?.type == "required" && <p className="text-error">El apellido es obligatorio</p>}
                    {errors.apellido?.type === "maxLength" && <p className="text-error">El apellido es demasiado largo</p>}
                </div>

                <div>
                    <input 
                    type="number" 
                    placeholder="Edad"
                    autoComplete="true"  
                    name="edad"
                    {...register("edad",{
                        required:true,
                        min:12,
                        max:85
                    })}
                    />

                    {errors.edad?.type === "required" && <p className="text-error">La edad es obligatorio</p>}
                    {errors.edad?.type === "min" && <p className="text-error">La edad minima 12</p>}
                    {errors.edad?.type === "max" && <p className="text-error">La edad maxima es 85</p> }   
                </div>
                <div>
                    <input type="submit"  value="Guardar" className="form_btn_update"/>
                </div>
            </form>
    </>
}

export default Update;