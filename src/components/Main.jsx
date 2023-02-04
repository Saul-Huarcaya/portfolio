
import Nav from "./Nav/Nav";
import Home from "../section/Home/Home";
import Project from "../section/Project/Project";
import Skill from "../section/Skill/Skill";
import Contact from "../section/Contact/Contact";
import Footer from "../section/Footer/Footer";
import BotonTop from "./BotonTop/BotonTop";
import { ProviderTheme } from "../Context/ContextTheme";
function Main(){
    return <div>
        <ProviderTheme>
            <Nav/>
            <Home/>
            <Project/>
            <Skill/>
            <Contact/>
            <Footer/>
            <BotonTop/>
        </ProviderTheme>
    </div>
}
export default Main;