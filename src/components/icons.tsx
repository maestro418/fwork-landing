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
	DownArrow: (
		<svg fill="currentColor" viewBox="0 0 512 512" height="100%" width="100%">
			<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
		</svg>
	),
	UpArrow: (
		<svg fill="currentColor" viewBox="0 0 512 512" height="100%" width="100%">
			<path d="M278.6 105.4c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 173.3l169.4 169.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-192-192z"></path>
		</svg>
	)
} as { [key: string]: React.SVGProps<SVGSVGElement> }

export default Icon