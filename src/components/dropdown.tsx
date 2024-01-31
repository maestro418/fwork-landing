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

    const dropdownRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutSide);

        return () => document.removeEventListener("mousedown", handleClickOutSide)
    }, [setOpenDropDown])

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
                    <div className="dropdown"  ref={dropdownRef}>
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
        border-radius: .4em;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        flex-direction: column;
        a {
            color: #636b6f;
            padding: 0.7em;
            font-size: .88em;
            &:hover {
                background-color: var(--white-hover);
            }
        }
    }
`

export default DropDown