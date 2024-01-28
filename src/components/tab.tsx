import React from "react";
import styled from "styled-components";

interface TabProps {
    tabItems: string[],
    selectedItem: string,
    children: React.ReactNode
    onClickItem: Function
}

const Tab = ({ tabItems, selectedItem, children }: TabProps) => {
    return (
        <StyledTab>
            <div className="d">
                {tabItems.map((i, k) => (
                    <div key={k} className={`${i === selectedItem ? "selected" : ''}`}>
                        {i}
                    </div>
                ))}
            </div>
            <div>
                {children}
            </div>
        </StyledTab>
    )
}

const StyledTab = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    .selected {
        color: var(--rb-secondary-border);
        border-bottom: 1px solid var(--rb-secondary-border);
    }
`

export default Tab;