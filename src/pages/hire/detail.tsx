import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";
import CaseCard from "../../components/case-card";

import HireProcess from "../../components/hire-process";
import Markdown from "../../components/markdown";
import AskQuestion from "../../components/ask-question";
import { StyledButton, StyledOutlineButton, Up2Button } from "../../components/button";
import E404 from "../e404";
import ParticlesContainer from "../../components/particle-content";
import PageTransition from "../../components/page-transition";

interface HireDetailProps {
    category: string,
    slug: string,
    allData: DataType[]
}

const overview = 'Fwork LLC is a vetted community of expert development teams supported by an AI-powered Agile process. Top companies and startups rely on us to help them to build great products. We can help you too, by enabling you to hire and effortlessly manage expert developers.'

const HireDetail = ({ slug, category, allData }: HireDetailProps) => {
    const [status, setStatus] = useState({} as DataListType);
    const [smallScreen, setSmallScreen] = React.useState(false);
    const [cases, setCases] = React.useState<Array<ProjectItemType>>()
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const [notFound, setNotFound] = useState(false)

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
        const dataSlug = allData.find((i) => i.slug === category)
        const data = dataSlug?.list.find((i) => i.slug === slug);
        if (data) {
            setStatus(data)
            setCases(data?.item.project.item)
            return;
        }
        setNotFound(true)
    }, []);

    React.useEffect(() => {

        const handleScreen = () => {
            setSmallScreen(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleScreen);

        return () => window.removeEventListener("resize", handleScreen);
    }, [])

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [status])



    return (
        <>
            {!notFound && status && (
                <PageTransition>
                    <Layout>
                        <StyledHireDetail>
                            <section>
                                <ParticlesContainer title={status?.name} desc={overview} bgImg="/img/bg/banner.png" />
                            </section>
                            <section id="hiring" className="container">
                                <label className="h1 mb-1">Developer Hiring Process</label>
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
                                        <label className="h1 mb-1">{status?.item.project.title}</label>
                                        <div className="row">
                                            {cases?.map((i, k) => (
                                                <div className="col-md-4 mt mb" >
                                                    <CaseCard title={i.title} tech={i.tech} img={`hiring/${i.img}`} team={i.team} smallScreen={smallScreen} />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <Link to='https://fwork.io/freelancers' aria-label="detail-top"><StyledOutlineButton>Hire Top-notch Developer
                                            </StyledOutlineButton></Link>
                                            <Link to="https://fwork.io/blogs" aria-label="detail-more">
                                                <StyledOutlineButton className="d middle" >
                                                    <div className="pr">See More Case Studies</div>
                                                    <img src="/img/icon/right-arrow.svg" width={16} alt="No image" />
                                                </StyledOutlineButton>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            )}
                            {!!status.item && !!status.item?.faq.item[0] && (
                                <section className="container">
                                    <div className="row">
                                        <div className="col-md-4 text-header">
                                            <label className="h1 mb-1">{status?.item?.faq.title}</label>
                                            <div>Everything you need to know about Fwork LLC. Can’t find the answer you’re looking for?</div>
                                            <Link to='https://fwork.io/contact-us'><StyledButton className="mt-2 pt-1 pb-1 pl-1 pr-1">Ask Fwork LLC Support Team</StyledButton></Link>
                                        </div>
                                        <div className="col-md-8 pt-2">
                                            {status?.item?.faq.item.map((i, k) => (
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
                            )}
                            <section className="mb-3">
                                <div className="container">
                                    {status?.item?.article && <Markdown text={status.item.article} />}
                                </div>
                            </section>
                            <Up2Button />
                        </StyledHireDetail>
                    </Layout>
                </PageTransition>
            )}
            {!!notFound && (
                <E404 />
            )}
        </>


    )
}

const StyledHireDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9em;

    .case-content {
        padding: 5em 0;
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

        &>:first-child >:last-child {
            display: flex;
            justify-content: center;
            gap: 1em;
            margin: 2em 0;

            button {
                color: white;
                border: 1px solid white;
                border-radius: 0.3em;
                background: inherit;
                padding-top: 0.5em 0.7em;
                font-size: 1em;
                cursor: pointer;
            }

            @media (max-width: 714px) {
                display: flex;
                flex-direction: column;
                
                button {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }

    .text-header {
        &>:nth-child(2) {
            color: #6c757d;
            line-height: 2em;
            font-size: .9em;
        }
    }
`

export default HireDetail