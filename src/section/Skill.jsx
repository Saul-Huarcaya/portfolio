/*------------------------------------- Frontend---------------------------------------*/
import { DiHtml5 , DiCss3 , DiJavascript1 , DiReact, DiBootstrap} from "react-icons/di";
/*------------------------------------- Backend --------------------------------------*/
import { DiNodejsSmall , DiMysql, DiPhp , DiMongodb , DiMsqlServer } from "react-icons/di";
/*--------------------------------------Tools----------------------------------------*/
import { DiGit , DiVisualstudio , DiGithubBadge , DiNpm} from "react-icons/di";

import { useContext } from "react";
import { ContextTheme } from "../Context/ContextTheme";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import styled from "styled-components";


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
const SubContainer = styled.div`
    background-color: ${props => props.color === "dark" ? "white":"rgb(29, 31, 27)"};
    border-radius: 6px;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding: 1rem;
`;

const SubContainerTitle = styled.h3`
    text-align: center;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: calc(1.1rem + 1vh);
    color:rgb(29, 31, 27);
    color: ${props => props.color === "dark" ?"rgb(29, 31, 27)":"white"};
`;

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
    flex: 100%;
    gap: 1rem;
    @media screen and (min-width: 375px) {
        gap: 0.5rem;
    }
`;

const Content  = styled.div`
    color: ${props => props.color};
`;

const CardLogo = styled.div`
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: calc(5.5rem + 1vh);
    }
    @media screen and (max-width: 374px){
        font-size: calc(4rem + 1vh);
    }

    p{
        font-size: calc(1rem + 1vh);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 500;
    }
`;

export function ClusterSkill({grupo,titulo}){

    const {theme} = useContext(ContextTheme);

    return (<SubContainer color={theme}>
            <SubContainerTitle color={theme}>{titulo}</SubContainerTitle>
            <Card>
                {grupo.map((item)=> 
                    <Content key={item.id} color={item.color}>
                        <CardLogo>
                            <div>{item.logo}</div>
                            <p>{item.title}</p>
                        </CardLogo>
                    </Content>
                )}
            </Card>
    </SubContainer>)
}

const Section = styled.section`
    min-height: 100vh;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.color === "dark")?"dark":"white"};
    @media screen and (min-width: 575px){
        padding-top: 5rem;
    }
    @media screen and (min-width: 1024px){
        padding-top: 4.5rem;
    }

`;

const ContainerSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: calc(100% - 2rem);
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${props => (props.color === "dark") ? "white":"brown" };
`;

const ContainerSkills = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;

    @media screen and (min-width: 575px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 975px) {
        grid-template-columns: repeat(3,minmax(0,1fr));
    }
`;

function Skill(){
    
    useEffect(()=>{
        const sr = ScrollReveal({
            duration:1500,
            delay:100,
            reset:true,
            origin:"left"
        });
        sr.reveal(".title-skill",{distance:"100px"});
        sr.reveal(".container-skill",{distance:"150px"});
    },[]);

    const {theme} = useContext(ContextTheme);

    return <Section id="skill" color={theme}>
        <ContainerSkill className="container">
            <Title color={theme} className="title-skill" >Habilidades</Title>

            <ContainerSkills className="container-skill">
                <ClusterSkill grupo={habilidades.frontend} titulo="Frontend"/>
                <ClusterSkill grupo={habilidades.backend} titulo="Backend"/>
                <ClusterSkill grupo={habilidades.tools} titulo="Tools"/>
            </ContainerSkills>
            
        </ContainerSkill>
    </Section>
}

export default Skill;