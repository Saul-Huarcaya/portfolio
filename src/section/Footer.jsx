
import styled from "styled-components";


const FooterContainer = styled.footer`
    background-color: black;
    color: white;
`;
const FooterContent = styled.div`
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;
const FooterTitle = styled.h4`
    font-size: calc(1rem + 1vh);
    @media screen and (min-width:768px) {
        font-size: calc(1.8rem + 1vh);
    }
`;
const FooterLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    a{
        font-size: 2rem;
        color:white;
        border-radius: 50%;
        padding: 8px;
        transition: all 0.2s ease-in;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        text-decoration: none;
    }
    a:nth-child(1){
        background-color: #25D366;
    }
    a:hover:nth-child(1){
        background-color: #00772c;
    }

    a:nth-child(2){
        background-color: #252424;
    }
    a:hover:nth-child(2){
        background-color: #141313;
    }

    a:nth-child(3){
        background-color: #0e76a8;
    }
    a:hover:nth-child(3){
        background-color: #005b85;
    }
`;

const FooterCopy = styled.p`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;  
`;
function Footer(){
    
    return <FooterContainer>
        <FooterContent className="container">
            <FooterTitle>Software Developer 😄</FooterTitle>
            {/* <FooterLinks className="top2" >
                <a 
                href="https://wa.me/51940970193" 
                target="_blank">
                    <i className="bx bxl-whatsapp"></i>
                </a>

                <a 
                href="https://github.com/Saul-Huarcaya" 
                target="_blank">
                    <i className='bx bxl-github'></i>
                </a>

                <a 
                href="https://linkedin.com/in/saul-huarcaya-quispe-b1504322b" 
                target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </FooterLinks> */}

            <FooterCopy>Creado por Saul Huarcaya (2023) &#169;</FooterCopy>
        </FooterContent>
    </FooterContainer>
}
export default Footer;