import React, { Suspense } from "react";

import BlogCategory from "./category";
import SubCategory from "./sub-category";
import BlogDetail from "./blog-detail";
import Loading from "../loading";

const Blogs = {
    'blog': <Suspense fallback={<Loading />}><BlogCategory /></Suspense>,
    'blog/category/:slug': <Suspense fallback={<Loading />}><SubCategory /></Suspense>,
    'blog/:slug': <Suspense fallback={<Loading />}><BlogDetail /></Suspense>
}

export default Blogs