import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";

import IntroBanner from "../components/intro-banner";
import HireProcess from "../components/hire-process";

const process = [
    {
        id: 1,
        title: "Tell Us About Your Project or Hiring Needs",
        desc: "Submit a request. Your dedicated tech account manager will then contact you to assess your needs in detail and answer any questions."
    },
    {
        id: 2,
        title: "Hire Top Developers with Relevant Expertise",
        desc: "Top developers with relevant expertise will be assigned to your project. Once approved by you, we will set up the process and get started."
    },
    {
        id: 3,
        title: "Experience World-class Development Process",
        desc: "Get supportable and maintainable code, easily communicate, track developers’ performance and payments, and receive regular updates."
    },
    {
        id: 4,
        title: "Start Small - Scale with Ease",
        desc: "Once satisfied with our exceptional quality and dedication, you can easily hire more expert engineers to scale your team."
    }
]

const bannerContents = {
    title: 'Hire Developers',
    desc: 'DevTeam.Space is a vetted community of expert development teams supported by an AI-powered Agile process. Top companies and startups rely on us to help them to build great products. We can help you too, by enabling you to hire and effortlessly manage expert developers.',
    btnContent: 'Hire Expert Developers'
}
const Home = () => {
    return (
        <Layout>
            <StyledHome>
                <div>
                    <IntroBanner title={bannerContents.title} desc={bannerContents.desc} />
                </div>
                <div className="d center gap">
                    {/* {devContents.map((i, k) => (
                        <DevCard key={k} avatar={i.avatar} name={i.name} uid={i.uid} location={i.location} skill={i.skill} />
                    ))} */}

                </div>
                <div className="container">
                    <label>See What Our Expert Developers and Designers Can Do</label>

                    <label className="h1">Developer Hiring Process</label>
                    <div className="process-content">
                        {process.map((i) => (
                            <HireProcess key={i.id} id={i.id} title={i.title} desc={i.desc} />
                        ))}
                    </div>
                    <label className="h1">Services for Enterprise, Startups, and Entrepreneurs</label>
                </div>
            </StyledHome>
        </Layout>
    )
}

const StyledHome = styled.div`
    
    .process-content {
        display: flex;
        justify-content: center;
        color: var(--text);
        box-shadow: 0 0 20px 0 var(--shadow);
        margin: 2em 0;
        border-radius: 20px;
    }   
    

`


export default Home