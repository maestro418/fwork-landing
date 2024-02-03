import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface CaseCardProps {
    tech: string,
    title: string,
    img: string,
    team: Array<{ gender: string, member: string }>
    smallScreen: boolean
}

const CaseCard = ({ title, tech, img, team, smallScreen }: CaseCardProps) => {
    return (
        <Link to={""} aria-label="case-card">
            <StyledCaseCard>

                <div className="r-30">
                    <img className="r-30" src={`/img/${img}`} width='100%' alt="No image" />
                </div>
                <div>
                    <div>{tech}</div>
                    <div style={{ fontSize: smallScreen ? "1.2em" : "" }}>{title}</div>

                </div>
                <div style={{ display: smallScreen ? "none" : "" }}>
                    <hr />
                    <div className="mb">Development Team</div>
                    <div>
                        {team.map((i, k) => (
                            <div key={k} className="d">
                                <div>
                                    <img src={`/img/icon/${i.gender}.svg`} width={24} alt="No image" />
                                </div>
                                <div>{i.member}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </StyledCaseCard>
        </Link>

    )
}

const StyledCaseCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    cursor: pointer;
    &>:first-child {
        box-shadow: 0 0 10px 0 var(--shadow);
    }
    &>:nth-child(2) {
        div {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &>:first-child {
            color: #97a5b1;
        }   

        &>:last-child {
            font-size: 1.3em;
            color: #c9dff3
        }
    }
    &>:nth-child(3) {
        &>:nth-child(2) {
            color: #97a5b1;
        }   

        &>:last-child {
            color: #f0f0f0;
        }
    }
    hr {
        margin: 1rem 0;
        color: inherit;
        background-color: currentColor;
        border: 0;
        opacity: 0.5;
    }

    a {color: var(--text-secondary-hover);}
`

export default CaseCard