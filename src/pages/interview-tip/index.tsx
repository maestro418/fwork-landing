import React, { Suspense } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ItvDetail from "./itv-detail";

const InterviewTip = () => {
    const { slug } = useParams<{ slug?: string }>()
    return (
        <>
            <Routes>
                <Route index element={<ItvDetail slug={slug} />} />
            </Routes>
        </>
    )


}

export default InterviewTip