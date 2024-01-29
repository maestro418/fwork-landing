import React from "react";
import styled from "styled-components";

import { StyledButton } from "./button";

interface IntroBannerProps {
    title: string,
    desc?: string,
}

const IntroBanner = ({ title, desc }: IntroBannerProps) => {

    return (
        <StyledBanner>
            <div className="container">
                <div className="row main-content">
                    <div className="col-md-7">
                        <div className="h1 bold-550">
                            {title}
                        </div>
                        <div className="h4">
                            {desc}
                        </div>
                        <StyledButton className="w-50 d center middle gap">
                                <div>
                                    Hire Developer
                                </div>
                                <img src="hire.svg" alt="" width={25} />
                        </StyledButton>
                    </div>
                </div>
            </div>
            <img src="banner.png" className="fixed" width={700} alt="" />
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    width: 100%;
    padding: 6em 0 7em 0;
    background-image: url("header.png");
    background-repeat: no-repeat;
    color: var(--text-tertiary);

    .main-content {
        position: relative;
        &>:first-child {
            display: flex;
            flex-direction: column;
            gap: 2em;
            .h1 {
                font-size: 2.5em;
            }
            .h3 {
                font-size: 1.1em;
            }
            .h4 {
                font-size: 1em;
                line-height: 2;
            }                                           
        }
       
    }
    .fixed{
        position: absolute;
        top: 8em;
        right: 0;
    }    
    
`

export default IntroBanner