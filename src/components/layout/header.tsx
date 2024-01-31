import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

import DropDown from "../dropdown";

interface HeaderProps {
    menuItems: { title: string, link?: string, items: { title: string, link: string }[] | [] }[]
}

type StyledHeaderProps = {
    $scrollEvent: Boolean
}

const Header = ({ menuItems }: HeaderProps) => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const [mobile, setMobile] = useState(false);
    const [scrollEvent, setScrollEvent] = useState(false)
    const [openDropDown, setOpenDropDown] = useState(false)

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
        <StyledHeader $scrollEvent={scrollEvent}>
            <div className="d middle between container">
                <Link to='/' className="" >
                    <img src="/img/icon/logo.svg" width={180} alt="" />
                </Link >
                <div className="d gap-3">
                    {!mobile && menuItems.map((i, k) => (
                        <React.Fragment key={k}>
                            {!!i.link && (
                                <a href={i.link} ><div>{i.title}</div></a>
                            )}
                            {!i.link && (
                                <DropDown title={i.title} options={i.items} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} scrollEvent={scrollEvent} isMobile={mobile} />
                            )}
                        </React.Fragment>
                    ))}
                    {!!mobile && (
                        <div className="hamburger" onClick={() => setOpenSideBar(!openSideBar)}>
                            <svg width="50" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="currentColor" />
                            </svg>
                        </div>
                    )}
                </div>
                {/* <div>
                    {!mobile && (
                        <a href="https://fwork.io/">Get started</a>
                    )}
                </div> */}
            </div>
            {!!openSideBar && (
                <div className="">
                    <div className="menu">
                        {menuItems.map((i, k) => (
                            <React.Fragment key={k}>
                                {!!i.link && (
                                    <a href={i.link} ><div>{i.title}</div></a>
                                )}
                                {!i.link && (
                                    <DropDown title={i.title} options={i.items} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} scrollEvent={scrollEvent} isMobile={mobile} />
                                )}
                            </React.Fragment>
                        ))}
                        {/* <a href="https://fwork.io/login">Get started</a> */}
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
    color:${(props) => !!props.$scrollEvent ? 'black' : 'white'};
    background-color: ${(props) => !!props.$scrollEvent ? 'white' : 'none'};
    box-shadow:${(props) => !!props.$scrollEvent && '0 0 15px 0 var(--shadow)'} ;
    padding: 1em 0em;
    z-index: 2;
    .hamburger {
        position: fixed;
        top: 1em;
        right: 0;
        cursor: pointer;
        color: ${(props) => !!props.$scrollEvent ? '#1967d2' : 'white'};
    }
    a {
        color:${(props) => !!props.$scrollEvent ? 'black' : 'white'};
    }
    .menu {
        display: flex;
        flex-direction: column;
        z-index: 1000;
        border: 0;
        background-color: white;
        a {
            border: 0;
            color: black;
            padding: 1em 2em;
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
