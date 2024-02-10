import Preloader from '@/assets/gif/preloader.gif'
import { FC } from 'react'

interface LoaderProps {
	className?: string
}

const Loader: FC<LoaderProps> = ({ className }) => (
	<img src={Preloader} alt='Preloader' className={className} />
)

export default Loader
