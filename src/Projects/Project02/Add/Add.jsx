import "./Add.css";
import {useForm} from "react-hook-form";
import { useContext } from "react";
import { ContextCrud } from "../../../Context/ContextCrud";
import types from "../../../actions/actions";

function Add({setModalAdd}){

    const {register,handleSubmit,reset,formState:{errors}} = useForm();

    const {dispatch} = useContext(ContextCrud);

    const agregarDatos = (data) =>{

        if(data){
            dispatch({
                type:types.ADD,
                payload:{
                    id:Date.now(),
                    nombre:data.nombre,
                    apellido:data.apellido,
                    edad:data.edad
                }
            })
            reset();
            setModalAdd(false);
        }

    }
    return<>
        <h2 className="title-form title-agregar">Agregar</h2>
        <form onSubmit={handleSubmit(agregarDatos)} className="form-add">
            <div>
                <input 
                type="text"  
                placeholder="Nombre"
                autoComplete="true"
                {...register("nombre",{
                    required:true,
                    maxLength:100
                })}/>
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
                })} />
                {errors.apellido?.type == "required" && <p className="text-error">El apellido es obligatorio</p>}
                {errors.apellido?.type === "maxLength" && <p className="text-error">El apellido es demasiado largo</p>}
            </div>

            <div>
                <input 
                type="number" 
                placeholder="Edad"
                autoComplete="true"
                {...register("edad",{
                    required:true,
                    min:12,
                    max:85
                })}/>
                {errors.edad?.type === "required" && <p className="text-error">La edad es obligatorio</p>}
                {errors.edad?.type === "min" && <p className="text-error">La edad minima 12</p>}
                {errors.edad?.type === "max" && <p className="text-error">La edad maxima es 85</p> }
            </div>
            <div>
                <input type="submit"  value="Enviar" className="form_btn_add"/>
            </div>
        </form>
    </> 
}
export default Add;