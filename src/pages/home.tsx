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
const bannerContents = {
    title: 'Hire Developers',
    subTitle: 'Expert Developers from Europe and North America',
    desc: 'DevTeam.Space is a vetted community of expert development teams supported by an AI-powered Agile process. Top companies and startups rely on us to help them to build great products. We can help you too, by enabling you to hire and effortlessly manage expert developers.',
    btnContent: 'Hire Expert Developers'
}
const Home = () => {
    return (
        <Layout>
            <StyledHome>
                <div>
                    <IntroBanner title={bannerContents.title} subTitle={bannerContents.subTitle} desc={bannerContents.desc} btnContent={bannerContents.btnContent} />
                </div>
                <div className="d center gap">
                    {/* {devContents.map((i, k) => (
                        <DevCard key={k} avatar={i.avatar} name={i.name} uid={i.uid} location={i.location} skill={i.skill} />
                    ))} */}

                </div>
            </StyledHome>
        </Layout>
    )
}

const StyledHome = styled.div`
    background-image: linear-gradient(106deg, rgba(0, 41, 107, 0.94) 17.28%, rgba(0, 41, 107, 0.52) 94%);
    padding: 4em 0em;
    color: white;
   
`

export default Home