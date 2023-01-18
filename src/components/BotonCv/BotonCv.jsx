import "./BotonCV.css";

function BotonCV({text,tipo,href}){
    return <a className={`btn-cv ${tipo}`} href={href} download>
        {text}
    </a>
}
export default BotonCV;