import React, { Suspense } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import HireCategory from "./category";
import HireDetal from "./detail";

const HireDev = () => {
    const { slug, category } = useParams();
    if (!!slug && !!category) {
        return (
            <HireDetal slug={slug} category={category} />
        )
    }
    return (
        <Suspense><HireCategory /></Suspense>
    )
}


export default HireDev