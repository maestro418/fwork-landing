import React from "react";
import styled from "styled-components";

import Layout from "../../components/layout";
import IntroBanner from "../../components/intro-banner";


const bannerContents = {
    title: 'Looking to Hire Developers With Specific Skills?',
    desc: 'Having problems finding software developers with specific skills? We can help.',
    btnContent: 'Hire Expert Developers'
}

const ServiceCategory = () => {
    return (
        <Layout>
            <StyledServiceCategory>
                <div>
                    <IntroBanner title={bannerContents.title} desc={bannerContents.desc} btnContent={bannerContents.btnContent} />
                </div>
            </StyledServiceCategory>
        </Layout>
    )
}

const StyledServiceCategory = styled.div`
    
`

export default ServiceCategory