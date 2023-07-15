import styled from "styled-components";

const SectionTwo = styled.section`
    display: flex;
    gap: 3rem;  
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: relative;
    z-index:1;
    

    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem; 
    }
    @media screen and (min-width:769px) {
        margin-left:1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width: 1025px) {
        display: flex;
        padding-top: 4rem;
        padding-bottom: 4rem;
        height: calc(100vh - 4rem);
        margin:0 auto;
    }
`;
const ContainerManage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    h2{
        color: var(--dark_blue);
        font-weight: 700;
        font-size: 1.5rem;
    }
    p{
        color: var(--dark_grayish_blue);
        line-height: 1.5rem;
    }
    @media screen and (max-width:768px) {
        h2{
            text-align: center;
        }
        p{
            text-align: center;
        }
    }
`;
const ConstainerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 2rem;
    width: 100%;
    text-align: left;

    article{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        text-align: left;
    }

    h3{
        display: flex;
        font-size: 1rem;
        color: var(--dark_blue);
        align-items: center;
        border-radius: 25px 0px 0px 25px;
        gap: 0.8rem;
        background-color: var(--very_pale_red);
    }
    span{
        border-radius: 16px;
        overflow: hidden;
        background-color: var(--bright_red);
        color: white;
        width: 60px;
        height: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        color: var(--dark_grayish_blue);
    }
`;
function SectionAbout(){
    return <SectionTwo className="container">
                <ContainerManage>
                    <h2>What´s different about Manage?</h2>
                    <p >Manage provides all the functionality your team needs without complexity. Our software is tailor-made for modern digital product teams</p>
                </ContainerManage>

                <ConstainerList>
                    <article>
                        <h3><span>01</span> Track company-wide progress</h3>
                        <p>See how your day-to-day tasks fit into the wider vision.Go from tracking progress at the milestone level all the way done to the smallest of details Never lose sight of the bigger picture again.</p>
                    </article>
                    <article>
                        <h3><span>02</span> Advanced built-in reports</h3>
                        <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key  stakeholders informed.</p>
                    </article>
                    <article>
                        <h3><span>03</span> Everything you need in one place</h3>
                        <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents.Manage offers an all-in-one team productivity solution</p>
                    </article>
                </ConstainerList>
            </SectionTwo>
}
export default SectionAbout;