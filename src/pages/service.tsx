import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Layout from "../components/layout";
import data from "./service/service.json";
import IntroBanner from "../components/intro-banner";

interface dataType {
    title: string
    desc: string
    service: {
        title: string
        desc: string
        item: Array<{
            title: string
            desc: string
        }>
    }
    project: {
        title: string
        item: Array<{
            img: string
            tech: string
            title: string
            slug: string
            team: Array<{ [key: string]: string }>
        }>
    }
    article: string
    faq: {
        title: string
        item: Array<{ title: string, desc: string }>
    }
    blog: {
        title: string
        desc: string
        item: Array<{
            title: string
            desc: string
            banner: string
            img: string
            slug: string
        }>
    }
}

const Service = () => {

    const {id} = useParams();
    const [status, setStatus] = React.useState({} as dataType);

    React.useEffect(() => {
        const d = data.find((i) => (i.title === id))
        const _data = d?.item;
        if (!!_data) {
            setStatus(_data)
        }
    }, [id])

    return (
        <Layout>
            <StyledService>
                <IntroBanner title={status.title} desc={status.desc}/>
            </StyledService>
        </Layout>
    )
}

const StyledService = styled.div`

`
export default Service