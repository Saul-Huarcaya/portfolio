import styled from "styled-components";

const SectionOne = styled.section`
    display: flex;
    gap: 3rem;
    flex-direction: row-reverse;
    padding-top: 4rem;
    padding-bottom: 4rem;
    z-index: 1;
    

    @media screen and (max-width:768px) {
        gap: 3rem;
        flex-direction: column;
    }
    @media screen and (min-width:769px) {
        margin-left:1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width: 1025px) {
        margin: 0 auto;
        height: 100vh;
    }
`;
const ContainerImg = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 499;

    @media screen and (max-width:768px) {
        justify-content: center;
    }
`;
const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    h1{
        font-size: calc(2.4rem + 1vh);
        color: hsl(228, 39%, 23%);
        font-weight: 700;
        line-height: calc(2.5rem + 1vh);
    }
    p{
        font-size: calc(0.9rem + 1vh);
        color: hsl(227, 12%, 61%);
        font-weight: 400;
        line-height: 1.5rem;
    }
    div button{
        border: none;
        outline: none;
        margin: auto;
        border-radius: 40px;
        width: 100px;
        background-color: var(--bright_red);
        padding: 0.5rem 0.8rem;
        color: white;
        cursor: pointer;
    }
    div button:hover{
        transition: box-shadow 0.3s ease;
        opacity: 0.9;
        box-shadow: 1px 1px 8px 1px black;

    }
    @media screen and (max-width:768px) {
        h1{
            text-align: center;
            font-size: calc(2rem + 1vh);
        }
        p{
            text-align: center;
        }
        div button{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;


function SectionHome(){
    return <SectionOne className="container">
        <ContainerImg>
            <img src="imagenes-manage/illustration-intro.svg" alt="imagen principal de las estadisticas" />
        </ContainerImg>
        <ContainerDescription>
            <h1>Bring ereryone together to build better products.</h1>
            <p>Manage makes it simple for software teams to plan day to -day tasks while keeping the larger team goals in view.</p>
            <div>
                <button>Get Started</button>
            </div>
        </ContainerDescription>
    </SectionOne>
}
export default SectionHome;