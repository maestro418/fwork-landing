import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface BlogCardPropsType {
    banner: string
    title: string
    desc: string
    img: string
    link: string
}

const BlogCard = (props: BlogCardPropsType) => {
    const { banner, title, desc, img, link } = props;

    return (
        <StyledBlogCard>
            <Link to={link}>
                <div className="card-header">
                    <img src={`img/${img}`} className="w-100" alt="" />
                    <strong className="banner">{banner}</strong>
                    <div className="title">{title}</div>
                </div>
                <div className="card-body">
                    <div className="desc">{desc}</div>
                    <Link to={link} className="link">Read more</Link>
                </div>

            </Link>
        </StyledBlogCard>
    )
}

const StyledBlogCard = styled.div`
    box-shadow: 0 0 10px 0 var(--shadow);
    border-top-left-radius: 0.75em;
    border-top-right-radius: 0.75em;
    border-radius: 0.75em;
    margin: 1em 0;
    opacity: 0.9;
    .card-header {
        position: relative;
        color: var(--text-tertiary);
        
        img {
            border-top-left-radius: 0.75em;
            border-top-right-radius: 0.75em;
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
            background-image: linear-gradient(134deg, #FF8F00 39.06%, #FF5827 100%);
            border-radius: 0.4em;
        }

        .title {
            text-align: center;
            position: absolute;
            bottom: 0.5em;
            padding: 1em;
            font-size: 1.3em;
            width: 100%;
            background: linear-gradient(to bottom,transparent, black);
        }
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        padding: 1em;
        .desc {
            font-size: 0.9em;
            color: var(--text);
        }

        .link {
            color: var(--tertiary);
        }
    }

    &:hover {
        opacity: 1;
    }
    a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export default BlogCard;