import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import ParticlesContainer from "react-particles";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";


import { HireBtn } from "./button";
import ParticlesContainer from "./particle-content";

interface IntroBannerProps {
    title: string | undefined,
    desc?: string,
    bgImg: string
}

type StyledBannerProps = {
    $bgImg: string
    $isMobile: Boolean
}

const IntroBanner = ({ title, desc, bgImg }: IntroBannerProps) => {
    const [mobile, setMobile] = useState(false);
    const getWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    const setResponsive = () => {
        if (getWidth() < 1140) {
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
        <StyledBanner $isMobile={mobile} $bgImg={bgImg}>
            <div className="container">
                <div className="row main-content">
                    <div className="">
                        <div className="h1 bold-550">
                            {title}
                        </div>
                        <div className="h4">
                            {desc}
                        </div>
                        <HireBtn className={`${!!mobile ? 'btn-mobile' : 'w-50'}`}>
                            <Link to="https://fwork.io/freelancers" aria-label="hire-btn" className={`btn-hire d center middle `}>
                                <div className="h4">
                                    Hire Developers
                                </div>
                                <img src="/img/hire.svg" alt="No image" width={25} />
                            </Link>
                        </HireBtn>
                    </div>
                </div>
            </div>

        </StyledBanner>
    )
}

const StyledBanner = styled.div<StyledBannerProps>`
    width: 100%;
    
    padding: 6em 0 5em 0;
    background-image: url(${(props) => `${!!props.$isMobile ? `/img/header.png` : `${props.$bgImg}`}`});
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--text-tertiary);
    .main-content {
        position: relative;
        z-index: 1;
        width: ${(props) => !!props.$isMobile ? '100%' : '60%'};
        text-align: ${(props) => !!props.$isMobile && 'center'};
        &>:first-child {
            display: flex;
            flex-direction: column;
            padding: 1em;
            gap: 2em;    
            /* .h1 {
                font-size: 2.5em;
                @media screen and (max-width:668px) {
                    font-size: 2em;
                }
            }
            .h4 {
                font-size: 1em;
                line-height: 2;
                @media screen and (max-width:668px) {
                    font-size: 0.8em;
                    line-height: 2;
                }
            }                                            */
        }
        .btn-mobile {
            width: 50%;
            align-self: center;
            @media screen and (max-width:668px) {
                width: 80%;
            }
        }
        .btn-hire{
            color: white;
            gap:0.5em;
            @media screen and (max-width:360px) {
                gap: 0.1em;
            }
        }
    }
    .fixed{
        position: absolute;
        right: 0;
        top:calc(18%);
        width: 35%;
        display: ${(props) => !!props.$isMobile && 'none'};
        img {
            width:100%;
        }
        @media screen and (max-width: 1400px) {
            width: 40%;
            top: 25%; 
        }

        @media screen and (max-width: 1280px) {
            width: 45%;
            top: 24%;
        }
    }
    .h1 {
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
    }   
    
`

export default IntroBanner