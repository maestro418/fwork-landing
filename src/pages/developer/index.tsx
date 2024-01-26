import React from "react";
import { useParams } from "react-router-dom";

const DevProfile = () => {
    const { slug } = useParams<{ slug?: string }>();
    if (!!slug) {
        return (
            <>
                thisis {slug} dev page
            </>
        )
    }
    return (
        <>
            <div>
                Not Found
            </div>
        </>
    )
}

export default DevProfile