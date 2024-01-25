import React, { Suspense } from "react";

import ServiceCategory from "./service-category";
import ServiceDetail from "./service-detail";
import { useParams } from "react-router-dom";
import Loading from "../loading";

const DevService = () => {
    const { slug } = useParams<{ slug?: string }>();
    if (!!slug) {
        return (
            <Suspense fallback={<Loading />}><ServiceDetail slug={slug} /></Suspense>
        )
    }
    return (
        <Suspense fallback={<Loading />}><ServiceCategory /></Suspense>
    )

}

const DevServices = {
    'service': <DevService />,
    'service/:slug?': <DevService />
}

export default DevService