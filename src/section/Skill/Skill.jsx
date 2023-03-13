import "./Skill.css";
/*------------------------------------- Frontend---------------------------------------*/
import { DiHtml5 , DiCss3 , DiJavascript1 , DiReact, DiBootstrap} from "react-icons/di";

/*------------------------------------- Backend --------------------------------------*/
import { DiNodejsSmall , DiMysql, DiPhp , DiMongodb , DiMsqlServer } from "react-icons/di";

/*--------------------------------------Tools----------------------------------------*/
import { DiGit , DiVisualstudio , DiGithubBadge , DiNpm} from "react-icons/di";

import { useContext } from "react";
import { ContextTheme } from "../../Context/ContextTheme";

const habilidades = {
    frontend: [
        {
            id:1,
            logo:<DiHtml5/>,
            color:"#e34c26",
            title:"HTML"
        },{
            id:2,
            logo:<DiCss3/>,
            color:"#264de4",
            title:"CSS"
        },{
            id:3,
            logo:<DiJavascript1/>,
            color:"#F0DB4F",
            title:"JavaScript"
        },{
            id:4,
            logo:<DiBootstrap/>,
            color:"#563d7c",
            title:"Bootstrap"
        },{
            id:5,
            logo:<DiReact/>,
            color:"#61DBFB",
            title:"React JS"
        } 
    ],
    backend:[
        {
            id:1,
            logo: <DiPhp/>,
            color:"#777BB3",
            title:"PHP"
        },{
            id:2,
            logo:<DiNodejsSmall/>,
            color:"#3c873a",
            title:"Node JS"
        },{   
            id:3,
            logo: <DiMysql/>,
            color:"#00758F",
            title:"Mysql"           
        },{
            id:4,
            logo:<DiMsqlServer/>,
            color:"#FF0000",
            title:"SqlServer"
        },{
            id:5,
            logo:<DiMongodb/>,
            color:"#4DB33D",
            title:"Mongo"
        }
    ],
    tools:[
        {
            id:1,
            logo:<DiVisualstudio/>,
            color:"#6ac1b9",
            title:"VS Code"
        },{
            id:2,
            logo:<DiGit/>,
            color:"#F1502F",
            title:"Git"
        },{
            id:3,
            logo:<DiGithubBadge/>,
            color:"#000000",
            title:"Github"
        },{
            id:4,
            logo:<DiNpm/>,
            color:"#CC3534",
            title:"Npm"
        }
    ]
}


export function Clusterskill({grupo,titulo}){

    const {theme} = useContext(ContextTheme);

    return (<div className={`subcontainer-skill ${theme}`}>
            <h3 className="title-subcontainer">{titulo}</h3>
            <div className="card-subcontainer">
                {grupo.map((item)=> 
                    <div key={item.id} style={{color:item.color}} className="content-subcontainer">
                        <div className="card-logo">
                            <div className="imgagen-logo">{item.logo}</div>
                            <p className="title-logo">{item.title}</p>
                        </div>
                    </div>
                )}
            </div>
    </div>)
}

function Skill(){
    const {theme} = useContext(ContextTheme);

    return <section id="skill" className={`${theme}`}>
        <div className="container section-skill">
            <h2 className="section-title">Habilidades</h2>
            <div className="container-skill">

                <Clusterskill grupo={habilidades.frontend} titulo="Frontend"/>
                <Clusterskill grupo={habilidades.backend} titulo="Backend"/>
                <Clusterskill grupo={habilidades.tools} titulo="Tools"/>

            </div>  
        </div>
    </section>
}

export default Skill;