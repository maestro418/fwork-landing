import React from "react";
import styled from "styled-components";

interface processType {
    id?: number
    title: string
    desc: string
    img: string
}

const HireProcess = (props: processType) => {

    const { id, title, desc, img } = props;

    return (
        <StyledHireProcess style={ id === 1 ? { backgroundColor: '#163eaf', color: "white", height: "100%" } : { backgroundColor: '', color: "", height: "100%" }}>
            <div>
                <img style={{ background: id === 1 ? "linear-gradient(to bottom,transparent, rgb(62, 97, 156)" : "linear-gradient(to bottom,transparent, rgb(227, 241, 252))" }} src={`/img/icon/${img}`} alt="" />
            </div>
            <div className="d middle">
                <span style={{paddingRight: !id ? "0" : "" }}>{id}</span>
                <div>{title}</div>
            </div>
            <div style={{color: id === 1 ? "#b1bcdb" : "" }}>{desc}</div>
        </StyledHireProcess>
    )
}

const StyledHireProcess = styled.div`
    padding: 2em 1em;
    border: 1px solid var(--shadow);
    box-shadow: 0 0 20px 0 var(--shadow);
    border-radius: .5em;
    &>:first-child {
        img {
            border-radius: 50%;
            padding: 0.3em;
            margin-bottom: .2em;
            background: linear-gradient(to bottom,transparent, rgb(235, 245, 253));
        }

    }

    &>:nth-child(2) {
        span {
            font-size: 3em;
            font-weight: bold;
            padding-right: 0.3em;
        }

        div {
            font-size: 1.1em;
            font-weight: bold;
            line-height: 1.4em;
        }
    }

    &>:last-child {
        color: #6c757d;
        line-height: 2em;
        font-size: .9em;
    }
`

export default HireProcess