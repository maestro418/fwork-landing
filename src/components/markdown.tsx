import React, { useEffect } from 'react';
import styled from 'styled-components';
import katex from 'katex';
// MdViewer { showToast } from 'context/helper';
import rehypeSanitize from "rehype-sanitize";


// import * as marked from 'marked';
import markdownit from 'markdown-it'
const md = markdownit()


// const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36);
const rehypePlugins = [rehypeSanitize];

const CHROME_MIN_VERSION_FOR_MARKDOWN = 200; // 70
const FIREFOX_MIN_VERSION_FOR_MARKDOWN = 200; // 64

// marked.setOptions({
// 	breaks: true,
// });

// const renderer = new marked.Renderer();

export const Markdown = ({ text }: { text: string }) => {
	// const { browser, darkTheme } = useSocket();
	const [html, setHtml] = React.useState(md.render(text));
	React.useEffect(() => {
		let _html = md.render(text);
		_html = _html.replace(/\$\$?([^\$]*)\$?\$/g, (full: any, a: any) => {
			return katex.renderToString(a, {
				throwOnError: false,
			});
		})
		setHtml(_html);
	}, [text])


	return (
		<StyledView dangerouslySetInnerHTML={{ __html: html }}>
			{/* {text} */}

			{/* <MarkdownPreview
				source={text}
				rehypePlugins={rehypePlugins}

				components={{
					code: ({ children = [], className, ...props }: any) => {
						if (typeof children === 'string' && /^\$\$(.*)\$\$/.test(children)) {
							const html = katex.renderToString(children.replace(/^\$\$(.*)\$\$/, '$1'), {
								throwOnError: false,
							});
							return <code dangerouslySetInnerHTML={{ __html: html }} style={{ background: 'transparent' }} />;
						}
						const code = props.node && props.node.children ? getCodeString(props.node.children) : children;
						if (
							typeof code === 'string' &&
							typeof className === 'string' &&
							/^language-katex/.test(className.toLocaleLowerCase())
						) {
							const html = katex.renderToString(code, {
								throwOnError: false,
							});
							return <code style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: html }} />;
						}
						return <code className={String(className)}>{children}</code>;

					}
				}}
			/> */}
		</StyledView>
	)
}

const StyledView = styled.div`

	.wmde-markdown {
		background-color: transparent;
		font-size: 1em;
		pre {
			font-size: 0.9em;
		}
	}
	

    line-height: 1.5;
	h1, h2, h3, h4, h5, h6 {
		margin-top: 1em;
		margin-bottom: 0.5em;
		line-height: 1.5;
	}
	h1 {
		font-size: 36px;
	}
	h2 {
		font-size: 30px;
	}
	h3 {
		font-size: 26px;
	}
	h4 {
		font-size: 20px;
	}
	p {
		margin-top: 0;
		margin-bottom: 0;
		line-height: 2.3em;
		font-size: .9em;
		color: #4b5763;
	}
	pre {
		overflow: auto;
		/* max-height: 600px; */
		background-color: var(--back-secondary);
		margin: 1em 0;
		border-radius: 0.3em;
		padding: 1em;
	}
	li {
		color: #535d66;
		line-height: 2em;
		font-size: .88em;
	}
	code {
		line-height: 1;
		line-break: anywhere;
		font-size: 0.9em;
	}
	table {
		min-width: 25em;
		thead {
			th {
				text-align: left;
				border-bottom: 1px solid var(--rb-border); 
			}
		}
		tr > :first-child {
			width: 10em;
		}
		td, th {
			padding-right: 1em;
		}
	}

	a,
	.link {
		cursor: pointer;
		text-decoration: none;
		color: var(--primary);
		transition: all 0.3s ease;

		&.link {
			color: var(--primary);
		}

		&:hover {
			color: var(--primary-hover);
		}

		&:active {
			color: var(--primary-active);
		}
	}

	img {width: 100%;}
`;

export default Markdown;