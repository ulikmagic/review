import clsx from 'clsx'
import { FC } from 'react'

interface BurgerProps {
	status: boolean
	onClick: () => void
	className?: string
}

const itemClass: string =
	'w-full block h-1 bg-pink absolute rounded-md cursor-pointer duration-700'

const Burger: FC<BurgerProps> = ({ status, onClick, className }) => (
	<div className={clsx('w-8 h-8 relative', className)} onClick={onClick}>
		<span
			className={clsx(itemClass, status ? 'top-4 rotate-[-45deg]' : 'top-2')}
		></span>
		<span className={clsx(itemClass, 'top-4', status && 'opacity-0')}></span>
		<span
			className={clsx(itemClass, status ? 'top-4 rotate-45' : 'top-6')}
		></span>
	</div>
)

export default Burger
