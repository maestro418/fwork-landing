import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";

import IntroBanner from "../components/intro-banner";
import HireProcess from "../components/hire-process";
import { StyledButton } from "../components/button";
import CaseCard from "../components/case-card";
import BlogCard from "../components/blog-card";
import ServiceCard from "../components/service-card";
import AskQuestion from "../components/ask-question";
import { Link } from "react-router-dom";

const process = [
    {
        id: 1,
        title: "Tell Us About Your Project or Hiring Needs",
        desc: "Submit a request. Your dedicated tech account manager will then contact you to assess your needs in detail and answer any questions.",
        img: "1.svg"
    },
    {
        id: 2,
        title: "Hire Top Developers with Relevant Expertise",
        desc: "Top developers with relevant expertise will be assigned to your project. Once approved by you, we will set up the process and get started.",
        img: "2.svg"
    },
    {
        id: 3,
        title: "Experience World-class Development Process",
        desc: "Get supportable and maintainable code, easily communicate, track developers’ performance and payments, and receive regular updates.",
        img: "3.svg"
    },
    {
        id: 4,
        title: "Start Small - Scale with Ease",
        desc: "Once satisfied with our exceptional quality and dedication, you can easily hire more expert engineers to scale your team.",
        img: "4.svg"
    }
]

const bannerContents = {
    title: 'Hire Developers',
    desc: 'Fwork is a vetted community of expert development teams supported by an AI-powered Agile process. Top companies and startups rely on us to help them to build great products. We can help you too, by enabling you to hire and effortlessly manage expert developers.',
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
    // {
    //     "banner": "Healthcare Software Development",
    //     "title": "How To Build A Healthcare SaaS Platform?",
    //     "desc": "Interested in building a healthcare SaaS platform? This is a HUGE market that...",
    //     "img": "healthcare-tech-trend.jpg"
    // }
]

