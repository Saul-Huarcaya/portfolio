import { useEffect }from "react";
import styled from "styled-components";
import ScrollReveal from 'scrollreveal';

const FooterContainer = styled.footer`
    background-color: black;
    color: white;
`;
const FooterContent = styled.div`
    padding: 1.5rem 0rem;
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
        background-color: #3b5998;
    }
    a:hover:nth-child(1){
        background-color: #0051ff;
    }

    a:nth-child(2){
        background-color: #25D366;
    }
    a:hover:nth-child(2){
        background-color: #00772c;
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
    
    useEffect(()=>{
        const sr = ScrollReveal({
            duration:1500,
            reset:true
        });
        sr.reveal(".top1",{origin:"top",delay:100,distance:"100px"});
        sr.reveal(".top2",{origin:"top",delay:100,distance:"100px"});
        sr.reveal(".top3",{origin:"top",delay:100,distance:"150px"});
    },[]);
    
    return <FooterContainer>
        <FooterContent className="container">
            <FooterTitle className="top1" >Software developer 😄</FooterTitle>
            <FooterLinks className="top2" >
                <a 
                href="https://www.facebook.com/saul.huarcaya.1/" 
                target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>

                <a 
                href="https://wa.me/51940970193" 
                target="_blank">
                    <i className="bx bxl-whatsapp"></i>
                </a>

                <a 
                href="https://linkedin.com/in/saul-huarcaya-quispe-b1504322b" 
                target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </FooterLinks>

            <FooterCopy className="top3" >Creado por Saul Huarcaya (2023) &#169;</FooterCopy>
        </FooterContent>
    </FooterContainer>
}
export default Footer;