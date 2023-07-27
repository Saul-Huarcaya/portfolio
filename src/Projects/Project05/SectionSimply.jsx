import styled from "styled-components";

const Simply = styled.section`
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: var(--bright_red);
    background-image: url("imagenes-manage/bg-simplify-section-desktop.svg");
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (max-width:768px) {
        background-image: url("imagenes-manage/bg-simplify-section-mobile.svg");
        background-position: left;
    }
`;

const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    h2{
        width: 100%;
        font-size: calc(2rem + 1vh);
        color: white;
        text-align: left;
        line-height: calc(2rem + 1vh);
    }

    div{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    button{
        border: none;
        outline: none;
        border-radius: 40px;
        width: 100px;
        background-color: white;
        padding: 0.5rem 0.8rem;
        color: var(--bright_red);
        cursor: pointer;
    }

    button:hover{
        transition: box-shadow 0.3s ease;
        opacity: 0.9;
        box-shadow: 1px 1px 8px 1px black;
    }
    
    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
        h2{
            text-align: center;
        }
        div{
            width: 100%;
            justify-content: center;
            align-content: center;
        }
    }
    @media screen and (min-width:769px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width:1025px) {
        margin-left: 0;
        margin-right:0;
        margin-left: auto;
        margin-right: auto;
    }
`;


function SectionSimply(){
    return <Simply>
    <ContainerContent className="container">
        <h2 className="title-simply">Simplify how your team works today.</h2>
        <div>
            <button className="btn-started btn-white">Get Started</button>
        </div>
    </ContainerContent>
</Simply>
}

export default SectionSimply;