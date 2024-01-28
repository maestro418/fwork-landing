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
        border: 1px solid none;
        color: var(--rb-back-tertiary);
    }
`

export default Button