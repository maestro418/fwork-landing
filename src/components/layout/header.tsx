import React from "react";
import styled from 'styled-components'

import {StyledButton} from "../button";
import { Link } from "react-router-dom";
import IntroBanner from "../intro-banner";

interface HeaderProps {
    logo: string
    menuItems: { title: string, link?: string, items: { title: string, link: string }[] }[]
}

const bannerContents = {
    title: 'Hire Developers',
    subTitle: 'Expert Developers from Europe and North America',
    desc: 'DevTeam.Space is a vetted community of expert development teams supported by an AI-powered Agile process. Top companies and startups rely on us to help them to build great products. We can help you too, by enabling you to hire and effortlessly manage expert developers.',
    btnContent: 'Hire Expert Developers'
}

const Header = ({ logo, menuItems }: HeaderProps) => {
    return (
        <StyledHeader style={{backgroundImage: "http://www.w3.org/2000/svg"}}>
            <div className="d middle between container">
                <Link to='/' >
                    <img src={logo} alt="No image" width={100} />
                </Link >
                <div className="d gap-3">
                    {menuItems.map((i, k) => (
                        <Link to={`${!!i.link ? i.link : ""}`} key={k}><div>{i.title}</div></Link>
                    ))}
                </div>
            </div>
            <div>
                <IntroBanner title={bannerContents.title} subTitle={bannerContents.subTitle} desc={bannerContents.desc} btnContent={bannerContents.btnContent} />
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    width: 100%;
    color: white;
    background-image: linear-gradient(106deg, rgba(0, 41, 107, 0.94) 17.28%, rgba(0, 41, 107, 0.52) 87.08%);
    padding: 1em 0em;
    a {
        color: white;
    }
`

export default Header
