import React from 'react'

export const IconViewer = () => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
			{Object.keys(icons).map((i, k) => (
				<div key={k} className='d middle center' style={{ width: 120, height: 80 }}>
					<div className='d middle center'>
						<Icon icon={i} size={48} fill="var(--color-secondary)" />
						<span>{i}</span>
					</div>

				</div>
			))}
		</div>
	)
}

interface IconProps {
	className?: string
	fill?: string
	size?: number | string
	marginLeft?: number
	margin?: number
	icon: string
}
export const Icon = ({ className, fill, size, icon, marginLeft, margin }: IconProps) => {
	return <div className={`${className} d middle center`} style={{ color: fill, width: size || 16, height: size || 16, marginLeft: marginLeft || 0, marginRight: margin || 0, lineHeight: 1 }}>
		{icons[icon] as any}
	</div>
}

const icons = {
	Heart: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
	),
	Mouse: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z" stroke="currentColor" stroke-width="1.5" />
			<path d="M10.5 8.5C10.5 7.67157 11.1716 7 12 7C12.8284 7 13.5 7.67157 13.5 8.5V10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5V8.5Z" stroke="currentColor" stroke-width="1.5" />
			<path d="M12 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
		</svg>
	),
	Resize: (
		<svg fill="currentColor" width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M25.99 6.042l-0.004 9.735-3.732-3.733-4.454 4.455-2.665-2.665 4.454-4.454-3.384-3.383 9.785 0.045zM11.494 22.805l3.238 3.182-9.722 0.017 0.004-9.68 3.815 3.815 4.925-4.924 2.665 2.665-4.925 4.925z"></path>
		</svg>
	),
	Send: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	),
	Easy: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#6b9bd2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
	),
	Optimized: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#6b9bd2" stroke-width="3" stroke-linecap="round" stroke-linejoin="arcs"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
	),
	Dollar: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#6b9bd2" stroke-width="3" stroke-linecap="round" stroke-linejoin="arcs"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
	),
	Free: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#6b9bd2" stroke-width="3" stroke-linecap="round" stroke-linejoin="arcs"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
	),
	Community: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#6b9bd2" stroke-width="3" stroke-linecap="round" stroke-linejoin="arcs"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
	),
	Editing: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#6b9bd2" stroke-width="3" stroke-linecap="round" stroke-linejoin="arcs"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
	),
	Outlined: (
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-outlined">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="outlined" clip-path="url(#clip-outlined)">
				<g id="color-filter-sharp-svgrepo-com" transform="translate(-32 -45.796)">
					<g id="circle-area-svgrepo-com" transform="translate(32 45.796)">
						<path id="Path_466" data-name="Path 466" d="M0,0H63.647V63.647H0Z" fill="none" />
					</g>
				</g>
				<g id="color-filter-sharp-svgrepo-com-2" data-name="color-filter-sharp-svgrepo-com" transform="translate(-27.839 -67.933)">
					<g id="Ellipse_60" data-name="Ellipse 60" transform="translate(31 71.796)" fill="none" stroke="currentColor" stroke-width="6">
						<ellipse cx="21.074" cy="21.253" rx="21.074" ry="21.253" stroke="none" />
						<ellipse cx="21.074" cy="21.253" rx="18.074" ry="18.253" fill="none" />
					</g>
				</g>
				<g id="color-filter-sharp-svgrepo-com-3" data-name="color-filter-sharp-svgrepo-com" transform="translate(-12.97 -53.766)">
					<g id="Ellipse_60-2" data-name="Ellipse 60" transform="translate(30.97 71.766)" fill="none" stroke="currentColor" stroke-width="6">
						<circle cx="22" cy="22" r="22" stroke="none" />
						<circle cx="22" cy="22" r="19" fill="none" />
					</g>
				</g>
			</g>
		</svg>
	),
	Filled: (
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-filled">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="filled" clip-path="url(#clip-filled)">
				<g id="color-filter-sharp-svgrepo-com" transform="translate(-32 -45.796)">
					<g id="circle-area-svgrepo-com" transform="translate(32 45.796)">
						<path id="Path_466" data-name="Path 466" d="M0,0H63.647V63.647H0Z" fill="none" />
					</g>
				</g>
				<g id="color-filter-sharp-svgrepo-com-2" data-name="color-filter-sharp-svgrepo-com" transform="translate(-29.277 -69.467)">
					<g id="Path_467" data-name="Path 467" transform="translate(31 71.796)" fill="#e5879b">
						<path d="M 22.5 43 C 19.73163986206055 43 17.04714012145996 42.45825958251953 14.52108955383301 41.38983154296875 C 12.0802001953125 40.357421875 9.887639999389648 38.87902069091797 8.00430965423584 36.99568939208984 C 6.120979785919189 35.11235809326172 4.642580032348633 32.9197998046875 3.610169887542725 30.47891044616699 C 2.541739940643311 27.95285987854004 2 25.26836013793945 2 22.5 C 2 19.73163986206055 2.541739940643311 17.04714012145996 3.610169887542725 14.52108955383301 C 4.642580032348633 12.0802001953125 6.120979785919189 9.887639999389648 8.00430965423584 8.00430965423584 C 9.887639999389648 6.120979785919189 12.0802001953125 4.642580032348633 14.52108955383301 3.610169887542725 C 17.04714012145996 2.541739940643311 19.73163986206055 2 22.5 2 C 25.26836013793945 2 27.95285987854004 2.541739940643311 30.47891044616699 3.610169887542725 C 32.9197998046875 4.642580032348633 35.11235809326172 6.120979785919189 36.99568939208984 8.00430965423584 C 38.87902069091797 9.887639999389648 40.357421875 12.0802001953125 41.38983154296875 14.52108955383301 C 42.45825958251953 17.04714012145996 43 19.73163986206055 43 22.5 C 43 25.26836013793945 42.45825958251953 27.95285987854004 41.38983154296875 30.47891044616699 C 40.357421875 32.9197998046875 38.87902069091797 35.11235809326172 36.99568939208984 36.99568939208984 C 35.11235809326172 38.87902069091797 32.9197998046875 40.357421875 30.47891044616699 41.38983154296875 C 27.95285987854004 42.45825958251953 25.26836013793945 43 22.5 43 Z" stroke="none" />
						<path d="M 22.5 4 C 17.55846977233887 4 12.9127082824707 5.924339294433594 9.418521881103516 9.418521881103516 C 5.924339294433594 12.9127082824707 4 17.55846977233887 4 22.5 C 4 27.44153022766113 5.924339294433594 32.08728790283203 9.418521881103516 35.58148193359375 C 12.9127082824707 39.07566070556641 17.55846977233887 41 22.5 41 C 27.44153022766113 41 32.08728790283203 39.07566070556641 35.58148193359375 35.58148193359375 C 39.07566070556641 32.08728790283203 41 27.44153022766113 41 22.5 C 41 17.55846977233887 39.07566070556641 12.9127082824707 35.58148193359375 9.418521881103516 C 32.08728790283203 5.924339294433594 27.44153022766113 4 22.5 4 M 22.5 0 C 34.92641067504883 0 45 10.07358932495117 45 22.5 C 45 34.92641067504883 34.92641067504883 45 22.5 45 C 10.07358932495117 45 0 34.92641067504883 0 22.5 C 0 10.07358932495117 10.07358932495117 0 22.5 0 Z" stroke="none" fill="currentColor" />
					</g>
				</g>
				<g id="color-filter-sharp-svgrepo-com-3" data-name="color-filter-sharp-svgrepo-com" transform="translate(-12 -51.796)">
					<g id="Ellipse_60" data-name="Ellipse 60" transform="translate(31 71.796)" fill="#71bddc" stroke="currentColor" stroke-width="4">
						<circle cx="21" cy="21" r="21" stroke="none" />
						<circle cx="21" cy="21" r="19" fill="none" />
					</g>
				</g>
			</g>
		</svg>
	),
	Icon: (
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-icon">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="icon" clip-path="url(#clip-icon)">
				<g id="color-filter-sharp-svgrepo-com" transform="translate(-32 -45.796)">
					<g id="circle-area-svgrepo-com" transform="translate(32 45.796)">
						<path id="Path_466" data-name="Path 466" d="M0,0H63.647V63.647H0Z" fill="none" />
					</g>
				</g>
				<g id="Rectangle_129" data-name="Rectangle 129" transform="translate(20 21)" fill="currentColor" stroke="currentColor" stroke-width="4">
					<rect width="40" height="40" rx="3" stroke="none" />
					<rect x="2" y="2" width="36" height="36" rx="1" fill="none" />
				</g>
				<g id="Rectangle_131" data-name="Rectangle 131" transform="translate(5 5)" fill="none" stroke="currentColor" stroke-width="6">
					<rect width="40" height="40" rx="3" stroke="none" />
					<rect x="3" y="3" width="34" height="34" fill="none" />
				</g>
			</g>
		</svg>
	),
	Rounded: (
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-rounded">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="rounded" clip-path="url(#clip-rounded)">
				<g id="color-filter-sharp-svgrepo-com" transform="translate(-32 -45.796)">
					<g id="circle-area-svgrepo-com" transform="translate(32 45.796)">
						<path id="Path_466" data-name="Path 466" d="M0,0H63.647V63.647H0Z" fill="none" />
					</g>
				</g>
				<g id="Rectangle_129" data-name="Rectangle 129" transform="translate(5 5)" fill="none" stroke="currentColor" stroke-width="6">
					<rect width="40" height="40" rx="10" stroke="none" />
					<rect x="3" y="3" width="34" height="34" rx="7" fill="none" />
				</g>
				<g id="Rectangle_130" data-name="Rectangle 130" transform="translate(20 21)" fill="currentColor" stroke="currentColor" stroke-width="4">
					<rect width="40" height="40" rx="10" stroke="none" />
					<rect x="2" y="2" width="36" height="36" rx="8" fill="none" />
				</g>
			</g>
		</svg>
	),
	Glyph: (
		<svg width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-glyph">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="glyph" clip-path="url(#clip-glyph)">
				<g id="color-filter-sharp-svgrepo-com" transform="translate(-32 -45.796)">
					<g id="circle-area-svgrepo-com" transform="translate(32 45.796)">
						<path id="Path_466" data-name="Path 466" d="M0,0H63.647V63.647H0Z" fill="none" />
					</g>
				</g>
				<g id="Rectangle_129" data-name="Rectangle 129" transform="translate(8 7)" fill="currentColor" stroke="currentColor" stroke-width="4">
					<rect width="40" height="40" rx="3" stroke="none" />
					<rect x="2" y="2" width="36" height="36" rx="1" fill="none" />
				</g>
				<g id="Rectangle_130" data-name="Rectangle 130" transform="translate(20 21)" fill="currentColor" stroke="currentColor" stroke-width="4">
					<rect width="40" height="40" rx="20" stroke="none" />
					<rect x="2" y="2" width="36" height="36" rx="18" fill="none" />
				</g>
			</g>
		</svg>
	),
	Sharp: (
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-sharp">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="sharp" clip-path="url(#clip-sharp)">
				<g id="color-filter-sharp-svgrepo-com" transform="translate(-32 -45.796)">
					<g id="circle-area-svgrepo-com" transform="translate(32 45.796)">
						<path id="Path_466" data-name="Path 466" d="M0,0H63.647V63.647H0Z" fill="none" />
					</g>
				</g>
				<g id="Rectangle_129" data-name="Rectangle 129" transform="translate(6 5)" fill="none" stroke="currentColor" stroke-width="6">
					<rect width="40" height="40" stroke="none" />
					<rect x="3" y="3" width="34" height="34" fill="none" />
				</g>
				<g id="Path_468" data-name="Path 468" transform="translate(12.076 12)" fill="currentColor">
					<path d="M 47.07426071166992 44.65917205810547 L 9.186050415039062 44.65917205810547 L 28.30816459655762 13.50026416778564 L 47.07426071166992 44.65917205810547 Z" stroke="none" />
					<path d="M 28.2921085357666 17.35012435913086 L 12.76003265380859 42.65917205810547 L 43.53500366210938 42.65917205810547 L 28.2921085357666 17.35012435913086 M 28.32422256469727 9.650394439697266 L 50.61352157592773 46.65917205810547 L 5.612064361572266 46.65917205810547 L 28.32422256469727 9.650394439697266 Z" stroke="none" fill="currentColor" />
				</g>
			</g>
		</svg>
	),
	Duotone: (
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-duotone">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="duotone" clip-path="url(#clip-duotone)">
				<g id="color-filter-sharp-svgrepo-com" transform="translate(-32 -45.796)">
					<g id="circle-area-svgrepo-com" transform="translate(32 45.796)">
						<path id="Path_466" data-name="Path 466" d="M0,0H63.647V63.647H0Z" fill="none" />
					</g>
				</g>
				<g id="color-filter-sharp-svgrepo-com-2" data-name="color-filter-sharp-svgrepo-com" transform="translate(-26.648 -67.319)">
					<ellipse id="Ellipse_60" data-name="Ellipse 60" cx="20.479" cy="20.946" rx="20.479" ry="20.946" transform="translate(31 71.796)" fill="currentColor" />
				</g>
				<g id="color-filter-sharp-svgrepo-com-3" data-name="color-filter-sharp-svgrepo-com" transform="translate(-12 -51.796)">
					<circle id="Ellipse_60-2" data-name="Ellipse 60" cx="21" cy="21" r="21" transform="translate(31 71.796)" fill="#71bddc" />
				</g>
			</g>
		</svg>
	),
	Multicolor: (
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-multicolor">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="multicolor" clip-path="url(#clip-multicolor)">
				<g id="color-filter-sharp-svgrepo-com" transform="translate(-32 -45.796)">
					<path id="Path_457" data-name="Path 457" d="M140.424,67.625a24.045,24.045,0,0,1,19.324-2.619A19.483,19.483,0,0,0,121.1,65,24.045,24.045,0,0,1,140.424,67.625Z" transform="translate(-76.336)" fill="#e5879b" />
					<path id="Path_458" data-name="Path 458" d="M291.132,232.51a24,24,0,0,1-7.5,16.915,19.474,19.474,0,0,0,19.67-33.5A24.142,24.142,0,0,1,291.132,232.51Z" transform="translate(-215.584 -143.865)" fill="#71bddc" />
					<path id="Path_459" data-name="Path 459" d="M283.571,194.033a24.047,24.047,0,0,1,7.071,12.877,19.5,19.5,0,0,0,8.317-13.709,19.463,19.463,0,0,0-15.389.832Z" transform="translate(-215.533 -123.372)" fill="#ad8aa1" />
					<path id="Path_460" data-name="Path 460" d="M52.635,232.51a24.142,24.142,0,0,1-12.176-16.59,19.476,19.476,0,0,0,19.678,33.5,24,24,0,0,1-7.5-16.915Z" transform="translate(0 -143.865)" fill="#f1e571" />
					<path id="Path_461" data-name="Path 461" d="M129.317,206.912a24.047,24.047,0,0,1,7.071-12.877A19.463,19.463,0,0,0,121,193.2a19.5,19.5,0,0,0,8.317,13.709Z" transform="translate(-76.251 -123.374)" fill="#e9ac7f" />
					<path id="Path_462" data-name="Path 462" d="M222.537,345.33a24.1,24.1,0,0,1-13.437,0,19.468,19.468,0,0,0,6.718,12.358A19.468,19.468,0,0,0,222.537,345.33Z" transform="translate(-151.73 -254.737)" fill="#92b790" />
					<path id="Path_463" data-name="Path 463" d="M209,236.894a19.482,19.482,0,0,0,13.466,0,19.472,19.472,0,0,0-6.733-12.494A19.472,19.472,0,0,0,209,236.894Z" transform="translate(-151.645 -151.131)" fill="#ba998a" />
				</g>
			</g>
		</svg>
	),
	Monocolor: (
		<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
			<defs>
				<clipPath id="clip-monocolor">
					<rect width="64" height="64" />
				</clipPath>
			</defs>
			<g id="monocolor" clip-path="url(#clip-monocolor)">
				<path id="Subtraction_1" data-name="Subtraction 1" d="M10.713,37.718h0a20,20,0,1,1,27.516-25.96c-.833-.084-1.686-.127-2.537-.127a25.029,25.029,0,0,0-25,25c0,.36.008.726.023,1.086Z" transform="translate(3.642 3.863)" fill="currentColor" />
				<g id="color-filter-sharp-svgrepo-com" transform="translate(20.342 21.425)">
					<ellipse id="Ellipse_60" data-name="Ellipse 60" cx="21" cy="20.5" rx="21" ry="20.5" transform="translate(-0.342 -0.425)" fill="currentColor" />
				</g>
			</g>
		</svg>
	),
	List: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path>
		</svg>
	),
	View: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
			<path fillRule="evenodd" clipRule="evenodd" d="M8 1C9.65685 1 11 2.34315 11 4V8C11 9.65685 9.65685 11 8 11H4C2.34315 11 1 9.65685 1 8V4C1 2.34315 2.34315 1 4 1H8ZM8 3C8.55228 3 9 3.44772 9 4V8C9 8.55228 8.55228 9 8 9H4C3.44772 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8Z" fill="currentColor" />
			<path fillRule="evenodd" clipRule="evenodd" d="M8 13C9.65685 13 11 14.3431 11 16V20C11 21.6569 9.65685 23 8 23H4C2.34315 23 1 21.6569 1 20V16C1 14.3431 2.34315 13 4 13H8ZM8 15C8.55228 15 9 15.4477 9 16V20C9 20.5523 8.55228 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H8Z" fill="currentColor" />
			<path fillRule="evenodd" clipRule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H16C14.3431 1 13 2.34315 13 4V8C13 9.65685 14.3431 11 16 11H20C21.6569 11 23 9.65685 23 8V4ZM21 4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4V8C15 8.55228 15.4477 9 16 9H20C20.5523 9 21 8.55228 21 8V4Z" fill="currentColor" />
			<path fillRule="evenodd" clipRule="evenodd" d="M20 13C21.6569 13 23 14.3431 23 16V20C23 21.6569 21.6569 23 20 23H16C14.3431 23 13 21.6569 13 20V16C13 14.3431 14.3431 13 16 13H20ZM20 15C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 20.5523 15 20V16C15 15.4477 15.4477 15 16 15H20Z" fill="currentColor" />
		</svg>
	),
	Play: (
		<svg fill="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
		</svg>
	),
	Terminal: (
		<svg fill="currentColor" viewBox="0 0 512 512" width="100%" height="100%">
			<path d="M448 64c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM99.9 149.6c-5.8 6.7-5 16.8 1.7 22.6L199.4 256l-97.8 83.9c-6.7 5.8-7.5 15.8-1.7 22.6s15.9 7.5 22.6 1.7l112-96c3.5-3 5.6-7.5 5.6-12.1s-2-9.1-5.6-12.1l-112-96c-6.7-5.8-16.8-5-22.6 1.7zM224 352c-8.8 0-16 7.2-16 16s7.2 16 16 16H400c8.8 0 16-7.2 16-16s-7.2-16-16-16H224z" />
		</svg>
	),
	Info: (
		<svg fill="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
			<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
		</svg>
	),
	Question: (
		<svg fill="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
			<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
		</svg>
	),
	Check: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
		</svg>
	),
	FilledCheck: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
		</svg>
	),
	Delete: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
		</svg>
	),
	CircleClock: (
		<svg fill="currentColor" viewBox="0 0 1024 1024" width="100%" height="100%">
			<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
			<path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
		</svg>
	),
	Cart: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	),
	CaretLeft: (
		<svg fill="currentColor" viewBox="0 0 1024 1024" width="100%" height="100%">
			<path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
		</svg>
	),
	CaretRight: (
		<svg fill="currentColor" viewBox="0 0 1024 1024" width="100%" height="100%">
			<path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
		</svg>
	),
	CaretDown: (
		<svg fill="currentColor" viewBox="0 0 1024 1024" width="100%" height="100%">
			<path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
		</svg>
	),
	ChevronRight: (
		<svg fill="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
		</svg>
	),
	ChevronLeft: (
		<svg fill="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
		</svg>
	),
	UserCircle: (
		<svg fill="currentColor" viewBox="0 0 496 512" width="100%" height="100%">
			<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
		</svg>
	),
	Attachment: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L9.47904 16.2154C9.15083 16.525 8.70569 16.6989 8.24154 16.6989C7.77738 16.6989 7.33224 16.525 7.00403 16.2154C6.67583 15.9059 6.49144 15.4861 6.49144 15.0483C6.49144 14.6106 6.67583 14.1907 7.00403 13.8812L14.429 6.88674" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	),
	File: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"></path>
		</svg>
	),
	Paper: (
		<svg stroke="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z" />
		</svg>
	),
	CardList: (
		<svg stroke="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
			<path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
		</svg>
	),
	ThumbsUp: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M12.596 2.043c1.075.076 2.059.281 2.743.956.698.688.92 1.696.92 2.941 0 .432-.057.955-.117 1.438-.026.2-.051.392-.076.572l-.056.429h2.05c.752 0 1.446.108 2.036.404.612.306 1.062.787 1.355 1.431.551 1.214.542 3.008.223 5.394l-.051.39c-.134 1.01-.248 1.872-.396 2.58-.166.795-.394 1.496-.816 2.05-.89 1.168-2.395 1.372-4.583 1.372-2.331 0-4.08-.418-5.544-.824l-.602-.17c-1.023-.29-1.852-.526-2.69-.586A1.75 1.75 0 0 1 5.25 22h-1.5A1.75 1.75 0 0 1 2 20.25V9.75C2 8.784 2.784 8 3.75 8h1.5a1.75 1.75 0 0 1 1.746 1.633 1.85 1.85 0 0 0 .523-.131c.961-.415 2.774-1.534 2.774-4.2V4.249c0-1.22 1.002-2.298 2.303-2.206ZM7 18.918c1.059.064 2.079.355 3.118.652l.568.16c1.406.39 3.006.77 5.142.77 2.277 0 3.004-.274 3.39-.781.216-.283.388-.718.54-1.448.136-.65.242-1.45.379-2.477l.05-.384c.32-2.4.253-3.795-.102-4.575-.16-.352-.375-.568-.66-.711-.305-.153-.74-.245-1.365-.245h-2.37c-.681 0-1.293-.57-1.211-1.328.026-.243.065-.537.105-.834l.07-.527c.06-.482.105-.921.105-1.25 0-1.125-.213-1.617-.473-1.873-.275-.27-.774-.455-1.795-.528-.351-.024-.698.274-.698.71v1.053c0 3.55-2.488 5.063-3.68 5.577-.372.16-.754.232-1.113.26ZM3.75 20.5h1.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25Z" />
		</svg>
	),
	ThumbsDown: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M12.596 21.957c-1.301.092-2.303-.986-2.303-2.206v-1.053c0-2.666-1.813-3.785-2.774-4.2a1.884 1.884 0 0 0-.523-.13A1.75 1.75 0 0 1 5.25 16h-1.5A1.75 1.75 0 0 1 2 14.25V3.75C2 2.784 2.784 2 3.75 2h1.5a1.75 1.75 0 0 1 1.742 1.58c.838-.06 1.667-.296 2.69-.586l.602-.17C11.748 2.419 13.497 2 15.828 2c2.188 0 3.693.204 4.583 1.372.422.554.65 1.255.816 2.05.148.708.262 1.57.396 2.58l.051.39c.319 2.386.328 4.18-.223 5.394-.293.644-.743 1.125-1.355 1.431-.59.296-1.284.404-2.036.404h-2.05l.056.429c.025.18.05.372.076.572.06.483.117 1.006.117 1.438 0 1.245-.222 2.253-.92 2.942-.684.674-1.668.879-2.743.955ZM7 5.082v7.779c.383.025.759.113 1.113.26 1.192.514 3.68 2.027 3.68 5.577v1.053c0 .436.347.734.698.71 1.021-.072 1.52-.258 1.795-.528.26-.256.473-.748.473-1.873 0-.328-.045-.768-.105-1.25l-.07-.527c-.04-.297-.079-.59-.105-.834-.082-.758.53-1.328 1.211-1.328h2.37c.625 0 1.06-.092 1.365-.245.285-.142.5-.359.66-.711.355-.78.422-2.176.102-4.574l-.05-.385c-.137-1.027-.243-1.827-.379-2.477-.152-.73-.324-1.165-.54-1.448-.386-.507-1.113-.781-3.39-.781-2.136 0-3.736.379-5.142.771-.191.052-.38.106-.568.16-1.039.296-2.059.587-3.118.651ZM3.75 3.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z" />
		</svg>
	),
	FileEarmarkPerson: (
		<svg fill="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
		</svg>
	),
	ChartLine: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
		</svg>
	),
	FillPlus: (
		<svg fill="currentColor" viewBox="0 0 1024 1024" width="100%" height="100%">
			<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z" />
		</svg>
	),
	Home: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z" />
		</svg>
	),
	Settings: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M2.21329 14.0601C1.92026 12.6755 1.93213 11.2743 2.21413 9.94038C3.32405 10.0711 4.29284 9.7035 4.60963 8.93871C4.92641 8.17392 4.50129 7.22896 3.62405 6.53655C4.36788 5.3939 5.35029 4.39471 6.53651 3.62289C7.22898 4.50059 8.17422 4.92601 8.9392 4.60914C9.70418 4.29227 10.0717 3.32308 9.94077 2.21281C11.3253 1.91977 12.7265 1.93164 14.0605 2.21364C13.9298 3.32356 14.2973 4.29235 15.0621 4.60914C15.8269 4.92593 16.7719 4.5008 17.4643 3.62356C18.6069 4.36739 19.6061 5.3498 20.3779 6.53602C19.5002 7.22849 19.0748 8.17373 19.3917 8.93871C19.7086 9.70369 20.6778 10.0713 21.788 9.94028C22.0811 11.3248 22.0692 12.726 21.7872 14.06C20.6773 13.9293 19.7085 14.2969 19.3917 15.0616C19.0749 15.8264 19.5 16.7714 20.3773 17.4638C19.6335 18.6064 18.651 19.6056 17.4648 20.3775C16.7724 19.4998 15.8271 19.0743 15.0621 19.3912C14.2971 19.7081 13.9296 20.6773 14.0606 21.7875C12.676 22.0806 11.2748 22.0687 9.94087 21.7867C10.0716 20.6768 9.70399 19.708 8.9392 19.3912C8.17441 19.0744 7.22945 19.4995 6.53703 20.3768C5.39439 19.633 4.3952 18.6506 3.62338 17.4643C4.50108 16.7719 4.92649 15.8266 4.60963 15.0616C4.29276 14.2967 3.32356 13.9291 2.21329 14.0601ZM4.00073 12.2104C5.10054 12.5148 6.00815 13.2117 6.45739 14.2963C6.90662 15.3808 6.75764 16.5154 6.19519 17.5083C6.29175 17.61 6.39096 17.7092 6.4927 17.8056C7.48558 17.2432 8.6201 17.0943 9.70456 17.5435C10.789 17.9927 11.4859 18.9002 11.7904 19.9999C11.9305 20.0037 12.0707 20.0038 12.2109 20.0001C12.5153 18.9003 13.2122 17.9927 14.2968 17.5435C15.3813 17.0942 16.5159 17.2432 17.5088 17.8057C17.6105 17.7091 17.7096 17.6099 17.806 17.5081C17.2437 16.5153 17.0947 15.3807 17.5439 14.2963C17.9931 13.2118 18.9007 12.5149 20.0004 12.2105C20.0042 12.0704 20.0043 11.9301 20.0006 11.7899C18.9008 11.4856 17.9932 10.7886 17.5439 9.70407C17.0947 8.61953 17.2437 7.48494 17.8061 6.49204C17.7096 6.39031 17.6104 6.2912 17.5086 6.19479C16.5158 6.75717 15.3812 6.9061 14.2968 6.4569C13.2123 6.0077 12.5154 5.10016 12.211 4.00044C12.0709 3.99666 11.9306 3.99659 11.7904 4.00024C11.486 5.10005 10.7891 6.00767 9.70456 6.4569C8.62002 6.90613 7.48543 6.75715 6.49252 6.1947C6.39079 6.29126 6.29169 6.39047 6.19528 6.49222C6.75766 7.48509 6.90659 8.61961 6.45739 9.70407C6.00819 10.7885 5.10065 11.4855 4.00092 11.7899C3.99715 11.93 3.99708 12.0702 4.00073 12.2104ZM12.0007 15.0002C10.3438 15.0002 9.00066 13.657 9.00066 12.0002C9.00066 10.3433 10.3438 9.00018 12.0007 9.00018C13.6575 9.00018 15.0007 10.3433 15.0007 12.0002C15.0007 13.657 13.6575 15.0002 12.0007 15.0002ZM12.0007 13.0002C12.5529 13.0002 13.0007 12.5525 13.0007 12.0002C13.0007 11.4479 12.5529 11.0002 12.0007 11.0002C11.4484 11.0002 11.0007 11.4479 11.0007 12.0002C11.0007 12.5525 11.4484 13.0002 12.0007 13.0002Z"></path>
		</svg>
	),
	Copy: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
		</svg>
	),
	Restore: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
		</svg>
	),
	Diamond: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M8 3l5 5-5 5-5-5 5-5z" />
		</svg>
	),
	Close: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" stroke="currentColor" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3" />
		</svg>
	),
	Admin: (
		<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="6" r="4" fill="currentColor" />
			<path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" fill="currentColor" />
		</svg>
	),
	Unlock: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path
				d="M12 1c1.654 0 3 1.346 3 3v3h-2v-3c0-0.551-0.449-1-1-1h-2c-0.551 0-1 0.449-1 1v3h0.25c0.412 0 0.75 0.338 0.75 0.75v7.5c0 0.412-0.338 0.75-0.75 0.75h-8.5c-0.412 0-0.75-0.338-0.75-0.75v-7.5c0-0.412 0.338-0.75 0.75-0.75h6.25v-3c0-1.654 1.346-3 3-3h2z">
			</path>
		</svg>
	),
	Link: (
		<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="100%" width="100%">
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
			<polyline points="15 3 21 3 21 9"></polyline>
			<line x1="10" y1="14" x2="21" y2="3"></line>
		</svg>
	),
	Location: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
		</svg>
	),
	Person: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
		</svg>
	),
	Upload: (
		<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
			<polyline points="17 8 12 3 7 8"></polyline>
			<line x1="12" y1="3" x2="12" y2="15"></line>
		</svg>
	),
	Download: (
		<svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="100%" width="100%">
			<path fillRule="evenodd" clipRule="evenodd" d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z" fill="currentColor"></path>
		</svg>
	),
	Star: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
		</svg>
	),
	Chat: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.3" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 13.7596 1.41318 15.4228 2.14781 16.8977C2.34303 17.2897 2.40801 17.7377 2.29483 18.1607L1.63966 20.6093C1.35525 21.6723 2.32772 22.6447 3.39068 22.3603L5.83932 21.7052C6.26233 21.592 6.71033 21.657 7.10228 21.8522C8.5772 22.5868 10.2404 23 12 23Z" fill="currentColor" />
			<path d="M10.9 12.0004C10.9 12.6079 11.3925 13.1004 12 13.1004C12.6075 13.1004 13.1 12.6079 13.1 12.0004C13.1 11.3929 12.6075 10.9004 12 10.9004C11.3925 10.9004 10.9 11.3929 10.9 12.0004Z" fill="currentColor" />
			<path d="M6.5 12.0004C6.5 12.6079 6.99249 13.1004 7.6 13.1004C8.20751 13.1004 8.7 12.6079 8.7 12.0004C8.7 11.3929 8.20751 10.9004 7.6 10.9004C6.99249 10.9004 6.5 11.3929 6.5 12.0004Z" fill="currentColor" />
			<path d="M15.3 12.0004C15.3 12.6079 15.7925 13.1004 16.4 13.1004C17.0075 13.1004 17.5 12.6079 17.5 12.0004C17.5 11.3929 17.0075 10.9004 16.4 10.9004C15.7925 10.9004 15.3 11.3929 15.3 12.0004Z" fill="currentColor" />
		</svg>
	),
	Message: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-2 13H7v-2h7v2zm3-4H7V9h10v2z"></path>
		</svg>
	),
	Bookmark: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"></path><path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"></path>
		</svg>
	),
	Logout: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
			<path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
		</svg>
	),
	OutlineStar: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
		</svg>
	),
	Lightning: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"></path>
		</svg>
	),
	Video: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"></path><path d="M9 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842L9.77 16.005a.5.5 0 0 1-.77-.42Z"></path>
		</svg>
	),
	Notification: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
		</svg>
	),
	Search: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
		</svg>
	),
	Edit: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			{/* <path fill="none" d="M0 0h24v24H0z"></path> */}
			<path d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34z"></path>
		</svg>
	),
	Phone: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
		</svg>
	),

	RightSingleArrow: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
		</svg>
	),

	DownArrow: (
		<svg fill="currentColor" viewBox="0 0 512 512" height="100%" width="100%">
			<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
		</svg>
	),

	ThreeDots: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
		</svg>
	),
	Start: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
		</svg>
	),
	Eye: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M8 3c-3.489 0-6.514 2.032-8 5 1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5zM11.945 5.652c0.94 0.6 1.737 1.403 2.335 2.348-0.598 0.946-1.395 1.749-2.335 2.348-1.181 0.753-2.545 1.152-3.944 1.152s-2.763-0.398-3.945-1.152c-0.94-0.6-1.737-1.403-2.335-2.348 0.598-0.946 1.395-1.749 2.335-2.348 0.061-0.039 0.123-0.077 0.185-0.114-0.156 0.427-0.241 0.888-0.241 1.369 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.481-0.085-0.942-0.241-1.369 0.062 0.037 0.124 0.075 0.185 0.114v0zM8 6.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"></path>
		</svg>
	),
	Day: (
		<svg fill="currentColor" width="100%" height="100%" x="0px" y="0px" viewBox="0 0 16 16">
			<circle cx="8.5" cy="7.5" r="4.5" />
			<rect x="8" width="1" height="2" />
			<rect x="8" y="13" width="1" height="2" />
			<rect x="14" y="7" width="2" height="1" />
			<rect x="1" y="7" width="2" height="1" />
			<rect x="12.596" y="11.096" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.7175 12.8033)" width="1" height="2" />
			<rect x="3.404" y="1.904" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.9099 3.6109)" width="1" height="2" />
			<rect x="2.904" y="11.596" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.4099 6.3033)" width="2" height="1" />
			<rect x="12.096" y="2.404" transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.7823 10.1107)" width="2" height="1" />
		</svg>
	),
	Night: (
		<svg fill="currentColor" height="100%" width="100%" viewBox="0 0 512 512">
			<g>
				<g>
					<path d="M504.929,323.637c-6.955-6.953-17.436-8.995-26.489-5.16c-26.922,11.403-55.471,17.185-84.859,17.185
						c-58.032,0-112.586-22.597-153.618-63.63c-62.92-62.918-81.149-156.525-46.442-238.474c3.835-9.057,1.793-19.534-5.162-26.487
						c-6.953-6.955-17.434-8.992-26.487-5.157c-31.495,13.343-59.788,32.433-84.093,56.74C27.616,108.815-0.006,175.506,0,246.443
						c0.006,70.927,27.63,137.61,77.785,187.767C127.948,484.374,194.643,512,265.58,512c70.926,0,137.61-27.622,187.767-77.779
						c24.308-24.308,43.397-52.6,56.74-84.093C513.923,341.071,511.883,330.593,504.929,323.637z"/>
				</g>
			</g>
		</svg>
	),
	Camera: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
			<path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"></path>
		</svg>
	),
	GoogleMap: (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
		>
			<path d="M18.27 6c1.01 2.17.78 4.73-.33 6.81-.94 1.69-2.29 3.12-3.44 4.69-.5.7-1 1.45-1.37 2.26-.13.27-.22.55-.32.83-.1.28-.19.56-.28.84-.09.26-.2.57-.53.57-.39 0-.5-.44-.58-.74-.24-.73-.48-1.43-.85-2.1-.42-.79-.95-1.52-1.49-2.23L18.27 6M9.12 8.42l-3.3 3.92c.61 1.29 1.52 2.39 2.39 3.49.21.25.42.51.62.78L13 11.67l-.04.01c-1.46.5-3.08-.24-3.66-1.68-.08-.17-.14-.37-.18-.57a3.05 3.05 0 010-1v-.01m-2.54-3.8l-.01.01c-1.62 2.05-1.9 4.9-.93 7.31L9.63 7.2l-.05-.05-3-2.53m7.64-2.26L11 6.17l.04-.01c1.34-.46 2.84.12 3.52 1.34.15.28.27.58.31.88.06.38.08.65.01 1.02v.01l3.2-3.8a6.988 6.988 0 00-3.85-3.24l-.01-.01M9.89 6.89l3.91-4.65-.04-.01C13.18 2.08 12.59 2 12 2c-1.97 0-3.83.85-5.15 2.31l-.02.01 3.06 2.57z" />
		</svg>
	),
	ArrowFillUp: (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
		>
			<path d="M3 19h18a1.002 1.002 0 00.823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 003 19z" />
		</svg>
	),
	ArrowFillDown: (
		<svg viewBox="0 0 24 24" fill="currentColor" height="100%" width="100%">
			<path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
		</svg>
	),
	ArrowRight: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
		</svg>
	),
	Answer: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"></path>
		</svg>
	),
	Photo: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M11.024 11.536 10 10l-2 3h9l-3.5-5z"></path>
			<circle cx="9.503" cy="7.497" r="1.503"></circle>
			<path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"></path>
		</svg>
	),
	Profile: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M13.5 0h-12c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h12c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM13 14h-11v-12h11v12zM4 9h7v1h-7zM4 11h7v1h-7zM5 4.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM7.5 6h-2c-0.825 0-1.5 0.45-1.5 1v1h5v-1c0-0.55-0.675-1-1.5-1z"></path>
		</svg>
	),
	Review: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"></path>
		</svg>
	),
	Image: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5 1.597 1.363L13 13l4 6H7l2-3z"></path>
		</svg>
	),
	Performance: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" strokeWidth="2" d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,19 L8,14 L12,18 L18.5,11.5 M19,17.0003099 L19,11 L13,11"></path>
		</svg>
	),
	Advertise: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M7.55197 13 8.39897 10.8852 9.24398 13H7.55197ZM16 12H17V14H16C15.4477 14 15 13.5523 15 13 15 12.4477 15.4477 12 16 12ZM21 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3ZM12.598 16H10.443L10.043 15H6.75297L6.35297 16H4.19897L5.39797 13.002 5.39897 13 7.39897 8H9.39897L12.598 16ZM17 8H19V16H16C14.3431 16 13 14.6569 13 13 13 11.3431 14.3431 10 16 10H17V8Z"></path>
		</svg>
	),
	Product: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M13 10h-2V8h2v2zm0-4h-2V1h2v5zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"></path>
		</svg>
	),
	QA: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"></path>
			<path d="m13.803 9.189-1.399-1.398-3.869 3.864v1.399h1.399zm.327-3.123 1.398 1.399-1.066 1.066-1.399-1.398z"></path>
		</svg>
	),
	Update: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path>
		</svg>
	),
	Review2: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0zm15.35 6.41l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l6.88-6.88c.2-.19.2-.51 0-.71z"></path>
			<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"></path>
		</svg>
	),
	Reply: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M11 20L1 12L11 4V9C16.5228 9 21 13.4772 21 19C21 19.2729 20.9891 19.5433 20.9676 19.8107C19.4605 16.9502 16.458 15 13 15H11V20Z"></path>
		</svg>
	),
	ArrowLeft: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
		</svg>
	),
	SingleArrowRight: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
		</svg>
	),
	Avatar: (
		<svg fill="currentColor" viewBox="0 0 512 512" height="100%" width="100%">
			<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z" />
		</svg>
	),
	Plus: (
		<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M5 12h14"></path>
			<path d="M12 5v14"></path>
		</svg>
	),
	Table: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M4 8H20V5H4V8ZM14 19V10H10V19H14ZM16 19H20V10H16V19ZM8 19V10H4V19H8ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3Z"></path>
		</svg>
	),
	Card: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3ZM20.0049 12H4.00488V19H20.0049V12ZM20.0049 8V5H4.00488V8H20.0049Z"></path>
		</svg>
	),
	Text: (
		<svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="100%" width="100%">
			<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"></path></svg>
	),
	Website: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" strokeWidth="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"></path>
		</svg>
	),
	Stars: (
		<svg fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path>
		</svg>
	),
	Audio: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			{/* <path fill="none" d="M0 0h24v24H0z"></path> */}
			<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4v2zm-3-4V3.5L18.5 9H13z"></path>
		</svg>
	),
	History: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"></path>
		</svg>
	),
	Contribute: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 010 7.52c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path>
		</svg>
	),
	ArrowLeftRight: (
		<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="100%" width="100%">
			<path d="M8 3 4 7l4 4"></path>
			<path d="M4 7h16"></path>
			<path d="m16 21 4-4-4-4"></path>
			<path d="M20 17H4"></path>
		</svg>
	),
	OulineAudio: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="100%" width="100%">
			<path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"></path>
		</svg>
	),
	OulineAudioMuted: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="100%" width="100%">
			<defs></defs>
			<path d="M682 455V311l-76 76v68c-0.1 50.7-42 92.1-94 92-19.1 0.1-36.8-5.4-52-15l-54 55c29.1 22.4 65.9 36 106 36 93.8 0 170-75.1 170-168z"></path>
			<path d="M833 446h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254-63 0-120.7-23-165-61l-54 54c48.9 43.2 110.8 72.3 179 81v102H326c-13.9 0-24.9 14.3-25 32v36c0.1 4.4 2.9 8 6 8h408c3.2 0 6-3.6 6-8v-36c0-17.7-11-32-25-32H547V782c165.3-17.9 294-157.9 294-328 0-4.4-3.6-8-8-8zM846.1 68.3l-43.5-41.9c-3.1-3-8.1-3-11.2 0.1l-129 129C634.3 101.2 577 64 511 64c-93.9 0-170 75.3-170 168v224c0 6.7 0.4 13.3 1.2 19.8l-68 68c-10.5-27.9-16.3-58.2-16.2-89.8-0.2-4.4-3.8-8-8-8h-60c-4.4 0-8 3.6-8 8 0 53 12.5 103 34.6 147.4l-137 137c-3.1 3.1-3.1 8.2 0 11.3l42.7 42.7c3.1 3.1 8.2 3.1 11.3 0L846.2 79.8l0.1-0.1c3.1-3.2 3-8.3-0.2-11.4zM417 401V232c0-50.6 41.9-92 94-92 46 0 84.1 32.3 92.3 74.7L417 401z"></path>
		</svg>
	),
	Volume: (
		<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="100%" width="100%">
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
			<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
			<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
		</svg>
	),
	OutlineCopy: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
		</svg>
	),
	OulineThumbs: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z"></path>
			<path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm-2 1.13L7.92 12H2V6.21l1.93-1.93L3.36 7H10v.13zM22.5 10h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5zm-.5 7.79l-1.93 1.93.57-2.72H14v-.13L16.08 12H22v5.79z"></path>
		</svg>
	),
	Share: (
		<svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
		</svg>
	),
	progressPin: (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
			<mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="3" y="0" width="10" height="16" fill="black">
				<rect fill="white" x="3" width="10" height="16" />
				<path fillRule="evenodd" clipRule="evenodd" d="M8.5 7.95852C9.91886 7.72048 11 6.4865 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.4865 6.08114 7.72048 7.5 7.95852V14H8.5V7.95852Z" />
			</mask>
			<path fillRule="evenodd" clipRule="evenodd" d="M8.5 7.95852C9.91886 7.72048 11 6.4865 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.4865 6.08114 7.72048 7.5 7.95852V14H8.5V7.95852Z" fill="#5F6368" />
			<path d="M8.5 7.95852L8.16909 5.98609L6.5 6.26611V7.95852H8.5ZM7.5 7.95852H9.5V6.26611L7.83091 5.98609L7.5 7.95852ZM7.5 14H5.5V16H7.5V14ZM8.5 14V16H10.5V14H8.5ZM9 5C9 5.49351 8.64052 5.90699 8.16909 5.98609L8.83091 9.93096C11.1972 9.53397 13 7.47948 13 5H9ZM8 4C8.55228 4 9 4.44772 9 5H13C13 2.23858 10.7614 0 8 0V4ZM7 5C7 4.44772 7.44772 4 8 4V0C5.23858 0 3 2.23858 3 5H7ZM7.83091 5.98609C7.35948 5.90699 7 5.49351 7 5H3C3 7.47948 4.80281 9.53397 7.16909 9.93096L7.83091 5.98609ZM9.5 14V7.95852H5.5V14H9.5ZM8.5 12H7.5V16H8.5V12ZM6.5 7.95852V14H10.5V7.95852H6.5Z" fill="white" mask="url(#path-1-outside-1)" />
			<circle cx="8" cy="5" r="2" fill="white" />
		</svg>
	),
	Book: (
		<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="100%" width="100%">
			<path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
		</svg>
	),
	Price: (
		<svg fill="currentColor" viewBox="0 0 20 16" height="100%" width="100%">
			<path d="M19.25 0h-6c-0.412 0-0.989 0.239-1.28 0.53l-7.439 7.439c-0.292 0.292-0.292 0.769 0 1.061l6.439 6.439c0.292 0.292 0.769 0.292 1.061 0l7.439-7.439c0.292-0.292 0.53-0.868 0.53-1.28v-6c0-0.412-0.337-0.75-0.75-0.75zM15.5 6c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5z"></path><path d="M2 8.5l8.5-8.5h-1.25c-0.412 0-0.989 0.239-1.28 0.53l-7.439 7.439c-0.292 0.292-0.292 0.769 0 1.061l6.439 6.439c0.292 0.292 0.769 0.292 1.061 0l0.47-0.47-6.5-6.5z"></path>
		</svg>
	),
	Snippet: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M20.41 8.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.42zM7 7h7v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2z"></path>
		</svg>
	),
	App: (
		<svg fill="currentColor" viewBox="0 0 512 512" height="100%" width="100%">
			<path d="M464 152H360c0-57-46.562-103.859-104-103.859S152 95 152 152H48c18.688 216 13 312 13 312h389.999c-.001 0-5.688-98 13.001-312zM256 74.105c43.008 0 77.999 34.895 77.999 77.895H178c0-43 34.991-77.895 78-77.895zM204 397.64V228.867l142.999 84.387L204 397.64z"></path>
		</svg>
	),
	Description: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>
		</svg>
	),
	Headline: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path>
		</svg>
	),

	People: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 010 7.52c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path>
		</svg>
	),
	Payment: (
		<svg fill="currentColor" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
		</svg>
	),
	About: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
		</svg>
	),
	Computer: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
		</svg>
	),
	Color: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0z"></path>
			<path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0112 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 00-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 012.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"></path>
			<circle cx="6.5" cy="11.5" r="1.5"></circle>
			<circle cx="9.5" cy="7.5" r="1.5"></circle>
			<circle cx="14.5" cy="7.5" r="1.5"></circle>
			<circle cx="17.5" cy="11.5" r="1.5"></circle>
		</svg>
	),
	Bucket: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	),
	Bag: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="100%" width="100%">
			<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
		</svg>
	),
	Security: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="100%" width="100%">
			<path d="M128,112a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm80-72H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path>
		</svg>
	),
	Purchase: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M13.707 3.293A.996.996 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-8-8zM12 19.586l-7-7V5h7.586l7 7L12 19.586z"></path><circle cx="8.496" cy="8.495" r="1.505"></circle>
		</svg>
	),
	Email: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
		</svg>
	),
	Warning: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
		</svg>
	),
	LocationOff: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0zm11.75 11.47-.11-.11z"></path>
			<path d="M12 6.5A2.5 2.5 0 0 1 14.5 9c0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7a7 7 0 0 0-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z"></path>
		</svg>
	),
	Menu: (
		<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="100%" width="100%">
			<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	),
	Label: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path>
		</svg>
	),
	Fix: (
		<svg fill="currentColor" height="100%" width="100%" viewBox="0 0 442 442">
			<g>
				<path d="M232.307,138.009c-3.904,3.906-3.904,10.237,0.002,14.143s10.238,3.905,14.142-0.002l8.257-8.26
					c2.97-2.971,3.767-7.481,1.994-11.29c-5.51-11.84-8.304-24.089-8.304-36.408c0-25.079,10.917-48.7,29.331-65.02l0.032,65.461
					c0.001,3.279,1.611,6.35,4.307,8.217l47.446,32.854c3.423,2.37,7.958,2.372,11.382,0.002l47.463-32.837
					c2.7-1.868,4.311-4.941,4.311-8.225l-0.007-65.457c18.412,16.305,29.33,39.907,29.336,64.965c0,23.19-9.029,44.993-25.425,61.392
					c-16.383,16.387-38.159,25.408-61.325,25.408c-0.022,0-0.045,0-0.068,0c-7.971-0.006-23.618-3.865-28.975-5.352
					c-3.473-0.966-7.199,0.015-9.748,2.563l-30.402,30.403c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929
					s5.119-0.977,7.071-2.929l26.353-26.354c7.347,1.817,19.976,4.591,28.614,4.597c0.03,0,0.055,0,0.084,0
					c28.505-0.001,55.307-11.104,75.467-31.268c20.172-20.176,31.281-47,31.281-75.534c-0.009-38.434-20.863-74.074-54.423-93.013
					c-3.096-1.747-6.887-1.72-9.958,0.073c-3.07,1.793-4.958,5.081-4.957,8.637l0.008,79.557l-37.46,25.916L297.76,91.387
					l-0.039-79.563c-0.002-3.555-1.891-6.842-4.961-8.633c-3.07-1.792-6.861-1.817-9.957-0.069
					c-33.557,18.956-54.403,54.618-54.403,93.069c0,12.988,2.48,25.854,7.383,38.343L232.307,138.009z"/>
				<path d="M205.828,270.797L67.106,409.524c-5.213,5.216-12.143,8.09-19.513,8.095c-0.005,0-0.009,0-0.015,0
					c-7.368-0.001-14.299-2.873-19.511-8.085c-5.211-5.217-8.077-12.156-8.068-19.541c0.008-7.363,2.879-14.275,8.097-19.476
					l119.319-119.33c3.905-3.905,3.905-10.236,0-14.142c-3.905-3.904-10.237-3.905-14.142,0.001L13.967,356.364
					C4.975,365.325,0.015,377.26,0,389.97c-0.015,12.731,4.928,24.699,13.922,33.703c8.994,8.994,20.946,13.946,33.656,13.946
					c0.009,0,0.018,0,0.026,0c12.711-0.007,24.661-4.964,33.647-13.955L219.97,284.94c3.905-3.905,3.905-10.237,0-14.143
					C216.064,266.893,209.733,266.893,205.828,270.797z"/>
				<path d="M47.436,377.851c-3.294,0.002-6.388,1.289-8.672,3.585c-4.807,4.777-4.831,12.583-0.054,17.398
					c0.012,0.013,0.024,0.024,0.036,0.037c2.395,2.389,5.539,3.585,8.688,3.585c3.156,0,6.317-1.202,8.73-3.61
					c4.786-4.809,4.772-12.615-0.011-17.383c-2.325-2.33-5.417-3.612-8.709-3.612C47.442,377.851,47.439,377.851,47.436,377.851z"/>
				<path d="M374.381,327.157c-1.036-1.035-2.286-1.83-3.662-2.33l-28.677-10.398l-103.588-103.59l16.743-16.742
					c3.905-3.905,3.906-10.237,0-14.143c-2.964-2.962-7.325-3.678-10.963-2.144L87.552,21.146C78.076,11.639,65.456,6.395,52.017,6.379
					c-0.02,0-0.038,0-0.058,0c-13.439,0-26.071,5.226-35.576,14.72C6.866,30.616,1.629,43.264,1.637,56.714
					c0.007,13.439,5.248,26.075,14.755,35.577l156.684,156.677c-1.534,3.637-0.82,7.998,2.144,10.962
					c3.906,3.904,10.238,3.906,14.142,0l16.739-16.739L309.69,346.779l10.399,28.678c0.499,1.376,1.294,2.627,2.33,3.662l58.124,58.123
					c1.953,1.952,4.512,2.929,7.071,2.929s5.119-0.977,7.071-2.929l37.819-37.819c1.875-1.876,2.929-4.419,2.929-7.071
					s-1.054-5.195-2.929-7.071L374.381,327.157z M217.239,203.768c-0.021,0.021-0.043,0.044-0.064,0.065L186.7,234.308L30.532,78.147
					c-5.732-5.729-8.891-13.344-8.895-21.443c-0.004-8.104,3.152-15.726,8.884-21.458c5.725-5.719,13.337-8.866,21.438-8.866
					c0.012,0,0.024,0,0.035,0c8.093,0.009,15.689,3.165,21.403,8.897l156.175,156.159l-12.268,12.268
					C217.283,203.725,217.261,203.746,217.239,203.768z M387.614,416.029l-49.48-49.48l-10.399-28.678
					c-0.499-1.376-1.294-2.627-2.33-3.662l-105.161-105.16l4.068-4.067l105.16,105.161c1.036,1.035,2.286,1.83,3.662,2.33
					l28.677,10.398l49.48,49.48L387.614,416.029z"/>
				<path d="M58.981,49.573c-3.905-3.904-10.237-3.904-14.142,0c-3.905,3.905-3.905,10.237,0,14.143l137.951,137.95
					c1.952,1.952,4.512,2.929,7.071,2.929s5.119-0.977,7.071-2.929c3.905-3.905,3.905-10.237,0-14.143L58.981,49.573z"/>
			</g>
		</svg>
	),
	Archive: (
		<svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
			<path d="M12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697C9.26256 13.6768 9.73744 13.6768 10.0303 13.9697L11.25 15.1893V11C11.25 10.5858 11.5858 10.25 12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V15.1893L13.9697 13.9697C14.2626 13.6768 14.7374 13.6768 15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303L12.5303 17.5303Z" />
			<path d="M12.0574 1.25H11.9426C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12H1.26092C1.25 12.5788 1.25 13.2299 1.25 13.9664V14.0336C1.25 15.4053 1.24999 16.4807 1.32061 17.3451C1.39252 18.2252 1.54138 18.9523 1.87671 19.6104C2.42799 20.6924 3.30762 21.572 4.38956 22.1233C5.04769 22.4586 5.7748 22.6075 6.65494 22.6794C7.51927 22.75 8.59469 22.75 9.96637 22.75H14.0336C15.4053 22.75 16.4807 22.75 17.3451 22.6794C18.2252 22.6075 18.9523 22.4586 19.6104 22.1233C20.6924 21.572 21.572 20.6924 22.1233 19.6104C22.4586 18.9523 22.6075 18.2252 22.6794 17.3451C22.75 16.4807 22.75 15.4053 22.75 14.0336V13.9664C22.75 13.2302 22.75 12.5787 22.7391 12H22.75V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM4.38956 5.87671C3.82626 6.16372 3.31781 6.53974 2.88197 6.98698C2.89537 6.85884 2.91012 6.73444 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.0899 6.73445 21.1046 6.85884 21.118 6.98698C20.6822 6.53975 20.1737 6.16372 19.6104 5.87671C18.9523 5.54138 18.2252 5.39252 17.3451 5.32061C16.4807 5.24999 15.4053 5.25 14.0336 5.25H9.96645C8.59472 5.25 7.51929 5.24999 6.65494 5.32061C5.7748 5.39252 5.04769 5.54138 4.38956 5.87671ZM5.07054 7.21322C5.48197 7.00359 5.9897 6.87996 6.77708 6.81563C7.57322 6.75058 8.58749 6.75 10 6.75H14C15.4125 6.75 16.4268 6.75058 17.2229 6.81563C18.0103 6.87996 18.518 7.00359 18.9295 7.21322C19.7291 7.62068 20.3793 8.27085 20.7868 9.07054C20.9964 9.48197 21.12 9.9897 21.1844 10.7771C21.2494 11.5732 21.25 12.5875 21.25 14C21.25 15.4125 21.2494 16.4268 21.1844 17.2229C21.12 18.0103 20.9964 18.518 20.7868 18.9295C20.3793 19.7291 19.7291 20.3793 18.9295 20.7868C18.518 20.9964 18.0103 21.12 17.2229 21.1844C16.4268 21.2494 15.4125 21.25 14 21.25H10C8.58749 21.25 7.57322 21.2494 6.77708 21.1844C5.9897 21.12 5.48197 20.9964 5.07054 20.7868C4.27085 20.3793 3.62068 19.7291 3.21322 18.9295C3.00359 18.518 2.87996 18.0103 2.81563 17.2229C2.75058 16.4268 2.75 15.4125 2.75 14C2.75 12.5875 2.75058 11.5732 2.81563 10.7771C2.87996 9.9897 3.00359 9.48197 3.21322 9.07054C3.62068 8.27085 4.27085 7.62069 5.07054 7.21322Z" />
		</svg>
	),
	Print: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3zM8 4h8v3H8V4zm0 16v-4h8v4H8zm11-8h-4v-2h4v2z"></path>
		</svg>
	),
	Birthday: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="100%" width="100%">
			<path d="M 16 1.25 L 15.1875 2.4375 C 15.1875 2.4375 14.648438 3.191406 14.125 4.09375 C 13.863281 4.546875 13.617188 5.019531 13.40625 5.5 C 13.195313 5.980469 13 6.421875 13 7 C 13 8.644531 14.355469 10 16 10 C 17.644531 10 19 8.644531 19 7 C 19 6.421875 18.804688 5.980469 18.59375 5.5 C 18.382813 5.019531 18.136719 4.546875 17.875 4.09375 C 17.351563 3.191406 16.8125 2.4375 16.8125 2.4375 Z M 16 10 L 13 10 L 13 14 L 7 14 C 4.789063 14 3 15.789063 3 18 C 3 19.015625 3.375 19.949219 4 20.65625 L 4 28 L 28 28 L 28 20.65625 C 28.625 19.949219 29 19.015625 29 18 C 29 15.789063 27.210938 14 25 14 L 19 14 L 19 10 Z M 16 4.875 C 16.066406 4.984375 16.058594 4.976563 16.125 5.09375 C 16.363281 5.503906 16.617188 5.941406 16.78125 6.3125 C 16.945313 6.683594 17 7.027344 17 7 C 17 7.554688 16.554688 8 16 8 C 15.445313 8 15 7.554688 15 7 C 15 7.027344 15.054688 6.683594 15.21875 6.3125 C 15.382813 5.941406 15.636719 5.503906 15.875 5.09375 C 15.941406 4.976563 15.933594 4.984375 16 4.875 Z M 15 12 L 17 12 L 17 14 L 15 14 Z M 7 16 L 25 16 C 26.191406 16 27 16.808594 27 18 C 27 19.191406 26.191406 20 25 20 C 23.808594 20 23 19.191406 23 18 L 21 18 C 21 19.191406 20.191406 20 19 20 C 17.808594 20 17 19.191406 17 18 L 15 18 C 15 19.191406 14.191406 20 13 20 C 11.808594 20 11 19.191406 11 18 L 9 18 C 9 19.191406 8.191406 20 7 20 C 5.808594 20 5 19.191406 5 18 C 5 16.808594 5.808594 16 7 16 Z M 10 20.65625 C 10.734375 21.484375 11.804688 22 13 22 C 14.195313 22 15.265625 21.484375 16 20.65625 C 16.734375 21.484375 17.804688 22 19 22 C 20.195313 22 21.265625 21.484375 22 20.65625 C 22.734375 21.484375 23.804688 22 25 22 C 25.347656 22 25.679688 21.925781 26 21.84375 L 26 26 L 6 26 L 6 21.84375 C 6.320313 21.925781 6.652344 22 7 22 C 8.195313 22 9.265625 21.484375 10 20.65625 Z"></path>
		</svg>
	),
	Company: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M17 7h2v2h-2zM17 11h2v2h-2zM17 15h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5v7z"></path>
			<path d="M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z"></path>
		</svg>
	),
	Notes: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M16 4H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zM4 18.01V6h11v5h5v7.01H4z"></path>
		</svg>
	),
	Cookie: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="100%" width="100%">
			<path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 14 9 A 1 1 0 0 0 14 11 A 1 1 0 0 0 14 9 z M 19.5 10 A 1.5 1.5 0 0 0 19.5 13 A 1.5 1.5 0 0 0 19.5 10 z M 11 13 A 2 2 0 0 0 11 17 A 2 2 0 0 0 11 13 z M 17 15 A 1 1 0 0 0 17 17 A 1 1 0 0 0 17 15 z M 22 16 A 1 1 0 0 0 22 18 A 1 1 0 0 0 22 16 z M 12.5 19 A 1.5 1.5 0 0 0 12.5 22 A 1.5 1.5 0 0 0 12.5 19 z M 19.5 20 A 1.5 1.5 0 0 0 19.5 23 A 1.5 1.5 0 0 0 19.5 20 z"></path>
		</svg>
	),
	Url: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"></path>
		</svg>
	),
	Date: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
		</svg>
	),
	Field: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="100%" width="100%">
			<path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm0,144H56V136H200v64Z"></path>
		</svg>
	),
	Storage: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path>
		</svg>
	),
	Drive: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M4.50772 2.87597C4.57028 2.37554 4.99568 2 5.5 2H18.5C19.0043 2 19.4297 2.37554 19.4923 2.87597L20.9923 14.876C20.9974 14.9171 21 14.9585 21 15V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V15C3 14.9585 3.00258 14.9171 3.00772 14.876L4.50772 2.87597ZM6.38278 4L5.13278 14H18.8672L17.6172 4H6.38278ZM19 16H5V20H19V16ZM15 17H17V19H15V17ZM13 17H11V19H13V17Z"></path>
		</svg>
	),
	Document: (
		<svg viewBox="0 0 24 24" height="100%" width="100%" fill='#4285f4' >
			<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.99 6H7V7h10.01v2zm0 4H7v-2h10.01v2zm-3 4H7v-2h7.01v2z"></path>
		</svg>
	),
	Spreadsheet: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#34a853'>
			<path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 8v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8v8H9v-8H5V9h4V5h2v4h8v2z"></path>
		</svg>
	),
	Form: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#9334e6'>
			<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm8 8h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7V7h7v2z"></path>
		</svg>
	),
	ColorPhoto: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#ea4335'>
			<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
		</svg>
	),
	PDF: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#ea4335'>
			<path d="M7 11.5h1v-1H7v1zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm10-1H17v1h1.5V13H17v2h-1.5V9h4v1.5zm-5 3c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm-2.5 0h1v-3h-1v3z"></path>
		</svg>
	),
	ColorVideo: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#ea4335'>
			<path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path>
		</svg>
	),
	ColorFolder: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#444746'>
			<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
		</svg>
	),
	Shortcut: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#444746'>
			<g>
				<rect fill="none" height="24" width="24"></rect>
				<path d="M16,2L16,2L16,2H8v2h4.3C9.7,5.81,8,8.81,8,12.2c0,4.83,3.44,8.87,8,9.8v-2.06c-3.44-0.89-6-4.02-6-7.74 c0-2.95,1.61-5.53,4-6.91V10h2L16,2z"></path>
			</g>
		</svg>
	),
	Site: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#174ea6'>
			<path d="M19 4H5c-1.1 0-1.99.9-1.99 2L3 18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H5v-4h9v4zm0-5H5V9h9v4zm5 5h-4V9h4v9z"></path>
		</svg>
	),
	ColorAudio: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#ea4335'>
			<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.2 18c-.66 0-1.2-.54-1.2-1.2V12c0-3.31 2.69-6 6-6s6 2.69 6 6v4.8c0 .66-.54 1.2-1.2 1.2H14v-4h2v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2h2v4H7.2z"></path>
		</svg>
	),
	Drawing: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#ea4335'>
			<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 15h-6v-5.79c-.66.61-1.53.99-2.5.99-2.04 0-3.7-1.66-3.7-3.7s1.66-3.7 3.7-3.7 3.7 1.66 3.7 3.7c0 .97-.38 1.84-.99 2.5H18v6z"></path>
		</svg>
	),
	FileArchive: (
		<svg viewBox="0 0 24 24" width="100%" height="100%" fill='#444746'>
			<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15l-4-4h8l-4 4zm4-6H8v-2h8v2zm0-4H8V6h8v2z"></path>
		</svg>
	),
	Folder: (
		<svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fillRule="evenodd" clipRule="evenodd" d="M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z" fill="currentColor"></path>
		</svg>
	),
	Grid: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
		</svg>
	),
	Anywhere: (
		<svg fill="currentColor" viewBox="0 0 24 24" width="100%" height="100%">
			<rect fill="none" height="24" width="24"></rect>
			<path d="M14.35,2.5h-4.7c-0.71,0-1.37,0.38-1.73,0.99L1.58,14.4c-0.36,0.62-0.36,1.38-0.01,2l2.35,4.09c0.36,0.62,1.02,1,1.73,1 h12.68c0.72,0,1.38-0.38,1.73-1l2.35-4.09c0.36-0.62,0.35-1.38-0.01-2L16.08,3.49C15.72,2.88,15.06,2.5,14.35,2.5z M18.34,19.5H5.66 l-2.35-4.09L9.65,4.5h4.7l6.34,10.91L18.34,19.5z M12.9,7.75h-1.8l-4.58,7.98L7.25,17h9.5l0.73-1.27L12.9,7.75z M9.25,15L12,10.2 l2.75,4.8H9.25z"></path>
		</svg>
	),
	// Attachment: (
	// 	<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="100%" width="100%">
	// 		<path d="M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z"></path>
	// 	</svg>
	// )
	Fork: (
		<svg fill="currentColor" viewBox="0 0 16 16" width="100%" height="100%">
			<path clipRule="evenodd" d="M9.49951 2.99967C9.49951 1.80306 10.4696 0.833008 11.6662 0.833008C12.8628 0.833008 13.8328 1.80306 13.8328 2.99967C13.8328 4.02414 13.1218 4.88254 12.1663 5.10833V5.6665C12.1663 7.04722 11.0471 8.1665 9.66634 8.1665H6.33301C5.50458 8.1665 4.83301 8.83808 4.83301 9.6665V10.8911C5.78841 11.1169 6.49935 11.9753 6.49935 12.9997C6.49935 14.1963 5.5293 15.1663 4.33268 15.1663C3.13607 15.1663 2.16602 14.1963 2.16602 12.9997C2.16602 11.975 2.87728 11.1165 3.83301 10.8909V5.10844C2.87728 4.88284 2.16602 4.02432 2.16602 2.99967C2.16602 1.80306 3.13607 0.833008 4.33268 0.833008C5.5293 0.833008 6.49935 1.80306 6.49935 2.99967C6.49935 4.02409 5.78841 4.88245 4.83301 5.10829V7.66632C5.25084 7.35248 5.7702 7.1665 6.33301 7.1665H9.66634C10.4948 7.1665 11.1663 6.49493 11.1663 5.6665V5.1084C10.2107 4.88274 9.49951 4.02426 9.49951 2.99967ZM11.6662 1.83301C11.0218 1.83301 10.4995 2.35534 10.4995 2.99967C10.4995 3.64401 11.0218 4.16634 11.6662 4.16634C12.3105 4.16634 12.8328 3.64401 12.8328 2.99967C12.8328 2.35534 12.3105 1.83301 11.6662 1.83301ZM4.32215 11.8331C3.68267 11.8387 3.16602 12.3589 3.16602 12.9997C3.16602 13.644 3.68835 14.1663 4.33268 14.1663C4.97701 14.1663 5.49935 13.644 5.49935 12.9997C5.49935 12.359 4.98294 11.839 4.34367 11.8331L4.33301 11.8332M3.16602 2.99967C3.16602 2.35534 3.68835 1.83301 4.33268 1.83301C4.97701 1.83301 5.49935 2.35534 5.49935 2.99967C5.49935 3.64401 4.97701 4.16634 4.33268 4.16634C3.68835 4.16634 3.16602 3.64401 3.16602 2.99967Z" fill="currentColor" fillRule="evenodd"></path>
		</svg>
	),
} as { [key: string]: React.SVGProps<SVGSVGElement> }

export default Icon