
import Nav from "./Nav";
import Home from "../section/Home";
import Project from "../section/Project";
import Skill from "../section/Skill";
import Contact from "../section/Contact";
import Footer from "../section/Footer";
import BotonTop from "./BotonTop";
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