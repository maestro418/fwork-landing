import React from "react";
import styled from 'styled-components'

import Button from "../button";
import { Link } from "react-router-dom";

interface HeaderProps {
    logo: string
    menuItems: { title: string, link?: string, items: { title: string, link: string }[] }[]
}

const Header = ({ logo, menuItems }: HeaderProps) => {
    return (
        <StyledHeader>
            <div className="d middle between container">
                <Link to='/' >
                    <img src={logo} alt="No image" width={100} />
                </Link >
                <div className="d gap-3">
                    {menuItems.map((i, k) => (
                        <Link to={`${!!i.link ? i.link : ""}`} key={k}><div>{i.title}</div></Link>
                    ))}
                </div>
                <Button content="Log in" bgColor="#7591a3" />
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    width: 100%;
    background-color: var(--rb-back);
    color: var(--rb-text-tertiary);
    padding: 2em 0em;
    a {
        color: var(--rb-text-tertiary);
    }

`

export default Header
