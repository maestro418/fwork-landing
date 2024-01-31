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
                        title: 'Web Development Services',
                        link: '/service/web-development'
                    },
                    {
                        title: 'Blockchain Development Services',
                        link: '/service/blockchain-development'
                    },
                    {
                        title: 'Software Development Services',
                        link: '/service/software-development'
                    },
                    {
                        title: 'PHP Development Services',
                        link: '/service/php-development'
                    },
                    {
                        title: 'See All',
                        link: '/hire-dev'
                    }
                ]
            },
            {
                title: 'Hire',
                link: '/hire-dev',
                items: []
            },
            {

                title: 'About us',
                link: 'https://fwork.io/about-us',
                items: []

            },
            {

                title: 'Contact us',
                link: 'https://fwork.io/contact-us',
                items: []
            },
            {

                title: 'Get started',
                link: 'https://fwork.io/login',
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