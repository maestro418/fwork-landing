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
                <img width={!isOpen ? 25 : 20} src={`${!isOpen ? "img/icon/hamburger.svg" : "img/icon/dismiss.svg"}`} alt="" />
                <div>{title}</div>
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

    .accordion-header {
        font-size: 1.1em;
        display: flex;
        gap: 1em;
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
