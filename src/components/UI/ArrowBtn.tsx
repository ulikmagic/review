import clsx from 'clsx'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Arrow } from './Icons'

interface ArrowBtnProps {
	onClick?: () => void
	className?: string
	path: string
}

const ArrowBtn: FC<ArrowBtnProps> = ({ onClick, className, path }) => (
	<NavLink
		to={path}
		onClick={onClick}
		className={clsx(
			'shadow-orange bg-orange p-4 rounded-full inline-block',
			className
		)}
	>
		<Arrow />
	</NavLink>
)

export default ArrowBtn
