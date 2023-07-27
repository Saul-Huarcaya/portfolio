import { useContext } from "react";
import styled from "styled-components";
import { ContextTheme } from "../../Context/ContextTheme";
import { useNavigate } from "react-router-dom";
const Card = styled.article`
    background-color: ${props => props.color=="dark" ? "black":"white"};
    color: ${props => props.color == "dark" ? "white":"black"};
    border-radius: 6px;
    box-shadow: 0px 0px 10px 2px ${props => props.color=="dark" ? "transparent":"gray"};
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    overflow: hidden;
    &:hover{
        box-shadow: 0px 0px 14px 2px ${props => props.color=="dark" ? "white":"black"};
    }
`;

const ContainerImg = styled.div`
    width: 100%;
    height: 140px;
    object-fit: cover;
    overflow: hidden;
    img{
        width: 100%;
        object-fit: cover;
        height: 140px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
`;

const CardContent = styled.div`
    padding: 0.5rem 1rem ;
`;

const CardTitle = styled.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: fantasy;
`;

const Row = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const Subtitle = styled.p`
    font-weight: 600;
`;

const Data = styled.p`
    flex-wrap: wrap;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: pre-wrap;
`;

function CardCountrie({nombre,ruta,capital,poblacion,subregion}){
    const {theme} = useContext(ContextTheme);
    const navegacion = useNavigate();
    return  <Card color={theme} onClick={() => navegacion(`/projects/api-countries/${nombre}`) }>
                <ContainerImg>
                    <img src={ruta} alt={nombre}/>
                </ContainerImg>
                <CardContent color={theme}>
                    <CardTitle>{nombre}</CardTitle>
                    
                    <Row>
                        <Subtitle>Capital: </Subtitle> 
                        <Data>{(capital) ? capital.join(" "): "No Tiene"}</Data> 
                    </Row>

                    <Row>
                        <Subtitle>Población: </Subtitle> 
                        <Data>{(poblacion != "0")? poblacion:"-" }</Data> 
                    </Row>
                    
                    <Row>
                        <Subtitle>Subregion: </Subtitle>
                        <Data>{(subregion)? subregion:"No Tiene"}</Data> 
                    </Row>
                </CardContent>
            </Card>
}
export default CardCountrie;