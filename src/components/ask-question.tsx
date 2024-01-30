import React, { useState, useRef } from "react";
import styled from "styled-components";

interface QuestionPropsType {
    title: string
    desc: string
    isOpen: boolean
    onAccordian: () => void
}

const AskQuestion = ({ title, desc, isOpen, onAccordian }: QuestionPropsType) => {
    const contentRef = useRef<HTMLDivElement>(null);
    return (
        <StyledAskQuestion>
            <div className="accordion-header" onClick={onAccordian}>
                <div>{title}</div>
                <img width={30} src={`${isOpen ? "/img/icon/arrow-down.svg" : "/img/icon/arrow-up.svg"}`} alt="" />
            </div>
            <div
                ref={contentRef}
                className="accordion-body"
                style={
                    isOpen
                        ? { height: contentRef.current?.scrollHeight }
                        : { height: "0px" }
                }
            >
                {desc}
            </div>
            <hr />
        </StyledAskQuestion>
    )
}

const StyledAskQuestion = styled.div`
    padding: .5em 0;
    cursor: pointer;
    .accordion-header {
        color: #0f258b;
        font-size: 1.1em;
        display: flex;
        justify-content: space-between;
    }

    .accordion-body {
        margin-top: .3em;
        overflow: hidden;
        transition: height 0.3s ease;
        color: var(--text);
        opacity: .9;
        padding-inline: 1em;
    }
`;

export default AskQuestion
