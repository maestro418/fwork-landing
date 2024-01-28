import React from "react";
import styled from "styled-components";

interface TrustedProps {
    title: string,
    items: string[]
}

const TrustedCompany = ({ title, items }: TrustedProps) => {
    return (
        <StyledTrusted>
            <div className="h1">
                {title}
            </div>
            <div className="d between">
                {items.map((i, k) => (
                    <img src={i} key={k} width={70} />
                ))}
            </div>
        </StyledTrusted>
    )
}

const StyledTrusted = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 3em 0em;
    
`

export default TrustedCompany