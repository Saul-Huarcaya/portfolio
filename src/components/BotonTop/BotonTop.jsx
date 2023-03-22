import "./BotonTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect , useState } from "react";

function BotonTop(){

    const [btnTop,setBtnTop] = useState(false);

    useEffect(()=>{
        const HandleMouse = () =>{
            let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
            
            (scrollTop > 300) ? setBtnTop(true) : setBtnTop(false);
        }

        window.addEventListener("scroll",HandleMouse);

        return () =>{
            window.removeEventListener("scroll",HandleMouse);
        }
    },[]);

    const HandleTop = () =>{
        window.scrollTo(0,0);
    }


    return <>
        {btnTop && <div className="container-btnTop" onClick={HandleTop}>
            <AiOutlineArrowUp/>
        </div>}
    </>
}
export default BotonTop;