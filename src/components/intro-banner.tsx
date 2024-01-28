import React from "react";
import styled from "styled-components";

import { StyledButton } from "./button";

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

                    </div>

                </div>
                <StyledButton className="d center gap middle mt-2">
                    <div>Hire Developer</div>
                    <img src="hire.svg" alt="" width={25} />
                </StyledButton>
            </div>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    width: 100%;
    padding: 3em 0em;
    .row {
        .main-content {
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
    
`

export default IntroBanner