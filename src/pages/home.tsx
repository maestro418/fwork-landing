import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";

import IntroBanner from "../components/intro-banner";
import HireProcess from "../components/hire-process";
import { StyledButton } from "../components/button";
import CaseCard from "../components/case-card";

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

const cases = [
    {
        "_id": 1,
        "title": "Management Center of Telecommunication Information",
        "tech": "Backend, Communication, DevOps, Java, Software",
        "slug": "management-center-of-telecommunication-information",
        "team": [
            { "gender": "male", "member": "1 Designer, 2 Developers, 1 QA Engeneer" },
            { "gender": "female", "member": "1 Project Manager, 1 Account Manager" }
        ],
        "img": "frame-1000000864-401x263.jpg"
    },
    {
        "_id": 2,
        "title": "Cryptocurrency Exchange",
        "tech": "Blockchain, Ethereum, Fintech, Javascript, React, Smart Contracts,\nSolidity, Trading, Truffle, Web",
        "slug": "cryptocurrency-exchange",
        "team": [
            { "gender": "male", "member": "3 Developers" },
            { "gender": "female", "member": "1 Project Manager, 1 Account Manager" }
        ],
        "img": "gold-bitcoin-sign-symbol-icon-bursting-through-background-1-401x263.jpg"

    },
    {
        "_id": 3,
        "title": "DDKoin",
        "tech": "Blockchain, Ethereum, Fintech, Node.js, Smart Contracts, Solidity,\nTrading, Truffle",
        "team": [
            { "gender": "male", "member": "3 Developers, 1 DevOps Engineer" },
            { "gender": "female", "member": "1 Project Manager" }
        ],
        "img": "frame-1000001363.jpg"
    },
]

const devbtns = ["AI", "BlockChain", "Mobile"];

const Home = () => {

    const [smallScreen, setSmallScreen] = React.useState(false);

    React.useEffect(() => {
        const handleScreen = () => {
            setSmallScreen( window.innerWidth <= 768)
        }

        window.addEventListener("resize", handleScreen);

        return () => window.removeEventListener("resize", handleScreen);
    }, []);

    return (
        <Layout>
            <StyledHome>
                <div>
                    <IntroBanner title={bannerContents.title} desc={bannerContents.desc} />
                </div>
                <div className="container">
                    <div className="world-card row">
                        <div className="col-md-4 p-0"></div>
                        <div className="col-md-4">
                            <div className="">
                                <div className="number">1,200</div>
                                <div>Expert developers from Europe, Asia, North America .</div>
                            </div>
                            <div className="d middle">
                                <div className="number">62</div>
                                <div className="pl">
                                    <p>EXPERT</p>
                                    <p>DEVELOPMENT</p>
                                    <p>TEAMS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <div className="number">$140M+</div>
                                <p>Raised by early-stage startups who worked with us.</p>
                            </div>
                            <div className="d gap">
                                {devbtns.map((i, k) => (
                                    <button key={k}>{i}</button>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <div className="b-content">
                                <p>Hire Expert Developers,</p>
                                <p>Freelancers Are</p>
                                <p>Available Now</p>
                            </div>
                            <p>Building a great product in today’s world requires expert developers,<br />not freelancers. DevTeam.Space is a vetted community where you can hire expert developers for all your software development needs.</p>
                        </div>
                        <div className="col-md-4" style={{ color: "white", backgroundImage: "linear-gradient(134deg, #667EEA 0%, #764BA2 100%)" }}>
                            <div className="b-content"><p>Get a World-class</p><p>Looking and Working</p><p>Product</p></div>
                            <p>Our expert developers deliver supportable and maintainable code. So any new developers can onboard and continue working on the code immediately.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="b-content"><p>Clear Communication,</p><p>Tasks and Payments</p><p>Management</p></div>
                            <p>Get complimentary support from a dedicated tech account manager and AI-powered agile process with all the tools, notifications, and performance tracking to ensure ongoing success.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <label className="h1">See What Our Expert Developers and Designers Can Do</label>
                </div>
                <div className="mt-4 pt-2 pb-2 d center" style={{ backgroundImage: "url(img/header.png)" }}>


                    <div className="container row">
                        {cases.map(i => (
                            <div key={i._id} className="col-md-4 col-6" style={{display: (smallScreen && i._id === 3) ? "none" : ""}}>
                                <CaseCard title={i.title} tech={i.tech} img={i.img} team={i.team} smallScreen={smallScreen} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container">

                    <label className="h1">Developer Hiring Process</label>
                    <div className="process-content row">
                        {process.map((i) => (
                            <div key={i.id} className="col-md-3 col-sm-6">
                                <HireProcess id={i.id} title={i.title} desc={i.desc} />
                            </div>
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
        color: var(--text);
        box-shadow: 0 0 20px 0 var(--shadow);
        margin: 0;

        &>div {
           padding : 0;
        }
    }   
    
    .world-card {
        margin: 2em 0;
        border: 1px solid #FF5827;
        margin-inline: 0;
        &>:first-child {
            background-image: url(img/world.jpg);
            height: 300px;
            background-repeat: no-repeat;
            background-size: cover;
        }  
        &>:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            background-image: linear-gradient(134deg, #FF8F00 39.06%, #FF5827 100%);
            .number {
                font-size: 3.5em;
                font-weight: bold
            }
            &>:last-child {
                &>:last-child {
                    line-height: 0;
                }
            }
        } 
        &>:nth-child(3) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            background-image: linear-gradient(134deg, #667EEA 0%, #764BA2 100%);
            .number {
                font-size: 3.5em;
                font-weight: bold;
            }
            button {
                color: white;
                border: 1px solid white;
                border-radius: 0.3em;
                background-image: linear-gradient(134deg, #667EEA 0%, #764BA2 100%);
                padding: 0.5em 0.7em;
                font-size: .8em;
                cursor: pointer;
            }
        } 
    }

    .b-content {
        font-weight: 700;
        font-size: 1rem;
        line-height: 20px;
        padding-left: 1.5em;
        &:before {
            content: "";
            width: 4px;
            height: 70px;
            position: absolute;
            border-radius: 4px;
            left: 20px;
            top: 10px;
            background-image: linear-gradient(134deg, #FF8F00 39.06%, #FF5827 100%)
        }
        p {
            line-height: 0.7;
             
        }
    }
`


export default Home