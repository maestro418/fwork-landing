import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";

import IntroBanner from "../components/intro-banner";
import TrustedCompany from "../components/trusted-company";

import Anna from '../assets/img/developers/Anna-Python.webp';
import Danili from '../assets/img/developers/3-Daniil-B-219x222.webp';
import Evgeny from '../assets/img/developers/7-Evgeny-219x222.webp';
import Dan from '../assets/img/developers/4-Daniil-K-219x222.webp';
import Alex from '../assets/img/developers/8-Alexander-219x222.webp'

import Disney from '../assets/img/companies/disney.jpg';
import Airbus from '../assets/img/companies/airbus.png';
import Poynt from '../assets/img/companies/poynt.png';
import Nec from '../assets/img/companies/NEC-logo.png';
import Startups from '../assets/img/companies/startups.jpg'
import DevCard from "../components/dev-card";
import HireProcess from "../components/hire-process";

const devContents = [
    {
        avatar: Anna,
        name: 'Anna',
        uid: 'anna',
        location: 'Euroupe',
        skill: ['AWS', 'Django', 'Evgency']
    },
    {
        avatar: Danili,
        name: 'Danili',
        uid: 'danili',
        location: 'Euroupe',
        skill: ['AWS', 'Javascript', 'Node.Js']
    },
    {
        avatar: Evgeny,
        name: 'Evgeny',
        uid: 'evgeny',
        location: 'Euroupe',
        skill: ['AWS', 'Javascript', 'Node.Js']
    },
    {
        avatar: Dan,
        name: 'Dan',
        uid: 'dan',
        location: 'Euroupe',
        skill: ['AngularJs', 'AWS']
    },
    {
        avatar: Alex,
        name: 'Alex',
        uid: 'alex',
        location: 'Euroupe',
        skill: ['AWS', 'Javascript', 'Node.Js']
    }]

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

const Home = () => {
    return (
        <Layout>
            <StyledHome>
                <div className="d center gap">
                    {/* {devContents.map((i, k) => (
                        <DevCard key={k} avatar={i.avatar} name={i.name} uid={i.uid} location={i.location} skill={i.skill} />
                    ))} */}

                </div>
                <div className="container">
                    <div className="process-content">
                        {process.map((i) => (
                            <HireProcess key={i.id} id={i.id} title={i.title} desc={i.desc} />
                        ))}
                    </div>
                </div>
            </StyledHome>
        </Layout>
    )
}

const StyledHome = styled.div`
    
    .process-content {
        display: flex;

        box-shadow: 0 0 10px 0 var(--shadow);
    }   
`

export default Home