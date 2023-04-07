
import Nav from "./Nav/Nav";
import Home from "../section/Home/Home";
import Project from "../section/Project/Project";
import Skill from "../section/Skill/Skill";
import Contacto from "../section/Contacto/Contacto";
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
            <Contacto/>
            <Footer/>
            <BotonTop/>
        </ProviderTheme>
    </div>
}
export default Main;