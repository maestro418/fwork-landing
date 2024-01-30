import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface DropDownProps {
    title: string
    options: { title: string, link: string }[]
}

const DropDown = ({ title, options }: DropDownProps) => {
    return (
        <StyledDropwDown>

            <div>
                <div>{title}</div>
            </div>
            {options.map((i, k) => (
                <Link to={i.link} key={k}>{i.title}</Link>
            ))}
        </StyledDropwDown>
    )
}

const StyledDropwDown = styled.div`
    
`

export default DropDown