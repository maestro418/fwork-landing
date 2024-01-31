import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "./icons";

interface DropDownProps {
    title: string
    options: { title: string, link: string }[],
    scrollEvent: boolean
    openDropDown: boolean,
    setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
    isMobile: boolean
}

const DropDown = ({ title, options, openDropDown, setOpenDropDown, scrollEvent, isMobile }: DropDownProps) => {
    return (
        <StyledDropwDown>
            {!isMobile && (
                <>
                    <div className="d middle cursor-pointer" onClick={() => setOpenDropDown(!openDropDown)}>
                        <div>{title}</div>
                        <div style={{ 'color': `${!!scrollEvent ? "black" : "white"}` }} >
                            <Icon icon={`${!!openDropDown ? "UpArrow" : "DownArrow"}`} />
                        </div>
                    </div>
                    <div className="dropdown">
                        {!!openDropDown && options.map((i, k) => (
                            <Link to={i.link} key={k} onClick={() => setOpenDropDown(false)}>{i.title}</Link>
                        ))}
                    </div>
                </>
            )}
            {!!isMobile && (
                <>
                    <a href="#" onClick={() => setOpenDropDown(!openDropDown)}><div>{title}</div></a>
                    {!!isMobile && !!openDropDown && (
                        <>
                            {options.map((i, k) => (
                                <a href={i.link} key={k} className="ml">{i.title}</a>
                            ))}
                        </>
                    )}
                </>
            )}

        </StyledDropwDown>
    )
}

const StyledDropwDown = styled.div`
    display: flex;
    flex-direction: column;
    position:relative;
    .middle {
        gap:0.5em;
    }
    .dropdown {
        background-color: white;
        position: absolute;
        width: 300px;
        top: 2em;
        display: flex;
        box-shadow:'0px 2px 9px rgba(0, 0, 0, 0.9)' ;
        flex-direction: column;
        a {
            color: #636b6f;
            padding: 0.7em;
            font-size: 1em;
            &:hover {
                background-color: var(--white-hover);
            }
        }
    }
`

export default DropDown