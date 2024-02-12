import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LocalStorage } from '../../utils/localStorage'

const CheckReviewComponent = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const checkReview = () => {
			const review = LocalStorage.getData('review')
			if (!review) navigate('/')
		}

		checkReview()
	}, [navigate])

	return null // или любой другой JSX, если это нужно
}

export default CheckReviewComponent
