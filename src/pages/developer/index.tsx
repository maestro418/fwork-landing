import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

import DevSummary from "./dev-summary";
import DevDetail from "./dev-detail";
import Loading from "../loading";

const DevMain = () => {
    const { slug } = useParams<{ slug?: string }>();
    if (!!slug) {
        return (
            <Suspense fallback={<Loading />}><DevDetail id={slug} /></Suspense>
        )
    }
    return (
        <Suspense fallback={<Loading />}><DevSummary /></Suspense>
    )
}

export default DevMain