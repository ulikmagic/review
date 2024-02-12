import CommentIcon from '../../assets/icons/comment.svg'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { LocalStorage } from '../../utils/localStorage'
import {
	changeComment,
	saveReviewData,
	initialState as defaultReviewState,
} from '../../store/features/review.slice'
import { IComment } from '../../types/api'
import { getRandomName } from '../../constants/names'
import { addReview } from '../../utils/api'
import CheckReviewComponent from '../../components/CheckReview'
import ArrowBtn from '../../components/UI/ArrowBtn'
import AsksImage from '../../assets/images/asks.svg'

const Comment: FC = () => {
	const { comment, ...review } = useAppSelector(state => state.review)
	const dispatch = useAppDispatch()

	const setData = (text: string) => {
		const review = LocalStorage.getData('review') || {}

		dispatch(changeComment(text))
		LocalStorage.setData({ ...review, comment: text }, 'review')
	}

	const changeValue = (text: string) => {
		if (text.length > 300) return
		setData(text)
	}

	const sendReview = () => {
		const data: IComment = {
			...review,
			comment,
			id: Date.now(),
			name: getRandomName(),
		}

		LocalStorage.remove('review')
		dispatch(saveReviewData(defaultReviewState))
		addReview(data)
	}

	return (
		<div className='h-screen relative flex items-center justify-center'>
			<CheckReviewComponent />
			<img src={AsksImage} className='absolute top-0 z-[-1]' alt='asks' />
			<div className='container z-10'>
				<div className='bg-white shadow-variant w-full min-h-[280px] rounded-md relative flex items-center flex-col pt-14 pb-6'>
					<div className='absolute right-3 top-3'>
						<img src={CommentIcon} alt='comment' className='w-10 mr-0' />
					</div>
					<h1 className='text-lg font-rubik font-medium text-dark-blue mb-3 text-center'>
						Оставьте комментарий
					</h1>
					<p className='font-poppins mb-1'>
						<span>{comment?.length || 0}</span>/300
					</p>
					<textarea
						rows={5}
						onChange={(e: any) => changeValue(e.target.value)}
						value={comment}
						className={`
							w-11/12 border border-grey border-2 rounded-md 
							font-poppins py-1 px-2 bg-gray-50 outline-none
							hover:border-dark-blue
						`}
					></textarea>
					{comment?.length > 3 && (
						<ArrowBtn
							path='/review-list'
							onClick={sendReview}
							className='mt-3'
						/>
					)}
				</div>
			</div>
			<div className='absolute w-28 h-28 bg-pink rounded-ss-full bottom-0 right-0' />
		</div>
	)
}

export default Comment
