import { FC, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LocalStorage } from '@/utils/localStorage'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { saveReviewData } from '@/store/features/review.slice'
import { setIsAuth } from '@/store/features/admin.slice'
import Loader from '@/components/UI/Loader'
import { router as routerList } from './constants/router'
import Popup from '@/components/UI/Popup'

const router = createBrowserRouter(routerList)

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
			<RouterProvider router={router} />
		</div>
	)
}

export default App
