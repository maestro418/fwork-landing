import React from "react";
import styled, { css } from 'styled-components'
import { deflate } from "zlib";

const buttonStyle = css`
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #6b19f0;
    background-image: linear-gradient(45deg, rgba(0, 41, 107, 0.94) 0%, rgba(2, 96, 247, 0.52) 51%,rgba(0, 41, 107, 0.94) 100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        background-position: right center;
        /* change the direction of the change here */
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