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
    setOpenSideBar?: React.Dispatch<React.SetStateAction<boolean>>;
    isMobile: boolean,
    is404?: boolean | undefined,

}


const DropDown = ({ title, options, openDropDown, setOpenDropDown, setOpenSideBar, scrollEvent, isMobile, is404 }: DropDownProps) => {

    const dropdownRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutSide);

        return () => document.removeEventListener("mousedown", handleClickOutSide)
    }, [])

    return (
        <StyledDropwDown>
            {!isMobile && (
                <div ref={dropdownRef}>
                    <div className="d middle cursor-pointer" onClick={() => setOpenDropDown(!openDropDown)}>
                        <div>{title}</div>
                        <div style={{ 'color': `${(!!scrollEvent || !!is404) ? "black" : "white"}` }} >
                            <Icon icon={`${!!openDropDown ? "UpArrow" : "DownArrow"}`} />
                        </div>
                    </div>
                    <div className="dropdown">
                        {!!openDropDown && options.map((i, k) => (
                            <Link to={i.link} aria-label={`${k} +1`} key={k} onClick={() => setOpenDropDown(false)}>{i.title}</Link>
                        ))}
                    </div>
                </div>
            )}
            {!!isMobile && (
                <>
                    <Link to="#" onClick={() => setOpenDropDown(!openDropDown)} aria-label="dropdown-menu"><div>{title}</div></Link>
                    {!!isMobile && !!openDropDown && !!setOpenSideBar && (
                        <>
                            {options.map((i, k) => (
                                <Link to={i.link} aria-label={`${k} +1`} key={k} className="ml" onClick={() => setOpenSideBar(false)}>{i.title}</Link>
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
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
                background-color: var(--white-hover);
                border-radius: .4em;
            }
        }
    }
`

export default DropDown