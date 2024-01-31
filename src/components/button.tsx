import React from "react";
import styled, { css } from 'styled-components'

const buttonStyle = css`
    font-size: 15px;
    padding: 0.7em 2.7em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid white;
    background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
    color: white;

    &:hover {
        box-shadow: inset 0 0 10px rgba(245, 247, 246, 0.6), 0 0 9px 3px#cbdad333;
    }

    &:before {
        content: "";
        position: absolute;
        left: -4em;
        width: 2em;
        height: 100%;
        top: 0;
        transition: transform 2s ease-in-out;
        background: linear-gradient(to right, transparent 1%, rgba(255, 255, 255, 0.1) 90%,rgba(102, 101, 101, 0.1) 80% , transparent 100%);
    }

    &:hover:before {
        transform: translateX(40em);
    }
`
const hireBtnStyle = css`
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    font-weight: 700;
    border: 0;
    background-image: linear-gradient(45deg, rgba(0, 98, 255, 0.94) 0%, rgba(2, 96, 247, 0.52) 51%,rgba(0, 41, 107, 0.94) 100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }

    &:active {
        transform: scale(0.95);
    }

`

export const StyledButton = styled.button`
  ${buttonStyle}
`;

export const HireBtn = styled.button`
  ${hireBtnStyle}
`;