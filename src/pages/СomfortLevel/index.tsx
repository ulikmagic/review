import { changeComfortLevelWithMary } from '@/store/features/review.slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Rating from '@/components/Rating/Rating'
import { LocalStorage } from '@/utils/localStorage'
import CheckReviewComponent from '@/components/CommentReview/CheckReview'

const ComfortLevel = () => {
	const dispatch = useAppDispatch()
	const comfortLevelWithMary = useAppSelector(
		state => state.review.comfortLevelWithMary
	)

	const setData = (answer: number) => {
		const review = LocalStorage.getData('review') || {}
		dispatch(changeComfortLevelWithMary(answer))

		LocalStorage.setData({ ...review, comfortLevelWithMary: answer }, 'review')
	}

	return (
		<>
			<Rating
				title='Насколько комфортно вы чувствовали себя в работе с Мэри?'
				path='/comment'
				answer={comfortLevelWithMary}
				setAnswer={answer => setData(answer)}
			/>
			<CheckReviewComponent />
		</>
	)
}

export default ComfortLevel
