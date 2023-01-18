import "./Contact.css";
import {useForm} from "react-hook-form";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

function Contact(){

    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [loading,setLoading] = useState(false);

    const obtenerValores = (data) =>{
        if(data){
            setLoading(true);
            fetch("https://formsubmit.co/ajax/shuarcaya99@gmail.com",{
                method:'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({...data})
            })
            .then((res)=>{
                if(res.ok){
                    res.json()
                }else{
                    new Promise.reject(res)
                }
            }).then(salida=>{
                setLoading(false);
                setTimeout(()=>{
                    reset();
                },1000)
            })
        }
    }

    return <section id="contact" className="container">
        <div className="form-container">
            <h2 className="section-title">Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit(obtenerValores)}>
                {errors.nombre?.type === "required" && <p className="aviso">nombre obligatorio</p>}
                <input
                type="text" 
                placeholder="Nombre"
                name="nombre" 
                className="contact_input"
                {...register('nombre',{
                    required:true
                })}/>
                

                {errors.email?.type === "required" && <p className="aviso">email obligatorio</p>}
                {errors.email?.type === "pattern" && <p className="aviso">El email es incorrecto</p>}
                <input
                type="text"
                name="email" 
                placeholder="ejemplo@gmail.com" 
                className="contact_input"
                {...register('email',{
                    required:true,
                    pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
                })}/>
                
                {errors.comentario?.type === "maxLength" && <p className="aviso">maximo 255 caracteres</p>}

                <textarea
                cols="30" 
                rows="8"
                name="comentario" 
                placeholder="Escribe tu comentario" 
                className="contact_input"
                {...register('comentario',{
                    maxLength:255
                })
                }/>

                <input type="submit" className="contact_btn"/>
            </form>
        </div>
        {(loading) && <Loader/>}
    </section>
}
export default Contact;