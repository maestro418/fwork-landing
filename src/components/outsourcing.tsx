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
                <img src={`/img/icon/${img}`} alt="" />
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
    border: 1px solid var(--shadow);
    box-shadow: 0 12px 25px 0 rgba(189, 189, 189, 0);   
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

    &:hover {
        background: #163eaf;
        span {
            color: white;
        }

        div {
            color: #b1bcdb;

        }
    }

    &:hover img {
        filter: brightness(0) invert(1);
        transition: all .35s cubic-bezier(.38, 3, .57, 1.6);
        transform: translate3d(0px, 0, 0);
    }
`

export default OutSourcing