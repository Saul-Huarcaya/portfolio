import "./Nav.css";
import { Link } from "react-scroll";
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { ContextTheme } from "../../Context/ContextTheme";

const items = [
    {
        id:1,
        referencia:"home",
        texto:"Inicio",
    },
    {
        id:2,
        referencia:"project",
        texto:"Proyectos",
    },
    ,
    {
        id:3,
        referencia:"skill",
        texto:"Habilidades",
    },
    ,
    {
        id:4,
        referencia:"contact",
        texto:"Contacto",
    }
];

function Nav(){
    const [visible,setVisible] = useState(false);
    const {handleTheme} = useContext(ContextTheme);

    return <header className="header">
            <nav className="container nav">   
                <div className={`nav__menu ${visible ? "menu-visible" : null}`}>
                    <div className="icon-mobile visibilidad" onClick={() => setVisible(!visible)}>
                        <AiOutlineClose/> 
                    </div>
                    <ul className="list__menu">
                        {
                            items.map(item => <li key={item.id} className="list-item">
                                <Link 
                                to={item.referencia} 
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={0} 
                                className="item" 
                                activeClass="active"
                                onClick={() => setVisible(false)}>{item.texto}</Link>
                            </li>)
                        }
                    </ul>
                </div>

                <button className="btn-theme" onClick={handleTheme}>
                ☀️
                </button>
                <div className="icon-mobile visibilidad" onClick={()=> setVisible(!visible)}>
                    <AiOutlineMenu/>
                </div>
            </nav>
    </header> 
    
    
}

export default Nav;