import {useForm} from "react-hook-form";
import Loader from "../components/Loader.jsx";
import { useState } from "react";
import { useContext } from "react";
import { ContextTheme } from "../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

const Section = styled.section`
    min-height: 100vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    padding-top: 3.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color === "dark"?"rgb(29, 31, 27)":"white"};

    @media screen and (min-width:768px) {
        min-height: 100vh;
    }
`;
const Title = styled.h2`
    font-size: 2.2rem;
    letter-spacing: 2px;
    line-height: 2.2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${props => (props.color === "dark") ? "white":"rgb(209, 28, 28)" };
    text-align: center;

`;
const ContainerContact = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width:769px) {
        padding: 1rem;
        gap: 2rem;
        grid-template-columns: 1fr 1fr;
    }
`;
const ContainerForm = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    h3{
        color: white;
        text-align: center;
        font-size: 1.4rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        color: ${props => (props.color === "dark") ? "white":"rgb(209, 28, 28)" };
    }
`;
const Form = styled.form`
    font-family: Arial, Helvetica, sans-serif;
    color: black;

    input , textarea{
        width: 100%;
        padding: 1rem;
        margin-bottom: 1rem;
        border: none;
        border-radius: 6px;
        background-color: ${props => props.color === "dark"?"white":"rgb(29, 31, 27)"};
        color: ${props => props.color === "dark"?"rgb(29, 31, 27)":"white"};
    }
    textarea{
        resize: none;
    }
    input[type="submit"]{
        display: block;
        border: none;
        background-color: rgb(206, 30, 30);
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
        transition:  background-color 0.3s ease-in-out;
    }
    input[type="submit"]:hover{
        background-color: ${props => props.color &&"black"};
    }
`;
const Warning = styled.p`
    color: #f44336;
    margin-left: 0.25rem;
`;
const ContainerRedes = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        color: white;
        text-align: center;
        font-size: 1.4rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: ${props => (props.color === "dark") ? "white":"rgb(209, 28, 28)" };
        
    }
    
`;
const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
`
const CardContact = styled.div`
    width: 250px;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: white;
    justify-content: space-evenly;
    background-color: ${props => (props.color === "dark") ? "white":"rgb(29, 31, 27)" };
    
    div{
        border-top-left-radius:6px;
        border-bottom-left-radius: 6px;
        height: inherit;
        width: 3.5rem;
        height: 3rem;
        font-size: 2.5rem;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin: 0;
        background-color: ${props => (props.color === "dark") ? "white":"rgb(209, 28, 28)" };
        color: ${props => (props.color === "dark") ? "rgb(209, 28, 28)":"white" };
    }
    
    h4{
        color: ${props => (props.color === "dark") ? "black":"white" };
        font-size: 1.2rem;
        font-weight: 800;
        text-align: center;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        text-align: center;
        color: white;
        background-color: ${props => (props.color === "dark") ? "white":"rgb(209, 28, 28)" };
        color: ${props => (props.color === "dark") ? "rgb(209, 28, 28)":"white" };
    }
    a {
        text-decoration: none;
        height: 3rem;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${props => (props.color === "dark") ? "rgb(209, 28, 28)":"white" };
        color: white;
        border-top-right-radius:6px;
        border-bottom-right-radius: 6px;
        background-color: ${props => (props.color === "dark") ? "rgb(209, 28, 28)":"rgb(29, 31, 27)" };
        color: white;
        position: relative;
        z-index: 400;
        overflow: hidden;
        
    }
    a span{
        position: relative;
        z-index: 10000;
        display: flex;
    }
    a::after{
        content:  "";
        width: 3rem;
        height: 3rem;
        left: -3rem;
        position: absolute;
        transition: left 0.3s ease-in-out;
    }
    a:hover::after{
        background-color: black;
        top: 0;
        left: 0;
    }
`;
const Redes = [
    {
        id:"1",
        classIcon:"bx bxl-whatsapp",
        redSocial:"Whatsapp",
        ruta:"https://wa.me/51940970193"
    },{
        id:"2",
        classIcon:"bx bxl-github",
        redSocial:"Github",
        ruta:"https://github.com/Saul-Huarcaya"
    },{
        id:"3",
        classIcon:"bx bxl-linkedin",
        redSocial:"LinkedIn",
        ruta:"https://linkedin.com/in/saul-huarcaya-quispe-b1504322b"

    }
]

function Contact(){
    
    useEffect(()=>{
        const sr = ScrollReveal({
            origin:"left",
            duration:2000,
            delay:0,
            reset:true
        });
        /*title*/
        sr.reveal(".title",{distance:"100px",duration:1500});
        
        /*formulario*/
        sr.reveal(".subtitle",{distance:"100px"})
        sr.reveal(".nombre",{distance:"120px"});
        sr.reveal(".email",{distance:"240px"});
        sr.reveal(".comentario",{distance:"260px"});
        sr.reveal(".boton",{distance:"300px"});
        /*Redes*/
        sr.reveal(".card",{distance:"200px"})

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
            <Title className="title" color={theme}>Contacto</Title>
            <ContainerContact className="container">
                <ContainerForm className="container" color={theme}>
                    <h3 className="subtitle">Enviame un mensaje</h3>
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
                    {   
                        (loading) && 
                        <div className="container-loding-thema">
                            <Loader/>
                        </div>

                    }
                </ContainerForm>

                <ContainerRedes color={theme}>
                    <h3 className="subtitle">Redes Sociales</h3>
                    <ContainerCards>

                        {
                            Redes.map((item) => <CardContact key={item.id} color={theme} className="card">
                                <div>
                                    <i className={item.classIcon}></i>
                                </div>
                                <h4>{item.redSocial}</h4>
                                <a href={item.ruta} target="_blank">
                                    <span>
                                        <FaLongArrowAltRight/>
                                    </span> 
                                </a>
                            </CardContact>)
                        }
                    </ContainerCards>
                </ContainerRedes>
            </ContainerContact>
        </Section>
}
export default Contact;