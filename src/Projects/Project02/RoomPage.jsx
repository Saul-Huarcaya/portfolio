import MainRoom from "./MainRoom";
import NavRoom from "./NavRoom";
import styled from "styled-components";

const ContainerRoom = styled.div`
    position: relative;
    background-color: white;
    img{
        min-height:auto;
        border-radius: 0;
    }
    ul{
        list-style:none;
    }
    a{
        text-decoration: none;
    }
`;

function RoomPage(){
    return<ContainerRoom>
        <NavRoom/>
        <MainRoom/>
    </ContainerRoom>
    
}
export default RoomPage;