const service = [
    {
        icon: '/img/icon/hiring-icon-1.svg',
        desc: 'Scale your MVP with a pro-level development team',
        btnLink: 'https://fwork.io/contact-us',
        btnContent: 'Contact Us',
        bgColor: '#0077ff'
    },
    {
        icon: '/img/icon/hiring-icon-2.svg',
        desc: 'Build a world-class MVP to hit the market',
        btnLink: 'https://fwork.io/services',
        btnContent: 'Get started',
        bgColor: '#ebeaea'
    },
    {
        icon: '/img/icon/hiring-icon-3.svg',
        desc: 'Launch a product prototype to test the market and raise funds',
        btnLink: 'https://fwork.io/contact-us',
        btnContent: 'Schedule a Call',
        bgColor: '#0077ff'
    },
    {
        icon: '/img/icon/hiring-icon-4.svg',
        desc: ' Enterprise-Build and scale a custom process automation solution, and more ',
        btnLink: 'https://fwork.io/freelancers',
        btnContent: 'Talk to Our Expert',
        bgColor: '#ebeaea'
    },
    {
        icon: '/img/icon/hiring-icon-5.svg',
        desc: 'Outstaffing - expand your team with our senior developers and other experts',
        btnLink: 'https://fwork.io/freelancers',
        btnContent: 'Talk to Our Expert',
        bgColor: '#0077ff'
    },
    {
        icon: '/img/icon/hiring-icon-6.svg',
        desc: 'Conduct a professional design phase with UX/UI and technical design',
        btnLink: 'https://fwork.io/freelancers',
        btnContent: 'Talk to Our Expert',
        bgColor: '#ebeaea'
    }
]
const faq = [
    {
        "_id": 1,
        "title": "What is Fwork?",
        "desc": "Fwork is a community of field-expert development teams supported by a AI-powered agile process.\nWe pair you with the most relevant development teams, based on your tech stack and project specification, and help to manage your project with our AI-powered agile process.\nThis unique approach helps us build world-class software applications in the most efficient way, delivering the highest ROI to our clients. Businesses rely on Fwork for their most innovative projects.\nFwork is most suited for businesses that don't want to handle product development by themselves and are looking for a reliable long-term product development partner.\nUsually, these projects consist of building both mobile and web apps, require serious back-end architecture, security expertise, and need other experts to be connected to the project on a per-request basis. Read more about our process here our process.\nOur development teams have helped thousands of startups and well-established businesses to solve their tech challenges. Whether you’re looking for a complete development team or just a single developer, we can help!"
    },
    {
        "_id": 2,
        "title": "What are you best at?",
        "desc": "Over the years, we’ve discovered that our service works best for businesses with long-term complex projects. Usually, these projects require building both mobile and web apps, need serious architecture and security expertise, and require other experts to be connected to the project on a per-request basis. Thanks to our AI-powered process, it's easy for us to manage such projects and scale your dev team up and down should you decide to alter your project.\nIn addition to this, our exclusive community consists of field-expert software development teams. Each dev team specializes in a specific tech stack or product type. We assign the most relevant development team to your project.\nThis allows us to undertake software development projects of any size and complexity as well as giving our clients maximum return on their investment at zero risk.\nLearn more about Fwork’s AI-powered process."
    },
    {
        "_id": 3,
        "title": "What is the value proposition to your clients?",
        "desc": "It’s difficult to find a reliable software development partner who has a solid development process, understands your business needs, and who can consistently produce high-quality code. Here is how we solve these problems for you:\nHaving this process in place allows us to monitor and adjust the development team and our client team's performance on a daily and weekly basis. As a result, we always keep our clients happy by delivering the highest quality software applications in the most efficient way, ensuring the highest possible ROI."
    },
    {
        "_id": 4,
        "title": "What is the value proposition for dev teams to become a part of Dev Teams?",
        "desc": "At Fwork, we are on a mission to make the software development process drastically more efficient and transparent for businesses around the world. No matter whether you are a growing startup or a multinational company that's looking for a reliable software development partner, we want to help you improve your development process.\nA world-class development process requires world-class teams that are experts in their chosen field. That's why we rigorously follow a strict vetting process when selecting our partners. Only those dev teams that are able to reach our high standards of excellence are invited to join our community to help us create the world's most innovative products for our clients.\nOnce aboard, teams can rely on us to be a trusted partner. We help all our teams find challenging and meaningful projects. Want to become a part of our exclusive dev team community? Apply now"
    },
    {
        "_id": 5,
        "title": "What types of projects do you do?",
        "desc": "Our vetted community of field expert development teams has built thousands of Web, mobile, blockchain, data-engineering, and IoT projects. We are experienced in all the major tech stacks including NodeJS, Ruby on Rails, iOS/Android, Java, Python, PHP, .NET, and others. No matter how complex or revolutionary your project is, we have the process, the developers, and the experience to successfully complete it."
    },
    {
        "_id": 6,
        "title": "How do you use AI-powered technologies to assign the best matching developers to my project?",
        "desc": "We have a strict vetting process. We evaluate each dev team based on their communication skills, development experience, referrals, and past project feedback. However, our process does not stop there. After a new dev team is accepted, we continue to rate their performance on every single project. This ensures that our clients work only with top-rater developers, those that consistently perform at the highest level. You can read about our dev team vetting and continuous performance tracking processes on this page."
    },
    {
        "_id": 7,
        "title": "Which countries your dev teams are from?",
        "desc": "Our dev teams are from Canada, US and Europe. However, we don't have a specific preference where dev teams come from. Our focus is to find and hire only the most skilled field-expert dev teams, no matter where they come from. Want to become a part of our exclusive dev team community? Apply now"
    },
    {
        "_id": 8,
        "title": "How can we ensure that our company's data is kept confidential?",
        "desc": "Your company's private data security is our highest priority. We never reveal any confidential information to our dev teams unless you, the client, have approved it first. In addition, we always offer our clients the option of us signing a mutual non-disclosure agreement (NDA), prior to them sharing any information with us.\nOur unique blockchain technology protects your intellectual property by securing your code with “proof of work” hash signatures. If our clients are not experienced in intellectual property protection, we always provide them with plenty of advice and guidance.\nThroughout the product development process, we always operate according to the highest security standards. Once the project is finished, we make sure to transfer all the necessary information and documentation to the client, upon request."
    },
    {
        "_id": 9,
        "title": "What if I love an Elite Dev Team or a particular developer and I want to hire them/him/her full-time?",
        "desc": "Companies sometimes wish to retain one or more of our developers. This option and terms are up for discussion based on each particular case."
    },
    {
        "_id": 10,
        "title": "How can I be guaranteed that your service is excellent?",
        "desc": "Once the project roll-out is approved, we sign a \"work-for-hire\" master agreement, which includes two crucial statements 1. The client owns all intellectual property (IP) from day one 2. Development teams do not get paid before successfully completing all assigned tasks to the client's satisfaction. This is done on a weekly basis. We hold your payment securely at Fwork until you approve its release.\nOnce we start working on your project, your account manager guides you at every step and oversees the development process. You receive daily updates and weekly AI-powered performance reports. Every week, we review the completed work and approve the tasks for the upcoming weekly sprint with you. This way, you keep your hand on the pulse of the project.\nOn a larger scale, we split the project into phases, where each phase lasts from 3 to 6 months. At the end of each phase, we make sure to allocate additional time to clean up the code base, bugs, and to re-align the product development activities with your business and marketing KPIs.\nThis approach allows us to support your product growth on an ongoing basis, delivering the best results."
    }
]

const devbtns = ["AI", "BlockChain", "Mobile"];

