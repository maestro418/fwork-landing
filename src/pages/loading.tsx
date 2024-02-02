import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

const Loading = () => {
    return (
        <Layout is404={true}>
            <StyledLoading className="containers">
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            </StyledLoading>
        </Layout>
    )
}

const StyledLoading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
    .loading-spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - 40px); 
    }

    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-top: 4px solid #1967d2; 
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default Loading