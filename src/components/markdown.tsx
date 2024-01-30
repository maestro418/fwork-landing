import React, { useEffect } from 'react';
import styled from 'styled-components';
import MarkdownPreview from '@uiw/react-markdown-preview';
import katex from 'katex';
import { getCodeString } from 'rehype-rewrite';
// MdViewer { showToast } from 'context/helper';
import rehypeSanitize from "rehype-sanitize";


// import * as marked from 'marked';
import sanitizeHtml from 'sanitize-html';
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
		_html = _html.replace(/\$\$?([^\$]*)\$?\$/g, (full, a) => {
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
				wrapperElement={{
					"data-color-mode": darkTheme ? 'dark' : 'light'
				}}

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
		font-size: 24px;
	}
	h2 {
		font-size: 20px;
	}
	h3 {
		font-size: 18px;
	}
	h4 {
		font-size: 16px;
	}
	p {
		margin-top: 0;
		margin-bottom: 0;
	}
	pre {
		overflow: auto;
		/* max-height: 600px; */
		background-color: var(--rb-back-secondary);
		margin: 1em 0;
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
`;

export default Markdown;