import React, { useState } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const E404 = () => {
    const [mobile, setMobile] = useState(false);
    const getWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    const setResponsive = () => {
        if (getWidth() < 1140) {
            setMobile(true)
        } else {
            setMobile(false);
        }
    }

    React.useEffect(() => {
        setResponsive();
        window.addEventListener('resize', setResponsive);
        return () => {
            window.removeEventListener('resize', setResponsive);
        };
    }, [])

    return (
        <Layout is404={true}>
            <StyledE404Page className="container">
                <div className="img-404">
                    <img src="/img/404-page.svg" width="100%" alt="No image" />
                </div>
                <div className={`d gap w-100 center middle ${!!mobile && "column"}`}>
                    <div>Sorry! The page not found.</div>
                    <Link to="/" aria-label="e404">Go to Homepage</Link>
                </div>
            </StyledE404Page>
        </Layout>
    )
}

const StyledE404Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 100%;
    height: 100vh;
    color: black;
    .img-404 {
        width:40% ;
    }
    a {
        color: #1a5ab5;
        text-underline-offset: 4px;
        text-decoration: underline;
    }
`

export default E404
