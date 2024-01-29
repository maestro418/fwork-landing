import React from "react";
import styled from 'styled-components'

import { StyledButton } from "../button";
import { Link } from "react-router-dom";
import IntroBanner from "../intro-banner";

interface HeaderProps {
    logo: string
    menuItems: { title: string, link?: string, items: { title: string, link: string }[] }[]
}



const Header = ({ logo, menuItems }: HeaderProps) => {
    return (
        <StyledHeader >
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
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    position: fixed;
    top: 1em;
    width: 100%;
    color: white;
    background-color: none;
    padding: 1em 0em;
    z-index: 1;
    a {
        color: white;
    }
`

export default Header
