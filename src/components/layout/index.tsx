import React from "react";

import Header from "./header";
import Footer from "./footer";

import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {

    const headerProps = {
        menuItems: [
            {
                title: 'Services',
                items: [
                    {
                        title: 'AI Development Services',
                        link: ''
                    },
                    {
                        title: 'Mobile Development Services',
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
                    }
                ]
            },
            {
                title: 'Blog',
                link: '#blog',
                items: []
            },
            {
                title: 'FAQ',
                link: '#faq',
                items: []
            },

            {
                title: 'Case Studies',
                link: '#case',
                items: []
            }
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