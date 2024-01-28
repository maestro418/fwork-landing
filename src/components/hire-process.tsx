import React from "react";
import styled from "styled-components";

interface processType {
    id: number
    title: string
    desc: string
}

const HireProcess = (props: processType) => {

    const { id, title, desc } = props;


    return (
        <StyledHireProcess style={id === 1 ? { backgroundColor: 'rgba(0, 98, 255, 0.94)', color: "white" } : { backgroundColor: '', color: "" }}>
            <div>
                <img src={`${id}.svg`} alt="" />
            </div>
            <div className="d middle">
                <span className="pr">{id}</span>
                <div>{title}</div>
            </div>
            <div>{desc}</div>
        </StyledHireProcess>
    )
}

const StyledHireProcess = styled.div`
    padding: 1em;
    border: 1px solid var(--shadow);
    box-shadow: 0 12px 25px 0 rgba(189, 189, 189, 0);   
    &>:nth-child(2) {
        span {
            font-size: 3em;
            font-weight: bold;
        }

        div {
            font-size: 1.1em;
            font-weight: bold;
            line-height: normal;
        }
    }

    &>:last-child {
        
    }
`

export default HireProcess