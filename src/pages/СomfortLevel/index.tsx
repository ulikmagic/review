import CheckReviewComponent from '../../components/CheckReview'
import Rating from '../../components/Rating'
import { changeComfortLevelWithMary } from '../../store/features/review.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { LocalStorage } from '../../utils/localStorage'

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
