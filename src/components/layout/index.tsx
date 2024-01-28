import React from "react";

import Header from "./header";
import Footer from "./footer";

import Logo from '../../logo.png'
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {

    const headerProps = {
        logo: Logo,
        menuItems: [
            {
                title: 'Why Us',
                items: [{
                    title: 'Expert Dev Teams',
                    link: '/vetted'
                },
                {
                    title: 'AI-Powered Agile Process',
                    link: '/process'
                }]
            },
            {
                title: 'Services',
                items: [{
                    title: 'Al Development Services',
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
                {
                    title: 'See All',
                    link: ''
                }]
            },
            {
                title: 'Mobile',
                items: [{
                    title: 'Mobile Developers iOS Developers',
                    link: ''
                },
                {
                    title: 'Swift Developers',
                    link: ''
                },
                {
                    title: 'Android Developers',
                    link: ''
                },
                {
                    title: 'React Native Developers',
                    link: ''
                },
                {
                    title: 'Kotlin Developers',
                    link: ''
                },
                {
                    title: 'Flutter Developers',
                    link: ''
                },
                {
                    title: 'See All',
                    link: ''
                },
                ]
            },
            {
                title: 'AI',
                items: [{
                    title: 'AI Developers',
                    link: ''
                },
                {
                    title: 'Machine Learning',
                    link: ''
                },
                {
                    title: 'Developers',
                    link: ''
                },
                {
                    title: 'ChatGPT Developers',
                    link: ''
                },
                {
                    title: 'Data Engineers',
                    link: ''
                },]
            },
            {
                title: 'Case Studies',
                link: '/case-study',
                items: []
            },
        ]
    }

    return (
        <StyledLayout className="d column">
            <Header logo={headerProps.logo} menuItems={headerProps.menuItems} />
            <main>{children}</main>
            <Footer logo={headerProps.logo} />
        </StyledLayout>
    )
}

const StyledLayout = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    main {
        width: 100%;
    }
`

export default Layout