import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import Layout from "../components/layout";
import IntroBanner from "../components/intro-banner";
import HireProcess from "../components/hire-process";
import CaseCard from "../components/case-card";
import Markdown from "../components/markdown";

import data from "./context/service.json";
import AskQuestion from "../components/ask-question";
import BlogCard from "../components/blog-card";
import OutSourcing from "../components/outsourcing";

interface dataType {
    title: string
    desc: string
    service: {
        title: string
        desc: string
        item: Array<{
            title: string
            desc: string
            img: string
        }>
    }
    project: {
        title: string
        item: Array<{
            img: string
            tech: string
            title: string
            slug: string
            team: Array<{ gender: string, member: string }>
        }>
    }
    article: string
    faq: {
        title: string
        item: Array<{ title: string, desc: string }>
    }
    blog: {
        title: string
        desc: string
        item: Array<{
            title: string
            desc: string
            banner: string
            img: string
            slug: string
        }>
    }
}

const Service = () => {
    const { id } = useParams();
    const [status, setStatus] = React.useState({} as dataType);
    const [smallScreen, setSmallScreen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const onAccordian = (idx: number) => {
        setActiveIndex((prevIndex) => (prevIndex === idx ? null : idx));
    };
    console.log(status)
    React.useEffect(() => {
        const d = data.find((i) => (i.title === id))
        const _data = d?.item;
        if (!!_data) {
            setStatus(_data)
            console.log(_data)
        }
    }, [id])
    React.useEffect(() => {
        const handleScreen = () => {
            setSmallScreen(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleScreen);
        return () => window.removeEventListener("resize", handleScreen);
    }, []);

    return (
        <Layout>
            <StyledService>
                <IntroBanner title={status.title} desc={status.desc} />
                <section>
                    <div className="container">
                        <div className="text-header">
                            <h1>{status.service?.title}</h1>
                            <div className="m-0 p-0">{status.service?.desc}</div>
                        </div>
                        <div className="row">
                            {status.service?.item.map((i, k) => (
                                <div className="col-md-6 mt mb">
                                    <OutSourcing key={k} img={i.img} title={i.title} desc={i.desc} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="case-content">
                    <div className="container">
                        <label className="h1">{status.project?.title}</label>
                        <div className="row">
                            {status.project?.item.map((i, k) => (
                                <div className="col-md-4">
                                    <CaseCard img={`service/${i.img}`} title={i.title} tech={i.tech} team={i.team} smallScreen={smallScreen} />
                                </div>
                            ))}
                        </div>
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
                </section>

                <section className="container">
                    <div className="row">
                        <div className="col-md-4 text-header">
                            <label className="h1">{status.faq?.title}</label>
                            <div>Everything you need to know about DevTeam.Space. Can’t find the answer you’re looking for?</div>
                        </div>
                        <div className="col-md-8 pt-2">
                            {status.faq?.item.map((i, k) => (
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
                <section>
                    <div className="container">
                        <div className="text-header">
                            <label className="h1">{status.blog?.title}</label>
                            <div>{status.blog?.desc}</div>
                        </div>
                        <div className="row">
                            {status.blog?.item.map((i, k) => (
                                <div key={k} className="col-sm-4">
                                    <BlogCard banner={i.banner} title={i.title} desc={i.desc} img={`service/${i.img}`} link={i.banner} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="mb-5">
                    <div className="container">
                        {status.article && <Markdown text={status.article} />}
                    </div>
                </section>

            </StyledService>
        </Layout>
    )
}

const StyledService = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4em;

    .case-content {
        padding: 4em 0 2em 0;
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
export default Service