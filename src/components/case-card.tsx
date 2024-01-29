import React from "react";
import styled from "styled-components";
// import Button from "./button";
import { Link } from "react-router-dom";

interface CaseCardProps {
    tech: string,
    title: string,
    img: string,
    team: Array<{gender: string, member: string}>
    smallScreen: boolean
}

const CaseCard = ({ title, tech, img, team, smallScreen }: CaseCardProps) => {
    return (
        <StyledCaseCard>
            <div className="r-30 mb-2">
                <img className="r-30" src={`img/${img}`} width='100%' />
            </div>
            <div>
                <div>{tech}</div>
                <div style={{fontSize: smallScreen ? "1.2em" : ""}}>{title}</div>

            </div>
            <div style={{display: smallScreen ? "none" : ""}}>
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
            <button>here</button>
                <button>here</button>
            {/* <Link to={`developer/${uid}`}>
                <Button content="View Profile" />
            </Link> */}
        </StyledCaseCard>
    )
}

const StyledCaseCard = styled.div`
    translate: 0px -80px;
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
        &>:first-child {
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
`

export default CaseCard