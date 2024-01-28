import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "../button";

interface footerProps {
    logo: string
}

const footerItems = [
    {
        title: 'Hire Developers',
        items: [
            {
                title: 'Hire Data Engineers',
                link: ''
            },
            {
                title: 'Hire Mobile App Developers',
                link: ''
            },
            {
                title: 'Hire WordPress Developers',
                link: ''
            },
            {
                title: 'Hire PHP Developers',
                link: ''
            },
            {
                title: 'Hire Java Developers',
                link: ''
            },
            {
                title: 'Hire AngularJS Developers',
                link: ''
            },
            {
                title: 'Hire Android Developers',
                link: ''
            },
            {
                title: 'Hire iOS Developers',
                link: ''
            },
            {
                title: 'Hire Blockchain Developers',
                link: ''
            },
            {
                title: 'Hire Ruby On Rails Developers',
                link: ''
            },
            {
                title: 'See All',
                link: ''
            },
        ]
    },
    {
        title: 'Development Services',
        items: [
            {
                title: 'AI Development Services',
                link: ''
            },
            {
                title: 'Mobile App Development Services',
                link: ''
            },
            {
                title: 'Web Development Services',
                link: ''
            },
            {
                title: 'Blockchain Development Services',
                link: ''
            },
            {
                title: 'Software Development Services',
                link: ''
            },
            {
                title: 'PHP Development Services',
                link: ''
            },
        ]
    },
    {
        title: 'Informative',
        items: [
            {
                title: 'Blog',
                link: ''
            },
            {
                title: 'FAQ',
                link: ''
            },
            {
                title: 'Hiring Interview Tips',
                link: ''
            }
        ]
    },
    {
        title: 'Company',
        items: [
            {
                title: 'About Us',
                link: ''
            },
            {
                title: 'Our Top Vetted Developers',
                link: ''
            },
            {
                title: 'How It Works?',
                link: ''
            },
            {
                title: 'STEM Scholarship',
                link: ''
            },
            {
                title: 'Terms of Use',
                link: ''
            },
            {
                title: 'Privacy Policy',
                link: ''
            }
        ]
    },
]

const Footer = ({ logo }: footerProps) => {
    return (
        <StyledFooter>
            |<div className="d column gap-3 container" style={{ gap: '3em' }}>
                <div className="d column" style={{ gap: '1em' }}>
                    <Link to='/'>
                        <img src={logo} width={100} />
                    </Link>
                    <div className="h2">
                        Tell Us About Your Challenge & Get a Free Strategy Session
                    </div>
                    <div className="">
                        <Button content="Hire Expert Developers" bgColor="#152026" />
                    </div>
                </div>
                <div className="d between">
                    {footerItems.map((i, k) => (
                        <div className="d column gap" key={k} style={{ gap: '1em' }}>
                            <div className="h3">{i.title}</div>
                            {i.items.map((item, key) => (
                                <Link to={item.link} key={key}>{item.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    width: 100%;
    color: var(--rb-back-tertiary);
    background-color: var(--rb-back);
    padding: 2em 0em;
    a {
        color: var(--rb-back-tertiary);
    }
`

export default Footer