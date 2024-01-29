import React, { useState } from "react";
import styled from 'styled-components'

import { StyledButton } from "../button";
import { Link } from "react-router-dom";
import IntroBanner from "../intro-banner";

interface HeaderProps {
    menuItems: { title: string, link?: string, items?: { title: string, link: string }[] }[]
}

type StyledHeaderProps = {
    scrollEvent: Boolean
}

const Header = ({ menuItems }: HeaderProps) => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const [mobile, setMobile] = useState(false);
    const [scrollEvent, setScrollEvent] = useState(false)
    const getScrollY = () => window.scrollY;

    const getWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    const setScrollEventY = () => {
        return getScrollY() > 40 ? setScrollEvent(true) : setScrollEvent(false)
    }
    const setResponsive = () => {
        if (getWidth() < 1140) {
            setMobile(true)
        } else {
            setMobile(false);
            setOpenSideBar(false)
        }
    }

    React.useEffect(() => {
        setResponsive();
        setScrollEventY();
        window.addEventListener('scroll', setScrollEventY);
        window.addEventListener('resize', setResponsive);
        return () => {
            window.removeEventListener('resize', setResponsive);
            window.removeEventListener('scroll', setScrollEventY);
        };
    }, [])

    return (
        <StyledHeader scrollEvent={scrollEvent}>
            <div className="d middle between container">
                <Link to='/' className="" >
                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 32" width="125" height="32"><path fill="currentColor" d="m124.7 25.5l-0.4 2.9c0 0-2.7 0-5.1-1.2-2.1-1-4.9-3.2-4.9-3.2v4.4h-4v-7.3c0 0-2.4-1.6-5.1-1.4-1.7 0.2-3.4 0.9-4.8 1.8l-0.1 6.9h-4.5v-12.7c0 0 0-0.3 0.1-0.8q0-0.2 0-0.3c0-1.8 1.4-3.2 3.2-3.2 1.7 0 3.1 1.4 3.1 3.2 0 0.7-0.2 1.4-0.6 1.9q-0.1 0.1-0.2 0.2c-0.6 0.7-1.4 1.1-2.3 1.1 0.2 0.1 0.7 0.4 1.3 0.2v0.1c1.4-0.5 4-1.3 5.8-1.1 1 0 2.6 0.4 4.3 0.6 2.4 0.3 4-0.1 4-0.1 2.7-0.6 4.7-1.2 7.7-4.2l1.3 2c0 0-5.2 5.3-9 5.3 0 0 3 2.5 5.3 3.7 2.5 1.3 4.9 1.2 4.9 1.2zm-10.2-8q0 0 0 0 0 0 0 0zm-1.9-0.2c-1.7 0-3.1-1.4-3.1-3.2 0-1.8 1.4-3.2 3.1-3.2 1.7 0 3.2 1.4 3.2 3.2 0 1.8-1.5 3.2-3.2 3.2zm-27 11.5c0 0-3 0.2-5.3-3l1.2-3.8c0 0 1.4 2.9 4.3 3.2 3.3 0.2 4.9-3 4.9-4.3 0-1.1-0.5-4.5-4-4.7-0.7 0-2-0.1-2.7 0.6 0 0-2.8 0.7-5.5 10.3 0 0-0.1 1.8-1.7 1.8-0.9 0-1.2-0.6-1.7-2-1.3-3.2-3.3-7.8-3.3-7.8l-3.7 8c0 0-0.6 1.9-2.5 1.6-1.1-0.1-1.4-1.3-1.7-2.4-0.6-2.1-1.9-6.4-2.8-9.8h-14.8c-1.3 0-2.3-0.9-2.3-1.9 0-1.1 1-1.6 2.3-1.6h2.6 4.5q0 0 0 0h5.7q0 0 0 0h4.7l2.8 8.9 3.9-7.7c0 0 0.6-1.4 1.3-1.5 0.9-0.1 1.2-0.2 1.8 1.2 1.4 3.4 3.2 7.5 3.2 7.5l2.1-4.6c0 0 1.9-3.6 5.5-4.1 0 0 3.9-1.1 7.1 1.5 3.2 2.5 3.5 6.1 3.1 7.8-0.4 2.1-2.7 6.8-9 6.8zm-33.6-0.2l-5.4 0.1 5.1-11.2h5.4zm23.1-20.2c-3.6 0-8.8 0.1-13.7 0.1-0.2 0-1.9 3.5-2.1 3.5-3.8 0-5 0-5 0 0 0 2.1-4.4 3.1-6.6 0.4-0.7 1.6-2.4 4.7-2.4 7 0.1 21.8 0 21.8 0 0 0-1 1.1-1.8 2.3-2.3 3.3-5.9 3.1-7 3.1z"></path><path fill="currentColor" d="m20.2 21v-9.6h-19.2v-6.4h30.4v16z"></path><path fill="#1967d2" d="m18.6 22.6h19.2v5.6h-29.6v-15.2h10.4z"></path></svg>
                </Link >
                <div className="d gap-3">
                    {!mobile && menuItems.map((i, k) => (
                        <Link to={`${!!i.link ? i.link : ""}`} key={k}><div>{i.title}</div></Link>
                    ))}
                    {!!mobile && (
                        <div className="hamburger" onClick={() => setOpenSideBar(!openSideBar)}>
                            <svg width="125" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="currentColor" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {!!openSideBar && (
                <div className="">
                    <div className="menu">
                        {menuItems.map((i, k) => (
                            <Link to={`${!!i.link ? i.link : ""}`} key={k} onClick={() => setOpenSideBar(false)}><div>{i.title}</div></Link>
                        ))}
                    </div>
                </div>
            )}
        </StyledHeader >
    )
}

const StyledHeader = styled.div<StyledHeaderProps>`
    position: fixed;
    top: 0em;
    width: 100%;
    color:${(props) => !!props.scrollEvent ? 'black' : 'white'};
    background-color: ${(props) => !!props.scrollEvent ? 'white' : 'none'};
    box-shadow:${(props) => !!props.scrollEvent && '0px 2px 4px rgba(0, 0, 0, 0.2)'} ;
    padding: 1em 0em;
    z-index: 2;
    .hamburger {
        position: absolute;
        top: 1.5em;
        right: 0;
        cursor: pointer;
        color: ${(props) => !!props.scrollEvent ? '#1967d2' : 'white'};
    }
    a {
        color:${(props) => !!props.scrollEvent ? 'black' : 'white'};
    }
    .menu {
        display: flex;
        flex-direction: column;
        gap: 1em;
        z-index: 1000;
        border: 0;
        background-color: white;
        a {
            border: 0;
            color: black;
            padding: 0.5em 2em;
            &:hover {
                background-position: right center;
                background-color: #ebeaea;
                text-decoration: none;
            }

            &:active {
                transform: scale(0.95);
            }
        }
    }
`

export default Header
