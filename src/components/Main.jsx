
import Nav from "./Nav/Nav";
import Home from "../section/Home/Home";
import Project from "../section/Project/Project";
import Skill from "../section/Skill/Skill";
import Contact from "../section/Contact/Contact";
import Footer from "../section/Footer/Footer";
function Main(){
    return <div>
        <Nav/>
        <Home/>
        <Project/>
        <Skill/>
        <Contact/>
        <Footer/>
    </div>
}
export default Main;