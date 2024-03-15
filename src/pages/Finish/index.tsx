import PsychologyImage from '../../assets/images/psychology.svg'
import Hug from '../../assets/icons/hug.svg'

const Finish = () => {
	return (
		<div className='h-screen relative flex items-center justify-center'>
			<div className='absolute w-28 h-28 bg-pink rounded-ss-full bottom-0 right-0' />
			<img
				src={PsychologyImage}
				alt='asks'
				className='absolute top-20 z-[-1] left-1/2 transform -translate-x-1/2 w-full'
			/>
			<div className='bg-white px-5 shadow-variant h-[250px] w-[300px] rounded-md relative flex items-center flex-col pt-14 pb-6'>
				<h1 className='font-rubik font-semibold text-md text-center'>
					Спасибо, что оставили отзыв! Целую, обнимаю{' '}
					<img src={Hug} alt='Hug' className='w-8 mt-2 inline-block' />. Ваш
					психолог <span className='text-orange'>Мэри</span>.
				</h1>
			</div>
		</div>
	)
}

export default Finish
