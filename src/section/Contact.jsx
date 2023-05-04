import {useForm} from "react-hook-form";
import Loader from "../components/Loader.jsx";
import { useState } from "react";
import { useContext } from "react";
import { ContextTheme } from "../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
    min-height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color === "dark"?"rgb(29, 31, 27)":"white"};

    @media screen and (min-width:768px) {
        min-height: 100vh;
        padding-top: 3.5rem;
    }
`;

const ContainerForm = styled.div`
    border-radius: 8px;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${props => (props.color === "dark") ? "white":"brown" };
`;

const Form = styled.form`
    margin-top: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    @media screen and (min-width:768px) {
        width: 560px;
    }

    input , textarea{
        width: 100%;
        padding: 1rem;
        margin-bottom: 0.5rem;
        border: none;
        border-radius: 6px;
        background-color: ${props => props.color === "dark"?"white":"rgb(29, 31, 27)"};
    }
    input[type="submit"]{
        display: block;
        border: none;
        background-color: brown;
        color: white;
        padding: 0.8rem;
        width: 140px;
        border-radius: 8px;
        font-size: 1.1rem;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        transition: all 0.2s ease-in;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        margin-top: -0.5rem;
    }
    input[type="submit"]:hover{
        background-color: rgb(206, 30, 30);
    }
`;
const Warning = styled.p`
    color: #f44336;
    margin-left: 0.25rem;
`;

function Contact(){
    
    useEffect(()=>{
        const sr = ScrollReveal({
            origin:"left",
            duration:2000,
            delay:0,
            reset:true
        });
        sr.reveal(".title",{distance:"100px",duration:1500});
        sr.reveal(".nombre",{distance:"120px",duration:2000});
        sr.reveal(".email",{distance:"240px",duration:2000});
        sr.reveal(".comentario",{distance:"260px",duration:2000});
        sr.reveal(".boton",{distance:"300px",duration:2000});
    },[]);


    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const [loading,setLoading] = useState(false);
    const {theme} = useContext(ContextTheme);

    const getData = (data) =>{
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

    return <Section id="contact" color={theme}>
        <ContainerForm className="container">
            <Title className="title" color={theme}>Contacto</Title>
            <Form onSubmit={handleSubmit(getData)} color={theme}>
                {errors.nombre?.type === "required" && <Warning>nombre obligatorio</Warning>}
                <input
                type="text" 
                placeholder="Nombre"
                name="nombre" 
                className="nombre"
                autoComplete="off"
                {...register('nombre',{
                    required:true
                })}/>
                

                {errors.email?.type === "required" && <Warning>Email obligatorio</Warning>}
                {errors.email?.type === "pattern" && <Warning>El email es incorrecto</Warning>}
                <input
                type="text"
                name="email" 
                placeholder="ejemplo@gmail.com" 
                className="email"
                autoComplete="off"
                {...register('email',{
                    required:true,
                    pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
                })}/>
                
                {errors.comentario?.type === "maxLength" && <Warning>maximo 255 caracteres</Warning>}

                <textarea
                cols="30" 
                rows="8"
                name="comentario" 
                placeholder="Escribe tu comentario" 
                className="comentario"
                {...register('comentario',{
                    maxLength:255
                })
                }/>

                <input className="boton" type="submit"/>
            </Form>
        </ContainerForm>
            {   
                (loading) && 
                <div className="container-loding-thema">
                    <Loader/>
                </div>

            }
        
    </Section>
}
export default Contact;