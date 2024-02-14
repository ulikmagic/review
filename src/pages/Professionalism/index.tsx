import CheckReviewComponent from '../../components/CheckReview'
import Rating from '../../components/Rating'
import { changeProfessionalismRating } from '../../store/features/review.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Languages } from '../../types/language'
import { LocalStorage } from '../../utils/localStorage'

const Professionalism = () => {
	const dispatch = useAppDispatch()
	const { review, language } = useAppSelector(
		state => state
	)

	const setData = (answer: number) => {
		const review = LocalStorage.getData('review') || {}
		dispatch(changeProfessionalismRating(answer))

		LocalStorage.setData({ ...review, professionalismRating: answer }, 'review')
	}

	return (
		<>
			<CheckReviewComponent />
			<Rating
				title={language.language === Languages.ru ? 'Оцените профессионализм психолога' : 'Rate professional qualities of the psychologist'}
				path='/comfort-level'
				answer={review.professionalismRating}
				setAnswer={answer => setData(answer)}
			/>
		</>
	)
}

export default Professionalism