const Home = () => {

    const [smallScreen, setSmallScreen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const onAccordian = (idx: number) => {
        setActiveIndex((prevIndex) => (prevIndex === idx ? null : idx));
    };
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
                <section>
                    <IntroBanner title={bannerContents.title} desc={bannerContents.desc} />
                </section>
                <section className="container">
                    <div className="world-card row">
                        <div className="col-md-4 col-sm-6 p-0"></div>
                        <div className="col-md-4 col-sm-6 pr-2 pl-2">
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
                        <div className="col-md-4 col-sm-6 pr-2 pl-2">
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
                        <div className="col-md-4 col-sm-6 pr-2 pl-2" >
                            <div className="b-content">
                                <p>Hire Expert Developers,</p>
                                <p>Freelancers Are</p>
                                <p>Available Now</p>
                            </div>
                            <p>Building a great product in today’s world requires expert developers,<br />not freelancers. Fwork is a vetted community where you can hire expert developers for all your software development needs.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 pr-2 pl-2" style={{ color: "white", backgroundImage: "linear-gradient(134deg, #667EEA 0%, #764BA2 100%)" }}>
                            <div className="b-content"><p>Get a World-class</p><p>Looking and Working</p><p>Product</p></div>
                            <p>Our expert developers deliver supportable and maintainable code. So any new developers can onboard and continue working on the code immediately.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 pr-2 pl-2">
                            <div className="b-content"><p>Clear Communication,</p><p>Tasks and Payments</p><p>Management</p></div>
                            <p>Get complimentary support from a dedicated tech account manager and AI-powered agile process with all the tools, notifications, and performance tracking to ensure ongoing success.</p>
                        </div>
                    </div>
                </section>
                <section id="case" className="case-content">
                    <div className="container mt-1">
                        <label className="h1">Witness the magic of our expert developers and designers in action!</label>
                        <div className="row">
                            {cases.map(i => (
                                <div key={i._id} className="col-md-4" >
                                    <CaseCard title={i.title} tech={i.tech} img={i.img} team={i.team} smallScreen={smallScreen} />
                                </div>
                            ))}
                        </div>
                        <div className="d center gap mt-1 mb-2">
                            <Link to='https://fwork.io/freelancers'><button>Hire Top-notch Developer
                            </button></Link>
                            <Link to="https://fwork.io/blogs">
                                <button className="d middle" >
                                    <div className="pr">See More Case Studies</div>
                                    <img src="/img/icon/right-arrow.svg" width={16} alt="" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="hiring" className="container">
                    <label className="h1">Developer Hiring Process</label>
                    <div className=" process-content row">
                        {process.map((i) => (
                            <div key={i.id} className="col-lg-3 col-md-6">
                                <HireProcess id={i.id} title={i.title} desc={i.desc} img={i.img} />
                            </div>
                        ))}
                    </div>
                </section>
                <section id="services" className="container">
                    <label className="h1">Services for Enterprise, Startups, and Entrepreneurs</label>
                    <div className="row m-0">
                        {service.map((i, k) => (
                            <div key={k} className=" col-md-4 p-0">
                                <ServiceCard icon={i.icon} desc={i.desc} btnContent={i.btnContent} btnLink={i.btnLink} bgColor={i.bgColor} />
                            </div>
                        ))}
                    </div>
                </section>
                <section id="faq" className="container faq-content center">
                    <div className="row m-0">
                        <div className="col-lg-4 p-0 text-header">
                            <div className="h1">Frequently Asked Questions</div>
                            <p className="m-0 mb-1 mt-1">Everything you need to know about Fwork. Can’t find the answer you’re looking for?</p>
                        </div>
                        <div className="col-lg-8 pt-2">
                            {faq.map((i, k) => (
                                <AskQuestion
                                    title={i.title}
                                    desc={i.desc}
                                    isOpen={activeIndex === k}
                                    onAccordian={() => onAccordian(k)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section id="blog" className="container mb-3">
                    <div className="d column ">
                        <div className="h1">Find Work Blog</div>
                        <div>Check out our mind-blowing product development tutorials and futuristic technology announcements cooked up by our brilliant software development wizards. Penned by humans, for humans (and maybe a few robots).</div>
                    </div>
                    <div className="row m-0 p-0">
                        {blog.map((i, k) => (
                            <div key={k} className="col-md-4">
                                <BlogCard banner={i.banner} title={i.title} desc={i.desc} img={i.img} link={i.banner} />
                            </div>
                        ))}
                    </div>
                </section>
            </StyledHome>
        </Layout>
    )
}

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;
    .process-content {
        color: var(--text);
        margin: 0;
        &>div {
           padding-inline : .4em;
        }
    }   
    
    .world-card {
        margin-bottom: 2em;
        border: 1px solid #FF5827;
        margin-inline: 0;
        &>:first-child {
            background-image: url(/img/world.jpg);
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
        .container {
            display: flex;
            flex-direction: column;
            gap: 1.5em;
        }        
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

    .faq-content {
        button {
            color: #0f258b;
            border: 1px solid #0f258b;
            border-radius: 0.3em;
            background: inherit;
            padding: 0.5em 0.7em;
            font-size: 1em;
            cursor: pointer;
        }
    }
    #blog {
        .d {
            gap: 1em;
        }
    }

    .text-header {
        &>:last-child {
            color: #6c757d;
            line-height: 2em;
            font-size: .9em;
        }
    }
`


export default Home