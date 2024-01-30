import React from "react";
import styled from "styled-components";

interface processType {
    id?: number
    title: string
    desc: string
}

const HireProcess = (props: processType) => {

    const { id, title, desc } = props;


    return (
        <StyledHireProcess style={id === 1 ? { backgroundColor: 'rgb(47, 78, 131)', color: "white", height: "100%" } : { backgroundColor: '', color: "", height: "100%" }}>
            <div>
                <img style={{ background: id === 1 ? "linear-gradient(to bottom,transparent, rgb(62, 97, 156)" : "linear-gradient(to bottom,transparent, rgb(227, 241, 252))" }} src={`/img/icon/${id}.svg`} alt="" />
            </div>
            <div className="d middle">
                <span style={{paddingRight: !id ? "0" : "" }}>{id}</span>
                <div>{title}</div>
            </div>
            <div>{desc}</div>
        </StyledHireProcess>
    )
}

const StyledHireProcess = styled.div`
    padding: 2em 1em;
    border: 1px solid var(--shadow);
    box-shadow: 0 12px 25px 0 rgba(189, 189, 189, 0);   
    &>:first-child {
        img {
            border-radius: 50%;
            padding: 0.3em;
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
            line-height: normal;
        }
    }

    &>:last-child {
        
    }
`

export default HireProcess