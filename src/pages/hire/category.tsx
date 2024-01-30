import React, { useState } from "react";
import styled from "styled-components";
import IntroBanner from "../../components/intro-banner";

import HireData from '../context/hiring.json'
import Layout from "../../components/layout";
import { Link } from "react-router-dom";
import CaseCard from "../../components/case-card";
import HireProcess from "../../components/hire-process";





interface CategoryType {
    title: string,
    slug: string,
    list: Array<{
        name: string,
        slug: string,
        img: string
    }>
}


const HireCategory = () => {
    const [status, setStatus] = useState<Array<CategoryType>>();
    const [smallScreen, setSmallScreen] = React.useState(false);
    const bannerContents = {
        title: 'Looking to Hire Developers With Specific Skills?',
        desc: 'Fwork is a vetted community of expert development teams supported by an AI-powered Agile process. Top companies and startups rely on us to help them to build great products. We can help you too, by enabling you to hire and effortlessly manage expert developers.',
    }
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


    React.useEffect(() => {
        const initData: Array<CategoryType> = []
        HireData.map((i, k) => {
            const tmpData = { title: i.title, slug: i.slug, list: [] } as CategoryType
            i.list.map((j, key) => {
                const listTmp = { name: j.name, slug: j.slug, img: j.img }
                tmpData.list.push(listTmp)
            })
            initData.push(tmpData)
        })
        setStatus(initData)
    }, [])

    React.useEffect(() => {
        const handleScreen = () => {
            setSmallScreen(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleScreen);
        return () => window.removeEventListener("resize", handleScreen);
    }, [])

    return (
        <Layout>
            <StyledHireCategory>
                <section>
                    <IntroBanner title={bannerContents.title} desc={bannerContents.desc} />
                </section>
                <section className="container">
                    <div className="row">
                        {status?.map((i, k) => (
                            <div key={k} className="d column col-md-4 col-sm-6 mb-3" style={{ 'gap': '1em' }}>
                                <div className="h2">{i.title}</div>
                                {i.list.map((j, key) => (
                                    <div key={key} className="d middle gap">
                                        <img src={`/img/icon/${j.img}`} />
                                        <Link to={`${i.slug}/${j.slug}`}>{j.name}</Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
                <section id="case" className="case-content">
                    <div className="container">
                        <label className="h1">Witness the magic of our expert developers and designers in action!</label>
                        <div className="row">
                            {cases.map(i => (
                                <div key={i._id} className="col-md-4" >
                                    <CaseCard title={i.title} tech={i.tech} img={i.img} team={i.team} smallScreen={smallScreen} />
                                </div>
                            ))}
                        </div>
                        <div className="d center gap">
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
                <section id="hiring" className="container mb-3">
                    <label className="h1">Developer Hiring Process</label>
                    <div className=" process-content row">
                        {process.map((i) => (
                            <div key={i.id} className="col-lg-3 col-md-6">
                                <HireProcess id={i.id} title={i.title} desc={i.desc} />
                            </div>
                        ))}
                    </div>
                </section>
            </StyledHireCategory>
        </Layout>

    )
}

const StyledHireCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;

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
`

export default HireCategory