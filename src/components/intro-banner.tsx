import React from "react";
import styled from "styled-components";

import Button from "./button";
import BackImg from '../assets/img/bg.png'

interface IntroBannerProps {
    title: string,
    subTitle: string,
    desc: string,
    btnContent: string
}

const IntroBanner = ({ title, subTitle, desc, btnContent }: IntroBannerProps) => {
    return (
        <StyledBanner>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 main-content">
                        <div className="h1 bold-550">
                            {title}
                        </div>
                        <div className="h3">
                            {subTitle}
                        </div>
                        <div className="h4">
                            {desc}
                        </div>
                        <Button content={btnContent} padding="1em 3em" />
                    </div>
                </div>
            </div>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    width: 100%;
    padding: 3em 0em;
    background-image: url(${BackImg});
    background-repeat: no-repeat;
    background-size: cover;
    .row {
        .main-content {
            display: flex;
            flex-direction: column;
            gap: 2em;
            .h1 {
                font-size: 64px;
                color: var(--rb-text);
            }
            .h3 {
                font-size: 36px;
                color: var(--rb-text);
            }
            .h4 {
                color: var(--rb-text-secondary);
                line-height: 2;
            }
        }
    }
    
`

export default IntroBanner