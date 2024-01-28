import React from "react";
import styled from "styled-components";
import Button from "./button";
import { Link } from "react-router-dom";

interface DevCardProps {
    avatar: string,
    uid: string,
    name: string,
    location: string,
    skill: string[],
}

const DevCard = ({ avatar, name, uid, location, skill }: DevCardProps) => {
    return (
        <StyledDevCard>
            <div className="">
                <img src={avatar} width={100} />
            </div>
            <div className="d column">
                <div className="d between">
                    <div>{name}</div>
                    <div>{location}</div>
                </div>
                <div className="d gap">
                    {skill.map((i, k) => (
                        <>
                            <div key={k}>{i}</div>
                        </>
                    ))}
                </div>
            </div>
            <Link to={`developer/${uid}`}>
                <Button content="View Profile" />
            </Link>

        </StyledDevCard>
    )
}

const StyledDevCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export default DevCard