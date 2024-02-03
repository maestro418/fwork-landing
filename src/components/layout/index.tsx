import React from "react";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";



const Layout = ({ children, is404 }: { children: React.ReactNode, is404?: boolean }) => {

    const headerProps = {
        menuItems: [
            {
                title: 'Home',
                link: '/',
                items: []
            },
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
                        title: 'Mobile App Development Services',
                        link: '/service/mobile-app-development'
                    },
                    {
                        title: 'AI Development Services',
                        link: '/service/ai-development'
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

                title: 'About Us',
                link: 'https://fwork.io/about-us',
                items: []

            },
            {

                title: 'Contact Us',
                link: 'https://fwork.io/contact-us',
                items: []
            }
        ]
    }
    return (
        <StyledLayout className="d column">
            <Header menuItems={headerProps.menuItems} is404={is404} />
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