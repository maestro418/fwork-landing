import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface DropDownProps {
    options: { title: string, link: string }[]
}

const DropDown = ({ options }: DropDownProps) => {
    return (
        <StyledDropwDown>
            <div>
                {options.map((i, k) => (
                    <Link to={i.link} key={k}>{i.title}</Link>
                ))}
            </div>
        </StyledDropwDown>
    )
}

const StyledDropwDown = styled.div`
    
`

export default DropDown