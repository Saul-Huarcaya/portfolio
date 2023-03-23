import "./Home.css";
import img_author from "../../assets/Imagenes/001212518.jpg";
import BotonCV from "../../components/BotonCv/BotonCv";
import CV from "../../assets/CV/CV-SAUL-HUARCAYA-QUISPE.pdf";
import { useContext, useEffect } from "react";
import { ContextTheme } from "../../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';

function Home(){

    useEffect(()=>{
        const sr = ScrollReveal({
            origin:"top",
            distance:"130px",
            duration:2000,
            reset:true
        });
        sr.reveal("#home",{origin:"top",delay:100,distance:"400px"});
    },[]);
    

    const {theme} = useContext(ContextTheme);

    return <section id="home" className={`${theme}`}>
        <div className="container container-home">
            <div className="container-presentation">
                <h1 
                className="text_title"
                >Hola,Soy Saul Huarcaya</h1>

                <p 
                className="text_description">Manejo tecnologias de frontend y backend me considero entusiasta y perserverante en lo que Hago.</p>
                <BotonCV text="Descargar CV" tipo="desktop" href={CV}/>
            </div>
            <div className="container_img_author">
                <img src={img_author} alt="author" className="img_author"/>
                <BotonCV text="Descargar CV" tipo="mobile" href={CV}/>
            </div>
        </div>
    </section>
}
export default Home;