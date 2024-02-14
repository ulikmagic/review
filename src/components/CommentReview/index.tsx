import { FC } from 'react'
import { feelings } from '../../constants/feelings'
import { Star } from '../UI/Icons'
import { IComment } from '../../types/api'
import { useAppSelector } from '../../store/hooks'
import { Languages } from '../../types/language'

interface CommentReviewProps {
	close: () => void
	review: IComment
}

const CommentReview: FC<CommentReviewProps> = ({ close, review }) => {
	const feel = feelings.find(item => item.id === review.feelingsBeforeMary)
	const language = useAppSelector(state => state.language.language)
	return (
		<div className='w-11/12 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-40 max-h-[500px] rounded-md bg-white z-800 overflow-scroll'>
			<button className='absolute top-2 right-2 cursor-pointer' onClick={close}>
				&#10006;
			</button>
			<div className='pt-9 px-4 pb-7 flex flex-col gap-2'>
				<div className='flex flex-col items-center text-center gap-1'>
					<p className='text-md font-rubik text-dark-blue font-medium'>
						{language === Languages.ru ? 'Как изменилось ваше психическое состояние во время/после работы с Мэри?' : 'How did your mental state change during/after working with Mary?'}
					</p>
					<div className='flex items-center gap-2'>
						<p className='text-md font-poppins'>
							<strong>{language === Languages.ru ? 'Ответ' : 'Answer'}: </strong>
							{language === Languages.ru ? feel?.text : feel?.english_text}
						</p>
						<img src={feel?.emoji} alt='emoji' className='w-7 h-7' />
					</div>
				</div>
				<div className='h-0.5 w-full bg-dark-blue' />
				<div className='flex items-center gap-2'>
					<p className='text-md font-rubik text-dark-blue font-medium'>
						{language === Languages.ru ? 'Профессионализм психолога' : 'Rate professional qualities of the psychologist'}:
					</p>
					<div className='flex items-center'>
						<p className='text-md font-poppins'>
							{review.professionalismRating}/
						</p>
						<Star className='text-yellow w-5 h-5' />
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<p className='text-md font-rubik text-dark-blue font-medium'>
						{language === Languages.ru ? 'Насколько кофортно вы чувствовали себя в работе с Мэри' : 'How comfortable did you feel working with Mary?'}:
					</p>
					<div className='flex items-center'>
						<p className='text-md font-poppins'>
							{review.comfortLevelWithMary}/
						</p>
						<Star className='text-yellow w-5 h-5' />
					</div>
				</div>
				<div className='h-0.5 w-full bg-dark-blue' />
				<div>
					<p className='text-md font-rubik text-dark-blue font-medium'>
						{language === Languages.ru ? 'Комментарий' : 'Comments'}:
					</p>
					<p className='text-sm font-poppins'>{review.comment}</p>
				</div>
			</div>
		</div>
	)
}

export default CommentReview
