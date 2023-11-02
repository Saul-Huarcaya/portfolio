import styled from "styled-components";
import Picture from "./Picture";
import { useContext } from "react";
import { ContextTierList } from "../../Context/contextTierList";
import { useDrop } from "react-dnd";
import types from "../../actions/actionsTierList";

const ContainerCountries = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: rgb(20, 19, 19);
    border-radius: 16px;
    padding: 1rem;
    flex-wrap: wrap;
    width: 100%;
    min-height: 140px;
    max-width: 1024px;
    gap: 1rem;


    @media screen and (max-width:540px) {
        & img{
            width: 46%;
        }
    }
    @media screen and (min-width:540px) {
        & img{
            width: 40%;
        }
    }

@media screen  and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    
    & img{
        width: 140px;
    }
}
    
`

export function Countries(){
    const {dispatch , imagenes} = useContext(ContextTierList);
    
    const [{isOver}, drop] = useDrop(()=>({
        accept: "image",
        drop: (item) => addImage(item.imagen),
        collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        })
    }));

    const addImage = (imagen) => {
        let idImagen = imagen.id;
        
        dispatch({type: types.ADD_IMG_COUNTRIE,payload: imagen});
        dispatch({type: types.DELETE_IMG_ROW,payload: idImagen});
    }
    return <ContainerCountries ref={drop} className="contenedor-countries">
        {
            imagenes.map(img => <Picture key={img.id} imagen={img} />)
        }
        
    </ContainerCountries>
}


const Title = styled.h1`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: calc(1.5rem + 1vh);
`;

function CabeceraTierList(){
    return (
        <>
            <Title>Tier List Paises de Sudamerica</Title>
            <Countries />
        </>
    )
}
export default CabeceraTierList;