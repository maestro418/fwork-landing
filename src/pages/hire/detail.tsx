import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HireData from '../context/hiring.json'
import IntroBanner from "../../components/intro-banner";
import Layout from "../../components/layout";
import CaseCard from "../../components/case-card";

import HireProcess from "../../components/hire-process";
import Markdown from "../../components/markdown";
import AskQuestion from "../../components/ask-question";
import { StyledButton } from "../../components/button";
import ParticlesContainer from "../../components/particle-content";

interface HireDetailProps {
    category: string,
    slug: string
}

interface ProjectItemType {
    img: string,
    title: string,
    tech: string,
    slug: string,
    team: Array<{ gender: string, member: string }>
}

interface ListItemType {
    title: string,
    desc: string,
    project: {
        title: string,
        item: Array<ProjectItemType>
    }
    faq: {
        title: string,
        item: Array<{
            title: string,
            desc: string
        }>
    }
    article: string
}

interface DataListType {
    link: string,
    img: string,
    name: string,
    slug: string,
    item: ListItemType

}

const overview = 'Fwork is a vetted community of expert development teams supported by an AI-powered Agile process. Top companies and startups rely on us to help them to build great products. We can help you too, by enabling you to hire and effortlessly manage expert developers.'

const HireDetail = ({ slug, category }: HireDetailProps) => {
    const [status, setStatus] = useState({} as DataListType);
    const [smallScreen, setSmallScreen] = React.useState(false);
    const [cases, setCases] = React.useState<Array<ProjectItemType>>()
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const onAccordian = (idx: number) => {
        setActiveIndex((prevIndex) => (prevIndex === idx ? null : idx));
    };

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

    React.useEffect(() => {
        const dataSlug = HireData.find((i) => i.slug === category)
        if (!!dataSlug) {
            const data = dataSlug?.list.find((i) => i.slug === slug);
            if (data) {
                setStatus(data)
                setCases(data.item.project.item)
            }
            console.log("stress", dataSlug)
        }
        return;
    }, [slug]);

    React.useEffect(() => {
        const handleScreen = () => {
            setSmallScreen(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleScreen);
        return () => window.removeEventListener("resize", handleScreen);
    }, [])

    return (
        <Layout>
            <StyledHireDetail>
                <section>
                    <ParticlesContainer title={status.name} desc={overview} bgImg="/img/bg/banner.png" />
                </section>
                <section id="hiring" className="container">
                    <label className="h1">Developer Hiring Process</label>
                    <div className=" process-content row">
                        {process.map((i) => (
                            <div key={i.id} className="col-lg-3 col-md-6 pb">
                                <HireProcess id={i.id} title={i.title} desc={i.desc} img={""} />
                            </div>
                        ))}
                    </div>
                </section>
                {!!cases && cases.length >= 1 && (
                    <section id="case" className="case-content">
                        <div className="container">
                            <label className="h1">{status?.item.project.title}</label>
                            <div className="row">
                                {cases?.map((i, k) => (
                                    <div className="col-md-4" >
                                        <CaseCard title={i.title} tech={i.tech} img={`hiring/${i.img}`} team={i.team} smallScreen={smallScreen} />
                                    </div>
                                ))}
                            </div>
                            <div className="d center gap">
                                <Link to='https://fwork.io/freelancers'><StyledButton>Hire Top-notch Developer
                                </StyledButton></Link>
                                <Link to="https://fwork.io/blogs">
                                    <StyledButton className="d middle" >
                                        <div className="pr">See More Case Studies</div>
                                        <img src="/img/icon/right-arrow.svg" width={16} alt="" />
                                    </StyledButton>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}
                <section className="container">
                    <div className="row">
                        <div className="col-md-4 text-header">
                            <label className="h1">{status?.item.faq.title}</label>
                            <div>Everything you need to know about DevTeam.Space. Can’t find the answer you’re looking for?</div>
                        </div>
                        <div className="col-md-8 pt-2">
                            {status.item.faq?.item.map((i, k) => (
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
                <section className="mb-3">
                    <div className="container">
                        {status?.item.article && <Markdown text={status.item.article} />}
                    </div>
                </section>
            </StyledHireDetail>
        </Layout>

    )
}

const StyledHireDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9em;

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

    .text-header {
        &>:last-child {
            color: #6c757d;
            line-height: 2em;
            font-size: .9em;
        }
    }
`

export default HireDetail