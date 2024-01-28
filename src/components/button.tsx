import React from "react";
import styled from "styled-components";

interface ButtonProps {
    content: string
    padding?: string
    round?: string
    bgColor?: string
}

const Button = ({ content, padding, round, bgColor }: ButtonProps) => {
    return (
        <StyledButton>
            <button style={{ padding: `${!!padding ? padding : '0.5em 1.5em'}`, borderRadius: `${!!round ? round : '0.8em'}`, backgroundColor: `${!!bgColor ? bgColor : '#263640'}` }}>{content}</button>
        </StyledButton>
    )
}

const StyledButton = styled.div`
    button {
        margin: 10px;
        padding: 15px 30px;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;
        border-radius: 10px;
        display: block;
        border: 0px;
        font-weight: 700;
        box-shadow: 0px 0px 14px -7px #19f036;
        background-image: linear-gradient(45deg, #442fff 0%, #19e2f0  51%, #5c2fff  100%);
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    button:hover {
        background-position: right center;
        /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }

    button:active {
        transform: scale(0.95);
    }
`

export default Button