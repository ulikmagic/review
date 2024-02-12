import CheckReviewComponent from '../../components/CheckReview'
import Rating from '../../components/Rating'
import { changeProfessionalismRating } from '../../store/features/review.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { LocalStorage } from '../../utils/localStorage'

const Professionalism = () => {
	const dispatch = useAppDispatch()
	const professionalismRating = useAppSelector(
		state => state.review.professionalismRating
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
				title='Оцените профессионализм психолога'
				path='/comfort-level'
				answer={professionalismRating}
				setAnswer={answer => setData(answer)}
			/>
		</>
	)
}

export default Professionalism
