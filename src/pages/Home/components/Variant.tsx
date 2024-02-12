import clsx from 'clsx'
import { FC } from 'react'
import { IFeeling } from '../../../constants/feelings'

interface VariantProps extends IFeeling {
	onClick: () => void
	className?: string
}

const Variant: FC<VariantProps> = ({ text, emoji, onClick, className }) => (
	<div
		className={clsx(
			className,
			'bg-white flex w-full text-center py-2 px-2 rounded-lg flex justify-center'
		)}
		onClick={onClick}
	>
		<div className='flex items-center justify-between flex-col'>
			<p className='font-poppins font-bold text-dark-blue text-lg'>{text}</p>
			<img src={emoji} alt='emoji' className='w-10 h-10' />
		</div>
	</div>
)

export default Variant
