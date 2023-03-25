import "./Contact.css";
import {useForm} from "react-hook-form";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { useContext } from "react";
import { ContextTheme } from "../../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

function Contact(){
    
    useEffect(()=>{
        const sr = ScrollReveal({
            origin:"left",
            duration:2000,
            delay:0,
            reset:true
        });
        sr.reveal(".section-title-03",{distance:"100px",duration:1500});
        sr.reveal(".contact_input.nombre",{distance:"120px",duration:2000});
        sr.reveal(".contact_input.email",{distance:"240px",duration:2000});
        sr.reveal(".contact_input.comentario",{distance:"260px",duration:2000});
        sr.reveal(".contact_btn",{distance:"300px",duration:2000});
    },[]);


    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [loading,setLoading] = useState(false);
    const {theme} = useContext(ContextTheme);

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

    return <section id="contact" className={`${theme}`}>
        <div className="form-container container">
            <h2 className="section-title section-title-03">Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit(obtenerValores)}>
                {errors.nombre?.type === "required" && <p className="aviso">nombre obligatorio</p>}
                <input
                type="text" 
                placeholder="Nombre"
                name="nombre" 
                className="contact_input nombre"
                autoComplete="off"
                {...register('nombre',{
                    required:true
                })}/>
                

                {errors.email?.type === "required" && <p className="aviso">Email obligatorio</p>}
                {errors.email?.type === "pattern" && <p className="aviso">El email es incorrecto</p>}
                <input
                type="text"
                name="email" 
                placeholder="ejemplo@gmail.com" 
                className="contact_input email"
                autoComplete="off"
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
                className="contact_input comentario"
                {...register('comentario',{
                    maxLength:255
                })
                }/>

                <input type="submit" className="contact_btn"/>
            </form>
        </div>
            {   
                (loading) && 
                <div className="container-loding-thema">
                    <Loader/>
                </div>

            }
        
    </section>
}
export default Contact;