import { FC, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ReviewList from './pages/ReviewList'
import Header from './components/Header'
import Professionalism from './pages/Professionalism'
import СomfortLevel from './pages/СomfortLevel'
import Comment from './pages/Comment'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { LocalStorage } from './utils/localStorage'
import { setIsAuth } from './store/features/admin.slice'
import { saveReviewData } from './store/features/review.slice'
import Loader from './components/UI/Loader'
import Popup from './components/UI/Popup'

const App: FC = () => {
	const dispatch = useAppDispatch()
	const isLoader = useAppSelector(state => state.loader.isLoader)

	useEffect(() => {
		const data = LocalStorage.getData('review')
		if (data) dispatch(saveReviewData(data))
	}, [])

	useEffect(() => {
		const isAuth = LocalStorage.getData('isAuth')
		if (isAuth) dispatch(setIsAuth(true))
	}, [])
	return (
		<div>
			{isLoader && (
				<>
					<Loader className='z-999 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20' />
					<Popup className='z-800' />
				</>
			)}
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/professionalism' element={<Professionalism />} />
					<Route path='/comfort-level' element={<СomfortLevel />} />
					<Route path='/comment' element={<Comment />} />
					<Route path='/review-list' element={<ReviewList />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
