import NavManage from "./NavManage";
import styled from "styled-components";
import SectionHome from "./SectionHome";
import SectionAbout from "./SectionAbout";
import SectionSimply from "./SectionSimply";
import Footer from "./Footer";
import SectionTestimonials from "./SectionTestimonials";

const ContainerManage = styled.div`
    background-color: white;
    position: relative;
    font-family: 'Be Vietnam Pro', sans-serif;
    
    &::before{
        content: "";
        background-image: url("imagenes-manage/bg-tablet-pattern.svg");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 50%;
        max-width: 700px;
        height: 700px;
        top:-5rem;
        bottom: 40rem;
        right: 0;
        z-index: 0;  
    }

    @media screen and (max-width:768px) {
        &::before{
            content: "";
            height: 400px;
            z-index: 0;
            background-color: transparent;
        }
    }
    
    *{
        /*--- colores principales ---*/
        --bright_red: hsl(12,88%,59%);
        --dark_blue:hsl(228,39%,23%);

        /*--- colores neutrales ---*/
        --dark_grayish_blue: hsl(227,12% ,61%);
        --very_dark_blue: hsl(233 ,12% ,13%);
        --very_pale_red: hsl(13,100%,96%);
        --vary_light_gray: hsl(0.0%,98%);
    }
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

function ManagePage(){
    return <ContainerManage>
        <NavManage/>
        <SectionHome/>
        <SectionAbout/>
        <SectionTestimonials/>
        <SectionSimply/>
        <Footer/>
    </ContainerManage>
}
export default ManagePage;