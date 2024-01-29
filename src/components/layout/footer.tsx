import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { StyledButton } from "../button";

type footerProps = {
    mobile: Boolean
}

const footerItems = [
    {
        icon: 'img/icon/address.png',
        desc: 'Hong Kong',
        link: 'https://t.me/fwork_io',
    },
    {
        icon: 'img/icon/Vector.png',
        desc: 'info@fwork.com',
        link: 'https://t.me/fwork_io',
    },
    {
        icon: 'img/icon/telegram.svg',
        link: 'https://t.me/fwork_io',
        desc: 'Join Telegram'
    }
]

const overView = `Fwork is a premier provider of expert developer support services, connecting clients with highly skilled developers to offer top-notch technical guidance and solutions. We are dedicated to delivering exceptional service, solving complex technical challenges, and empowering clients with the expertise they need to succeed`

const Footer = () => {
    const [mobile, setMobile] = useState(false);
    const getWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    const setResponsive = () => {
        if (getWidth() < 992) {
            setMobile(true)
        } else {
            setMobile(false);
        }
    }
    React.useEffect(() => {
        setResponsive();
        window.addEventListener('resize', setResponsive);
        return () => {
            window.removeEventListener('resize', setResponsive);
        };
    }, [])

    return (
        <StyledFooter mobile={mobile}>
            <div className="container">
                <div className={`d between ${!!mobile ? 'column' : ''}`}>
                    <div className="d column text-center" style={{ gap: '1em' }}>
                        <Link to='/'>
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 32" width="132" height="32"><path fill="currentColor" d="m124.7 25.5l-0.4 2.9c0 0-2.7 0-5.1-1.2-2.1-1-4.9-3.2-4.9-3.2v4.4h-4v-7.3c0 0-2.4-1.6-5.1-1.4-1.7 0.2-3.4 0.9-4.8 1.8l-0.1 6.9h-4.5v-12.7c0 0 0-0.3 0.1-0.8q0-0.2 0-0.3c0-1.8 1.4-3.2 3.2-3.2 1.7 0 3.1 1.4 3.1 3.2 0 0.7-0.2 1.4-0.6 1.9q-0.1 0.1-0.2 0.2c-0.6 0.7-1.4 1.1-2.3 1.1 0.2 0.1 0.7 0.4 1.3 0.2v0.1c1.4-0.5 4-1.3 5.8-1.1 1 0 2.6 0.4 4.3 0.6 2.4 0.3 4-0.1 4-0.1 2.7-0.6 4.7-1.2 7.7-4.2l1.3 2c0 0-5.2 5.3-9 5.3 0 0 3 2.5 5.3 3.7 2.5 1.3 4.9 1.2 4.9 1.2zm-10.2-8q0 0 0 0 0 0 0 0zm-1.9-0.2c-1.7 0-3.1-1.4-3.1-3.2 0-1.8 1.4-3.2 3.1-3.2 1.7 0 3.2 1.4 3.2 3.2 0 1.8-1.5 3.2-3.2 3.2zm-27 11.5c0 0-3 0.2-5.3-3l1.2-3.8c0 0 1.4 2.9 4.3 3.2 3.3 0.2 4.9-3 4.9-4.3 0-1.1-0.5-4.5-4-4.7-0.7 0-2-0.1-2.7 0.6 0 0-2.8 0.7-5.5 10.3 0 0-0.1 1.8-1.7 1.8-0.9 0-1.2-0.6-1.7-2-1.3-3.2-3.3-7.8-3.3-7.8l-3.7 8c0 0-0.6 1.9-2.5 1.6-1.1-0.1-1.4-1.3-1.7-2.4-0.6-2.1-1.9-6.4-2.8-9.8h-14.8c-1.3 0-2.3-0.9-2.3-1.9 0-1.1 1-1.6 2.3-1.6h2.6 4.5q0 0 0 0h5.7q0 0 0 0h4.7l2.8 8.9 3.9-7.7c0 0 0.6-1.4 1.3-1.5 0.9-0.1 1.2-0.2 1.8 1.2 1.4 3.4 3.2 7.5 3.2 7.5l2.1-4.6c0 0 1.9-3.6 5.5-4.1 0 0 3.9-1.1 7.1 1.5 3.2 2.5 3.5 6.1 3.1 7.8-0.4 2.1-2.7 6.8-9 6.8zm-33.6-0.2l-5.4 0.1 5.1-11.2h5.4zm23.1-20.2c-3.6 0-8.8 0.1-13.7 0.1-0.2 0-1.9 3.5-2.1 3.5-3.8 0-5 0-5 0 0 0 2.1-4.4 3.1-6.6 0.4-0.7 1.6-2.4 4.7-2.4 7 0.1 21.8 0 21.8 0 0 0-1 1.1-1.8 2.3-2.3 3.3-5.9 3.1-7 3.1z"></path><path fill="currentColor" d="m20.2 21v-9.6h-19.2v-6.4h30.4v16z"></path><path fill="#1967d2" d="m18.6 22.6h19.2v5.6h-29.6v-15.2h10.4z"></path></svg>
                        </Link>
                        <div className="h2">
                            Tell Us About Your Challenge & Get a Free Strategy Session
                        </div>
                        <div className="h4">
                            {overView}
                        </div>
                    </div>
                    <div className="contact">
                        <div className="h2">Contact Us </div>
                        <div className="d column">
                            {footerItems.map((i, k) => (
                                <Link to={i.link} key={k} className="d w-100 gap middle">
                                    <img src={i.icon} width={30} />
                                    <div className="hide">
                                        {i.desc}
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div<footerProps>`
    width: 100%;
    color: white;
    background-image: url('img/header.png');
    padding: 3em 0em;
    a {
        color: white;
    }
    .contact {
        display: flex;
        flex-direction: ${(props) => !!props.mobile ? 'row' : 'column'};
        gap: 2em;
        .h2 {
             display: ${(props) => !!props.mobile && 'none'};
        }       
        
        .column {
            width: 100%;
            gap: 1.5em;
            .hide {
                display: block;
            }
            flex-direction: ${(props) => !!props.mobile && 'row'};
            justify-content:  ${(props) => !!props.mobile && 'space-between'};
            @media screen and (max-width:580px) {
                
                justify-content: space-between;
                .hide {
                    display: none;
                    visibility: hidden;
                }
                a {
                    justify-content: center;
                }
            }
        }
    }
    .between {
        gap: 2em;
    }

    /* .h1 {
        font-size: 2.5em;
        @media screen and (max-width:668px) {
            font-size: 2em;
        }
        @media screen and (max-width:360px) {
            font-size: 1.5em;
        }
    }
    .h3 {
         font-size: 1.5em;
        @media screen and (max-width:668px) {
            font-size: 1em;
        }
        @media screen and (max-width:360px) {
            font-size: 0.8em;
        }
    }
    .h4 {
        font-size: 1em;
        line-height: 2;
        @media screen and (max-width:668px) {
            font-size: 0.8em;
            line-height: 2;
        }
    }    */
`

export default Footer