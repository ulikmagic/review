import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { FC } from 'react'
import Variant from './components/Variant/Variant'
import { changeFeelingsBeforeMary } from '@/store/features/review.slice'
import { feelings } from '@/constants/feelings'
import Carousel from 'better-react-carousel'
import AsksImage from '@/assets/images/asks.svg'
import ArrowBtn from '@/components/UI/ArrowBtn'
import clsx from 'clsx'
import { LocalStorage } from '@/utils/localStorage'

const responsive = [
	{
		breakpoint: 500,
		cols: 1,
	},
	{
		breakpoint: 768,
		cols: 2,
	},
	{
		breakpoint: 1024,
		cols: 3,
	},
]

const Home: FC = () => {
	const dispatch = useAppDispatch()
	const feelingsBeforeMary = useAppSelector(
		state => state.review.feelingsBeforeMary
	)

	const setAnswer = (answer: number) => {
		const review = LocalStorage.getData('review') || {}

		dispatch(changeFeelingsBeforeMary(answer))
		LocalStorage.setData({ ...review, feelingsBeforeMary: answer }, 'review')
	}

	const handleClick = (e: any) => {
		if (e.target.nodeName !== 'SPAN') return
		setAnswer(0)
	}

	return (
		<div className='h-screen flex items-center justify-center relative'>
			<img
				src={AsksImage}
				alt='asks'
				className='absolute top-20 z-[-1] left-1/2 transform -translate-x-1/2'
			/>
			<div className='overflow-hidden min-h-[265px] text-center py-4'>
				<h1 className='container mb-3 text-white drop-shadow-md font-rubik font-semibold text-lg'>
					Как вы чувствовали себя до работы с психологом Мэри?
				</h1>
				<div onClick={handleClick}>
					<Carousel
						cols={4}
						responsiveLayout={responsive}
						mobileBreakpoint={319}
					>
						{feelings.map(item => (
							<Carousel.Item key={item.id}>
								<Variant
									{...item}
									onClick={() => setAnswer(item.id)}
									className={clsx(
										feelingsBeforeMary === item.id &&
											'border border-2 border-dark-blue'
									)}
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
				{Boolean(feelingsBeforeMary) && (
					<ArrowBtn className='mt-4' path='/professionalism' />
				)}
			</div>
			<div className='absolute w-28 h-28 bg-pink rounded-ss-full bottom-0 right-0' />
		</div>
	)
}

export default Home
