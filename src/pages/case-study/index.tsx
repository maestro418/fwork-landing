import React from "react";
import { useParams } from "react-router-dom";

const CaseStudy = () => {
    const { slug } = useParams<{ slug?: string }>()
    return (
        <>
            <div>thisis case-study {slug} home</div>
        </>
    )
}

export default CaseStudy