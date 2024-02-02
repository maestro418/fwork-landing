import React, { Suspense } from "react";
import { useParams } from "react-router";

import HireCategory from "./category";
import HireDetail from "./detail";

import HireData from '../context/hiring.json'
import E404 from "../e404";

const validateCategory = (category: string) => {
    const data = HireData.find((i) => i.slug === category)
    if (!!data) {
        return true
    }
    return false
}

const HireDev = () => {
    const { slug, category } = useParams();
    if (!!slug && !!category) {

        return (
            <HireDetail slug={slug} category={category} />
        )
    } else if ((!slug && !!category && !!validateCategory(category) || (!slug && !category))) {
        return (
            <Suspense> <HireCategory /></Suspense >
        )
    } else {
        return (
            <E404 />
        )
    }
}


export default HireDev