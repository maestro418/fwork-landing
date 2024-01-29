import React from "react";

import Header from "./header";
import Footer from "./footer";

import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {

    const headerProps = {
        menuItems: [
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
                title: 'FAQ',
                link: '/faq'
            },
            {
                title: 'Case Studies',
                link: 'https://fwork.io/blogs',
                items: []
            },
        ]
    }
    return (
        <StyledLayout className="d column">
            <Header menuItems={headerProps.menuItems} />
            <main>{children}</main>
            <Footer />
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