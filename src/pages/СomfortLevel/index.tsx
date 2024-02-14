import CheckReviewComponent from '../../components/CheckReview'
import Rating from '../../components/Rating'
import { changeComfortLevelWithMary } from '../../store/features/review.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Languages } from '../../types/language'
import { LocalStorage } from '../../utils/localStorage'

const ComfortLevel = () => {
	const dispatch = useAppDispatch()
	const { review, language } = useAppSelector(
		state => state
	)

	const setData = (answer: number) => {
		const review = LocalStorage.getData('review') || {}
		dispatch(changeComfortLevelWithMary(answer))

		LocalStorage.setData({ ...review, comfortLevelWithMary: answer }, 'review')
	}

	return (
		<>
			<Rating
				title={language.language === Languages.ru ? 'Насколько комфортно вы чувствовали себя в работе с Мэри?' : 'How comfortable did you feel working with Mary?'}
				path='/comment'
				answer={review.comfortLevelWithMary}
				setAnswer={answer => setData(answer)}
			/>
			<CheckReviewComponent />
		</>
	)
}

export default ComfortLevel
