import { FC, useState } from 'react'
import PsychologyImage from '../../assets/images/psychology.svg'
import clsx from 'clsx'
import ArrowBtn from '../UI/ArrowBtn'
import { Star } from '../UI/Icons'

interface RatingProps {
	title: string
	path: string
	answer: number
	setAnswer: (answer: number) => void
}

const numStars: number[] = [1, 2, 3, 4, 5]
const duration: string[] = [
	'duration-100',
	'duration-150',
	'duration-200',
	'duration-300',
	'duration-500',
]

const Rating: FC<RatingProps> = ({ title, path, answer, setAnswer }) => {
	const [hoverStar, setHoverStar] = useState<number>(0)
	return (
		<div className='h-screen flex items-center justify-center'>
			<img
				src={PsychologyImage}
				alt='asks'
				className='absolute top-20 z-[-1] left-1/2 transform -translate-x-1/2 w-full'
			/>
			<div className='container h-[170px]'>
				<div className='border w-11/12 m-auto bg-white shadow-variant py-6 text-center rounded-md px-2'>
					<h1 className='text-lg font-bold text-dark-blue mb-3'>{title}</h1>
					<ul className='flex gap-2 justify-center'>
						{numStars.map((star, idx) => (
							<li
								key={star}
								onMouseEnter={() => setHoverStar(star)}
								onMouseLeave={() => setHoverStar(0)}
								onClick={() => setAnswer(star)}
							>
								<Star
									className={clsx(
										'w-7 h-7',
										duration[idx],
										(answer ? answer : hoverStar) >= star
											? 'text-yellow'
											: 'text-grey'
									)}
								/>
							</li>
						))}
					</ul>
				</div>
				{answer !== 0 && (
					<div className='text-center'>
						<ArrowBtn className='mt-4' path={path} />
					</div>
				)}
			</div>
			<div className='absolute w-28 h-28 bg-pink rounded-se-full bottom-0 left-0' />
		</div>
	)
}

export default Rating
