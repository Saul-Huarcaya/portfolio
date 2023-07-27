import styled from "styled-components";

const FooterContainer = styled.footer`
    padding: 2rem 0rem;
    background-color: var(--very_dark_blue);
`;
const FooterContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    "redes links inbox"
    "redes links copy";

    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
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
const FooterBox = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 1rem;
    grid-area: inbox;

    input{
        outline: none;
        padding: 1rem 0rem 1rem 1rem;
        border-radius: 40px;
        border: none;
        width: 180px;
    }

    button{
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 100px;
        border: none;
        outline: none;
        margin: auto;
        border-radius: 40px;
        background-color: var(--bright_red);
        color: white;
        cursor: pointer;
    }
    button:hover{
        transition: box-shadow 0.3s ease;
        opacity: 0.9;
        box-shadow: 1px 1px 8px 1px black;
    }
    @media screen and (max-width:375px) {
        input{
            width: 150px;
        }
    }
    @media screen and (max-width:768px) {
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
    }
`;
const FooterLinks = styled.div`
    padding: 1rem 0rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-items: center;
    gap: 1rem;
    grid-area: links;
    
    ul{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: white;
    }
    ul li:hover{
        color: var(--bright_red);
        cursor: pointer;
    }
    @media screen and (max-width:768px) {
        gap: 5rem;
    }
`;
const FooterRedes = styled.div`
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    grid-area: redes;
    
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    div:nth-child(1) a{
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:nth-child(1) a:hover{
        color: var(--bright_red);
        background-color: var(--bright_red);
        border-radius: 5px;
    }
    a img{
        width: 30px;
        cursor: pointer;
    }
    div:nth-child(2){
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 1rem 0rem;
    }
    div:nth-child(2) div{
        width: 200px;
    }
    @media screen and (max-width:768px) {
        gap: 2rem;
        flex-direction: column;
        align-items: center;
        
        div:nth-child(1){
            gap: 1rem;
        }
    }
`;
const FooterCopy = styled.div`
    text-align: right;
    color: var(--dark_grayish_blue);
    grid-area: copy;
    @media screen and (max-width:768px) {
        text-align: center;
    }
`;
function Footer(){
    return <FooterContainer>
    <FooterContent className="container">
        <FooterBox className="footer-inbox">    
            <input type="text" placeholder="Updates in your inbox..."/>
            <div>
                <button>GO</button>
            </div>
        </FooterBox>
        <FooterLinks>
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
            <ul>
                <li>Careers</li>
                <li>Comunity</li>
                <li>Privaty</li>
            </ul>
        </FooterLinks>
        <FooterRedes>
            <div className="redes">
                <a href="#">
                    <img src="imagenes-manage/icon-facebook.svg" alt="facebook"/>
                </a>
                <a href="#">
                    <img src="imagenes-manage/icon-youtube.svg" alt="youtube"/>
                </a>
                <a href="#">
                    <img src="imagenes-manage/icon-twitter.svg" alt="twitter"/>
                </a>
                <a href="#">
                    <img src="imagenes-manage/icon-pinterest.svg" alt="pinterest"/>
                </a>
                <a href="#">
                    <img src="imagenes-manage/icon-instagram.svg" alt="instagram"/>
                </a>
            </div>
            <div>
                <div>
                    <img src="imagenes-manage/logo2.svg" alt="logo"/>
                </div>
            </div>
        </FooterRedes>
        
        <FooterCopy className="copyright">
            <p>Copyright 2020. All Rights Reserved</p>
        </FooterCopy>
    </FooterContent>
</FooterContainer>
}

export default Footer;