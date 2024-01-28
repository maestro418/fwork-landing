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
import Valeria from '../assets/img/developers/Valeria-Node.webp';

import SamSung from '../assets/img/companies/samsung-logo.png';
import Disney from '../assets/img/companies/disney.jpg';
import Airbus from '../assets/img/companies/airbus.png';
import Poynt from '../assets/img/companies/poynt.png';
import Nec from '../assets/img/companies/NEC-logo.png';
import Startups from '../assets/img/companies/startups.jpg'


const bannerContents = {
    title: 'Hire Developers',
    subTitle: 'Expert Developers from Europe and North America',
    desc: 'DevTeam.Space is a vetted community of expert development teams supported by an AI-powered Agile process. Top companies and startups rely on us to help them to build great products. We can help you too, by enabling you to hire and effortlessly manage expert developers.',
    btnContent: 'Hire Expert Developers'
}

const trustedContents = {
    title: 'Trusted by Over 300 Companies Since 2016 Including',
    items: [SamSung, Disney, Airbus, Poynt, Nec, Startups]
}

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
    },
    {
        avatar: Valeria,
        name: 'Valeria',
        uid: 'valeria',
        location: 'Euroupe',
        skill: ['Javascript', 'Node.Js', 'React.JS']
    }]
const Home = () => {
    return (
        <Layout>
            <StyledHome>
                <div>
                    <IntroBanner title={bannerContents.title} subTitle={bannerContents.subTitle} desc={bannerContents.desc} btnContent={bannerContents.btnContent} />
                </div>
                <div className="container">
                    <TrustedCompany title={trustedContents.title} items={trustedContents.items} />
                </div>
                <div>

                </div>
            </StyledHome>
        </Layout>
    )
}

const StyledHome = styled.div`
    
    
   
`

export default Home