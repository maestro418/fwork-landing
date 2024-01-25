import React, { Suspense } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import HireCategory from "./hire-category";
import HireDetail from "./hire-detail";
import Loading from "../loading";

const HireDev = () => {
    const { slug } = useParams<{ slug?: string }>();
    if (!!slug) {
        return (
            <Suspense fallback={<Loading />}><HireDetail slug={slug} /></Suspense>
        )
    }
    return (
        <Suspense fallback={<Loading />}><HireCategory /></Suspense>
    )
}

export default HireDev