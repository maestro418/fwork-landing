import React from "react";
import styled from "styled-components";
// import Button from "./button";
import { Link } from "react-router-dom";
import { StyledButton } from "./button";

interface CaseCardProps {
    tech: string,
    title: string,
    img: string,
    team: Array<{ gender: string, member: string }>
    smallScreen: boolean
}

const CaseCard = ({ title, tech, img, team, smallScreen }: CaseCardProps) => {
    return (
        <StyledCaseCard>
            <div className="r-30">
                <img className="r-30" src={`img/${img}`} width='100%' />
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
                                <img src={`img/icon/${i.gender}.svg`} width={24} alt="" />
                            </div>
                            <div>{i.member}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Link to={`developer/${title}`} className="d mb-2">
                <div className="pr">Details</div><img src="img/icon/right-arrow.svg" width={16} alt="" />
            </Link>
        </StyledCaseCard>
    )
}

const StyledCaseCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
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
            color: var(--text-secondary);
        }   

        &>:last-child {
            font-size: 1.5em;
            color: white;
        }
    }
    &>:nth-child(3) {
        &>:nth-child(2) {
            color: var(--text-secondary);
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