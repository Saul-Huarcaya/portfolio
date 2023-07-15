
import styled from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem; 
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: relative;
    &::after{
        content: "";
        background-image: url("imagenes-manage/bg-tablet-pattern.svg");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        z-index: 0;
        width: 100%;
        bottom: 0rem;
    }
    @media screen and (max-width:375px) {
        &::after{
            height: 200px !important;
            left: -3rem;
        }
    }
    @media screen and (max-width:768px) {
        &::after{
            height: 300px;
            left: -20%;
        }
    }
    @media screen and (min-width:769px) {
        &::after{
            height: calc(600px + 1vh);
            left: -50%;
        }
    }

    @media screen and (min-width:1024px) {
        height: calc(100vh - 1rem);
    }
    
`;

const Content = styled.div`
    cursor: pointer;
    h2{
        font-size: 2rem;
        text-align: center;
        color: var(--dark_blue);
        font-weight: 700;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 1;
    }
    button{
        border: none;
        outline: none;
        border-radius: 40px;
        width: 100px;
        background-color: var(--bright_red);
        padding: 0.5rem 0.8rem;
        color: white;
        cursor: pointer;
        display: block;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }
    button:hover{
        transition: box-shadow 0.3s ease;
        opacity: 0.9;
        box-shadow: 1px 1px 8px 1px black;
    }

    @media screen and (min-width: 280px) {
        width: 280px;
        h2{

            font-size: 1.5rem;
        }
        
    }
    @media screen and (min-width: 640px) {
        width: 640px;
        
    }
    @media screen and (min-width: 768px) {
        width: 768px;
    }
    @media screen and (min-width:769px) {
        margin-left:1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width: 1025px) {
        margin: 0 auto;
        height: calc(100vh - 3rem);
    }
    
`;
const CardPerson = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    z-index: 1;
    img{
        width: 40px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
    }
    h4{
        color: var(--dark_blue);
        margin-bottom: 1rem;
    }
    p{
        font-size: 1rem;
        color: var(--dark_grayish_blue);
    }
`;
function SectionTestimonials(){
    return <Section>
                <Content className="container">
                    <h2>What they´ve said</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={
                        {
                            640: {
                                width: 640,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                                spaceBetween:40,
                            },
                            
                        }
                    }
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                <SwiperSlide>
                    <CardPerson>
                        <div className="container-avatar">
                            <img src="imagenes-manage/avatar-anisha.png" alt="Anisha Li"/>
                        </div>
                        <h4 className="title-avatar">Anisha Li</h4>
                        <p>"Manage has supercharged our team`s workflow.The ability to maintain visibility on larger milestones at all times keeps eveyone motvated"</p>
                    </CardPerson>
                </SwiperSlide>
                <SwiperSlide>
                        <CardPerson>
                            <div className="container-avatar">
                                <img src="imagenes-manage/avatar-ali.png" alt="Anisha Li"/>
                            </div>
                            <h4 className="title-avatar">Ali Bravo</h4>
                            <p>"We Have been able to cancel so many other subcriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused."</p>
                        </CardPerson>
                </SwiperSlide>
                <SwiperSlide>
                    <CardPerson>
                        <div className="container-avatar">
                            <img src="imagenes-manage/avatar-richard.png" alt="Anisha Li"/>
                        </div>
                        <h4 className="title-avatar">Richard Watts</h4>
                        <p>"Manage allows us to provide structure and process.It keeps us organized and focused. I can`t stop recommending them to everyone i talk to!"</p>
                    </CardPerson>
                </SwiperSlide>
                <SwiperSlide>
                    <CardPerson>
                        <div className="container-avatar">
                            <img src="imagenes-manage/avatar-shanai.png" alt="Anisha Li"/>
                        </div>
                        <h4 className="title-avatar">Shanai Gough</h4>
                        <p>"Their software allows us to track, manage collaborate on our projects from anywhere.it keeps the whole team in-sync without being intrusive."</p>
                    </CardPerson>
                </SwiperSlide>
            </Swiper>
            <button className="btn-started">Get Started</button>
        </Content>
    </Section>
}
export default SectionTestimonials;