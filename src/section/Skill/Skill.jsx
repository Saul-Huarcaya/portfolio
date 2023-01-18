import "./Skill.css";
import {DiHtml5} from "react-icons/di";
import {DiCss3} from "react-icons/di";
import {DiJavascript1} from "react-icons/di";
import {DiReact} from "react-icons/di";
import {DiGit} from "react-icons/di";
import {DiPhp} from "react-icons/di";
import {DiMysql} from "react-icons/di";
import {DiNodejsSmall} from "react-icons/di";

const habilidades = [
    {
        id : 1,
        title : "HTML5",
        logo: <DiHtml5/>,
        nivel:"Intermedio",
        color: "#e34c26"
    },
    {
        id : 2,
        title : "CSS",
        logo : <DiCss3/>,
        nivel : "Intermedio",
        color : "#264de4"
    },
    {
        id:3,
        title:"JavaScript",
        logo: <DiJavascript1/>,
        nivel:"Intermedio",
        color: "#F0DB4F"
    },
    {
        id:4,
        title:"React JS",
        logo: <DiReact/>,
        nivel:"Intermedio",
        color: "#61DBFB"
    },
    {
        id:5,
        title:"PHP",
        logo: <DiPhp/>,
        nivel:"Intermedio",
        color: "#777BB3"
    },
    {
        id:6,
        title:"MYSQL",
        logo: <DiMysql/>,
        nivel:"Intermedio",
        color: "#00758F"
    },
    {
        id:7,
        title:"GIT",
        logo: <DiGit/>,
        nivel:"Basico",
        color: "#F1502F"
    },{
        id:8,
        title:"Node Js",
        logo: <DiNodejsSmall/>,
        nivel: "Basico",
        color:"#3c873a"
    }
];



function Skill(){
    return <section id="skill">
        <div className="container section-skill">
            <h2 className="section-title">Habilidades</h2>
            <div className="container-skill">
                {
                    habilidades.map(skill =>
                        <div className="card-skill" key={skill.id} style={{borderBottom: `8px solid ${skill.color}`}}>
                            <div className="card_content">
                                <div className="card_logo" style={{color: skill.color}}>{skill.logo}</div>
                                <div className="card_description">
                                    <h3 
                                    className="title-skill" 
                                    style={{color: skill.color}}
                                    >{skill.title}</h3>
                                    
                                    <p className="description_nivel">
                                        <span 
                                        className="text_nivel" 
                                        style={{color: skill.color}}>Nivel: </span>{skill.nivel}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>  
        </div>
    </section>
}

export default Skill;