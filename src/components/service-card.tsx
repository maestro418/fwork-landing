import React from "react";

import styled from "styled-components";
import { StyledButton } from "./button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
    icon?: string,
    desc: string,
    btnLink?: string,
    btnContent?: string,
    bgColor?: string
    title?: string
}
type StyledCardProps = {
    $bgColor?: string
}

const ServiceCard = ({ title, icon, desc, bgColor, btnContent, btnLink }: ServiceCardProps) => {
    return (
        <StyledServiceCard $bgColor={bgColor}>
            <div className="" >
                <img src={icon} width={50} />
            </div>
            <div>
                {title}
            </div>
            <div>
                {desc}
            </div>
            {btnLink && (
                <Link to={btnLink} >
                    <StyledButton className="btn">{btnContent}</StyledButton>
                </Link >
            )

            }

        </StyledServiceCard >
    )
}

const StyledServiceCard = styled.div<StyledCardProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em 2em;
    background-color: ${(props) => props.$bgColor};
    justify-content: space-between;
    color:${(props) => props.$bgColor == '#ebeaea' ? 'black' : 'white'};
    .btn {
        padding: 0.5em 1em;
        border-radius: 0.5em;
        border: 1px solid ${(props) => props.$bgColor == '#ebeaea' ? '#0077ff' : 'white'};
        background-color: transparent;
        color:${(props) => props.$bgColor == '#ebeaea' ? '#0077ff' : 'white'};
    }
`

export default ServiceCard