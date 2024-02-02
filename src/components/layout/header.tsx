import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

import DropDown from "../dropdown";

interface HeaderProps {
    menuItems: { title: string, link?: string, items: { title: string, link: string }[] | [] }[],
    is404?: boolean
}

type StyledHeaderProps = {
    $scrollEvent: Boolean,
    $is404?: Boolean
}

const Header = ({ menuItems, is404 }: HeaderProps) => {
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
        <StyledHeader $scrollEvent={scrollEvent} $is404={is404}>
            <div className="d middle between container">
                <Link to='/' aria-label="header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="32" viewBox="0 0 855 156">
                        <path data-name="Rectangle 2 copy" fill="#1967d2" d="M76.019,118.61H149V137H40.236V80.531H76.019V118.61Z" />
                        <path fill="currentColor" d="M810.6,76.809l12.45-6.991S805.652,42.781,777,56c-29.119,13.434-21.911,43.841-10.611,63.834,9.649,17.071,33.329,29.631,55.637,19.085,31.586-14.932,13.92-47.887,11.949-51.687L821,95s13.062,22.262-2.574,30.121c-13.813,6.942-26.2-4.416-34.4-17.623-7.843-12.643-13.9-28.8-.209-37.127C800.107,60.462,810.6,76.809,810.6,76.809Z" />
                        <path fill="currentColor" d="M702,124s-13.5,30.707-49,13c-6.28-3.133-20-13.478-20-34V47h24v53c0,12.729,3.181,25.3,18,27,16.448,1.887,20-23,20-23a71.68,71.68,0,0,0,2.726,11.645A36.03,36.03,0,0,0,702,124Z" />
                        <path fill="currentColor" d="M767,124s-14.5,30.707-50,13c-6.28-3.133-20-13.478-20-34V47h24v53c0,12.729,3.181,25.3,18,27,16.448,1.887,20-23,20-23a78,78,0,0,0,3.3,10.756A67.968,67.968,0,0,0,767,124Z" />
                        <path fill="currentColor" d="M84.994,110.593V72.278H12.011V54H120.777v56.588H84.994Z" />
                        <path fill="currentColor" d="M597,122l-1.962,14.764s-13.367-.023-25.552-5.99c-10.206-5-24.49-16.11-24.49-16.11v22.1H525.369V99.991s-12.112-8-25.511-6.522a54.59,54.59,0,0,0-24.279,8.942L475.2,136.633l-22.4.049,0.015-63.147a19.262,19.262,0,0,1,.527-4.162,16.376,16.376,0,0,1-.088-1.7,15.717,15.717,0,1,1,31.429,0,16.139,16.139,0,0,1-3.143,9.607,9.9,9.9,0,0,1-.866,1.072,15.549,15.549,0,0,1-11.451,5.326,6.867,6.867,0,0,0,6.557,1.019l-0.007.615c6.685-2.359,19.662-6.371,28.994-5.7,4.757,0.341,13.093,2.049,21.313,3.028,11.988,1.428,20.048-.611,19.9-0.582,13.588-2.639,23.764-5.973,38.5-20.484l6.632,9.887s-25.923,26.148-45.135,26.086c0,0,14.876,12.592,26.852,18.683A55.579,55.579,0,0,0,597,122Zm-60.344-40.76A16.013,16.013,0,1,1,552.368,65.23,15.865,15.865,0,0,1,536.653,81.241ZM401.737,138.3s-14.932,1.344-26.493-14.672l5.888-18.75s7.2,14.416,21.586,15.489c16.4,1.222,24.53-14.757,24.53-21.2,0-5.278-2.559-22.452-19.851-23.377-3.8-.2-9.986-0.4-13.509,3,0,0-13.885,3.617-27.475,51.357,0,0-.82,9.142-8.5,8.838-4.786-.191-6.075-3.094-8.636-9.753-6.271-16.3-16.224-39.261-16.224-39.261L314.41,130.153s-3.009,9.439-12.528,7.994c-5.576-.847-6.815-6.745-8.478-12.071-3.221-10.321-9.333-31.634-14.234-48.91H205.341c-6.266,0-11.345-4.221-11.345-9.426s5.079-7.8,11.345-7.8h13.185V59.681h22.568v0.263h28.248c-0.026-.09-0.049-0.174-0.075-0.263H292.9l14.041,44.566,19.248-38.494s3.2-6.946,6.869-7.337c4.085-.435,5.9-1.264,8.831,6.013,6.8,16.871,15.7,37.192,15.7,37.192L368.376,78.8s9.664-17.934,27.474-20.379c0,0,19.411-5.387,35.323,7.232s17.694,30.6,15.7,39.234C444.553,114.92,433.167,138.3,401.737,138.3Zm-167.815-.789-27.007.344,25.512-55.417h27.006ZM349.166,36.823c-17.82,0-43.643.13-68.119,0.188-1.079,0-9.542,17.62-10.59,17.622-18.959.045-25.275,0.077-25.275,0.077s10.757-21.763,15.944-33.03C262.665,18.334,268.839,9.8,284.553,10c34.957,0.453,108.535,0,108.535,0a115.431,115.431,0,0,0-8.948,11.256C372.609,37.944,354.92,36.823,349.166,36.823Z" />
                    </svg>
                </Link >
                <div className="d gap-3">
                    {!mobile && menuItems.map((i, k) => (
                        <React.Fragment key={k}>
                            {!!i.link && (
                                <Link to={i.link} aria-label={`${k} +1`} ><div>{i.title}</div></Link>

                            )}
                            {!i.link && (
                                <DropDown title={i.title} options={i.items} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} scrollEvent={scrollEvent} isMobile={mobile} />
                            )}
                        </React.Fragment>
                    ))}
                    {!!mobile && (
                        <div className="hamburger" onClick={() => setOpenSideBar(!openSideBar)}>
                            <svg width="50" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="currentColor" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {!!openSideBar && (
                <div className="">
                    <div className="menu">
                        {menuItems.map((i, k) => (
                            <React.Fragment key={k}>
                                {!!i.link && (
                                    <Link to={i.link} aria-label={`${k} +1`} ><div>{i.title}</div></Link>

                                )}
                                {!i.link && (
                                    <DropDown title={i.title} options={i.items} openDropDown={openDropDown} setOpenDropDown={setOpenDropDown} scrollEvent={scrollEvent} isMobile={mobile} />
                                )}
                            </React.Fragment>
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
    color:${(props) => (!!props.$scrollEvent || !!props.$is404) ? 'black' : 'white'};
    background-color: ${(props) => (!!props.$scrollEvent || !!props.$is404) ? 'white' : 'none'};
    box-shadow:${(props) => (!!props.$scrollEvent || !!props.$is404) && '0 0 15px 0 var(--shadow)'} ;
    padding: 1em 0em;
    z-index: 2;
    .hamburger {
        position: fixed;
        top: 1em;
        right: 0;
        cursor: pointer;
        color: ${(props) => (!!props.$scrollEvent || !!props.$is404) ? '#1967d2' : 'white'};
    }
    a {
        color:${(props) => (!!props.$scrollEvent || !!props.$is404) ? 'black' : 'white'};
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
    .cls-1, .cls-2, .cls-3 {
        fill-rule: evenodd;
      }

      .cls-2 {
        stroke: #258bf4;
        stroke-width: 1px;
      }
`

export default Header
