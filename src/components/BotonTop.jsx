import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect , useState } from "react";
import styled from "styled-components";

const Boton = styled.div`
    background-color: brown;
    color: white;
    width: 3.5rem;
    height: 4rem;
    font-size: 2.2rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 100;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: black;
    }
`;


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
        {btnTop && <Boton onClick={HandleTop}>
            <AiOutlineArrowUp/>
        </Boton>}
    </>
}
export default BotonTop;