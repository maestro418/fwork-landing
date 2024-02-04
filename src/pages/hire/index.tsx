import React, { Suspense } from "react";
import { useParams } from "react-router";

import HireData from '../context/hiring.json'
import E404 from "../e404";
import Loading from "../loading";

const HireDetail = React.lazy(() => import('./detail'))
const HireCategory = React.lazy(() => import('./category'))

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
            <Suspense fallback={<Loading />}><HireDetail slug={slug} category={category} allData={HireData} /></Suspense>
        )
    } else if ((!slug && !!category && !!validateCategory(category) || (!slug && !category))) {
        return (
            <Suspense fallback={<Loading />}> <HireCategory allData={HireData} /></Suspense >
        )
    } else {
        return (
            <E404 />
        )
    }
}


export default HireDev