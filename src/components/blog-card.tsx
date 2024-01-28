import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface blogCardPropsType {
    banner: string
    title: string
    desc: string
    img: string
    link: string
}

const blogCard = (props: blogCardPropsType) => {
    const {banner, title, desc, img, link} = props;

    return (
        <StyledBlogCard>
            <Link to={link}>
                <div className="card-header">
                    <img src={img} alt="" />
                    <strong className="banner">{banner}</strong>
                    <div className="title">{title}</div>
                </div>
                <div className="card-body pl">
                    <div className="desc">{desc}</div>
                    <Link to={link} className="link">Read more</Link>
                </div>
            </Link>
        </StyledBlogCard>
    )
}

const StyledBlogCard = styled.div`
    max-width: 457px;
    box-shadow: 0 0 10px 0 var(--rb-shadow);
    border-radius: 0.75em;
    margin: 1em 0;
    opacity: .9;
    .card-header {
        position: relative;
        color: var(--rb-text-tertiary);
        
        img {
            border-radius: 0.75em;
        }

        .banner {
            position: absolute;
            top: 1em;
            left: 0.5em;
            padding: .3em .6em;
            max-width: 40%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: .8em;
            background-color: #ff8b3e;
            border-radius: 0.4em;
        }

        .title {
            text-align: center;
            position: absolute;
            bottom: 0.5em;
            padding: 1em;
            font-size: 1.3em;
            background: linear-gradient(to bottom,transparent, black);
        }
    }

    .card-body {
        padding-bottom: 1em;
        .desc {
            font-size: .9em;
            padding-bottom: 0.5em;
            color: var(--rb-text);
        }

        .link {
            color: var(--rb-tertiary);
        }
    }

    &:hover {
        opacity: 1;
    }
`;

export default blogCard;