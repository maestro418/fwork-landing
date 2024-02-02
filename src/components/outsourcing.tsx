import React from "react";
import styled from "styled-components";

interface OutSourcingType {
    id?: number
    title: string
    desc: string
    img: string
}

const OutSourcing = (props: OutSourcingType) => {

    const { id, title, desc, img } = props;

    return (
        <StyledOutSourcing style={id === 1 ? { backgroundColor: 'rgb(47, 78, 131)', color: "white", height: "100%" } : { backgroundColor: '', color: "", height: "100%" }}>
            <div className="pl-1 pr-1">
                <img src={`/img/icon/${img}`} alt="No image" />
            </div>
            <div>
                <span>{title}</span>
                <div className="mt">{desc}</div>
            </div>
        </StyledOutSourcing>
    )
}

const StyledOutSourcing = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    padding: 1em 1em 1.7em 1em;
    border: 1px solid var(--border);
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    border-radius: 0.5em;
    transition: all .35s;
    
    &>:nth-child(2) {
        span {
            font-size: 1em;
            font-weight: bold;
            padding-right: 0.3em;
        }

        div {
            font-size: .85em;
            line-height: 1.5em;
            color: #6c757d;
        }
    }
`

export default OutSourcing