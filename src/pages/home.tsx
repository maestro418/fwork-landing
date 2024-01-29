import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";

import IntroBanner from "../components/intro-banner";
import HireProcess from "../components/hire-process";
import { StyledButton } from "../components/button";
import CaseCard from "../components/case-card";
import BlogCard from "../components/blog-card";

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

const blog = [
    {
        "banner": "AI Software Development",
        "title": "10 Best AI Apps Of 2024",
        "desc": "Are you on the lookout for the best AI apps of this year? The AI app sector is...",
        "img": "ai.jpg"
    },
    {
        "banner": "Blockchain Development",
        "title": "What is Master Data Management?",
        "desc": "In this article, we will discuss Master Data Management in detail. Master...",
        "img": "what-is-master-data-management.jpg"
    },
    {
        "banner": "FinTech Software Development",
        "title": "What are the Top Fintech Trends in 2024?",
        "desc": "Before I take a look in more detail at ICO legal issues, it is worth noting that...",
        "img": "fintech-trends.jpg"
    },
    {
        "banner": "Healthcare Software Development",
        "title": "How To Build A Healthcare SaaS Platform?",
        "desc": "Interested in building a healthcare SaaS platform? This is a HUGE market that...",
        "img": "healthcare-tech-trend.jpg"
    }
]

const devbtns = ["AI", "BlockChain", "Mobile"];

const Home = () => {

    const [smallScreen, setSmallScreen] = React.useState(false);

    React.useEffect(() => {
        const handleScreen = () => {
            setSmallScreen(window.innerWidth <= 768)
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
                        <div className="col-md-4 col-sm-6 p-0"></div>
                        <div className="col-md-4 col-sm-6 pr-1 pl-1">
                            <div className="">
                                <div className="number">1,200</div>
                                <div className="h3">Expert developers from Europe, Asia, North America .</div>
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
                        <div className="col-md-4 col-sm-6 pr-1 pl-1">
                            <div>
                                <div className="number">$140M+</div>
                                <p >Raised by early-stage startups who worked with us.</p>
                            </div>
                            <div className={`${smallScreen ? "mb-1" : ""} d gap`}>
                                {devbtns.map((i, k) => (
                                    <button key={k}>{i}</button>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6" >
                            <div className="b-content">
                                <p>Hire Expert Developers,</p>
                                <p>Freelancers Are</p>
                                <p>Available Now</p>
                            </div>
                            <p>Building a great product in today’s world requires expert developers,<br />not freelancers. DevTeam.Space is a vetted community where you can hire expert developers for all your software development needs.</p>
                        </div>
                        <div className="col-md-4 col-sm-6" style={{ color: "white", backgroundImage: "linear-gradient(134deg, #667EEA 0%, #764BA2 100%)" }}>
                            <div className="b-content"><p>Get a World-class</p><p>Looking and Working</p><p>Product</p></div>
                            <p>Our expert developers deliver supportable and maintainable code. So any new developers can onboard and continue working on the code immediately.</p>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="b-content"><p>Clear Communication,</p><p>Tasks and Payments</p><p>Management</p></div>
                            <p>Get complimentary support from a dedicated tech account manager and AI-powered agile process with all the tools, notifications, and performance tracking to ensure ongoing success.</p>
                        </div>
                    </div>
                </div>
                <div id="case" className="case-content mb-2">
                    <div className="container">
                        <label className="h1">Witness the magic of our expert developers and designers in action!</label>

                        <div className="row mt-1">
                            {cases.map(i => (
                                <div key={i._id} className="col-md-4" >
                                    <CaseCard title={i.title} tech={i.tech} img={i.img} team={i.team} smallScreen={smallScreen} />
                                </div>
                            ))}
                        </div>
                        <div className="d center gap">
                            <button>Hire Top-notch Developer</button>
                            <button className="d middle">
                                <div className="pr">See More Case Studies</div>
                                <img src="img/icon/right-arrow.svg" width={16} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div id="hiring" className="container">
                    <label className="h1">Developer Hiring Process</label>
                    <div className="mt-1 process-content row mb-2">
                        {process.map((i) => (
                            <div key={i.id} className="col-lg-3 col-md-6">
                                <HireProcess id={i.id} title={i.title} desc={i.desc} />
                            </div>
                        ))}
                    </div>
                </div>

                <div id="services" className="container">
                    <label className="h1">Services for Enterprise, Startups, and Entrepreneurs</label>
                </div>

                <div id="blog" className="container">
                    <div className="h1">Find Work Blog</div>
                    <p className="m-0">Check out our mind-blowing product development tutorials and futuristic technology announcements cooked up by our brilliant software development wizards. Penned by humans, for humans (and maybe a few robots).</p>
                    <div className="row">
                        {blog.map((i, k) => (
                            <div key={k} className="col-lg-3 col-sm-6">
                                <BlogCard banner={i.banner} title={i.title} desc={i.desc} img={i.img} link={i.banner} />
                            </div>
                        ))}
                    </div>
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
        margin-bottom: 2em;
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
        padding-top: 0.75em;
        &:before {
            content: "";
            width: 4px;
            height: 70px;
            position: absolute;
            border-radius: 4px;
            left: 20px;
            top: 22px;
            background-image: linear-gradient(134deg, #FF8F00 39.06%, #FF5827 100%)
        }
        p {
            line-height: 0.7;
             
        }
    }

    .case-content {
        padding: 2em 0;
        display: flex;
        justify-content: center;
        background-image: linear-gradient(134deg, #0f258b 0%, #4b58a2 100%);
        
        label {
            color: white;
        }

        button {
            color: white;
            border: 1px solid white;
            border-radius: 0.3em;
            background: inherit;
            padding: 0.5em 0.7em;
            font-size: 1em;
            cursor: pointer;
        }
    }
    .col-md-3 .col-lg-6 {
        padding-inline: 0 !important;
    }
`


export default Home