import clsx from 'clsx'
import { FC } from 'react'

interface PopupProps {
	onClick?: () => void
	className?: string
}

const Popup: FC<PopupProps> = ({ onClick, className }) => (
	<div
		onClick={onClick}
		className={clsx(
			'bg-opacity cursor-pointer fixed top-0 left-0 w-full h-full',
			className
		)}
	/>
)

export default Popup
