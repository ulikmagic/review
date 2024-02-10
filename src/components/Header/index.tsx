import { useAppDispatch } from '@/store/hooks'
import { saveReviewData } from '@/store/features/review.slice'
import { LocalStorage } from '@/utils/localStorage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Popup from '@/components/UI/Popup'
import AuthModal from './components/AuthModal'
import Burger from '@/components/UI/Burger'
import { setIsAuth } from '@/store/features/admin.slice'
import Menu from './components/Menu'
import clsx from 'clsx'

const defaultState = {
	feelingsBeforeMary: 0,
	professionalismRating: 0,
	comfortLevelWithMary: 0,
	comment: '',
}

const Header = () => {
	const dispatch = useAppDispatch()
	const [isModal, setIsModal] = useState<boolean>(false)
	const [isMenu, setIsMenu] = useState<boolean>(false)
	const navigate = useNavigate()

	const closeModal = () => setIsModal(false)

	const closeMenu = () => setIsMenu(false)

	const openModal = () => {
		closeMenu()
		setIsModal(true)
	}

	const clearData = () => {
		dispatch(saveReviewData(defaultState))
		LocalStorage.clear()
		closeMenu()
	}

	const logout = () => {
		LocalStorage.clear()
		navigate('/')
		closeMenu()
		dispatch(setIsAuth(false))
	}

	return (
		<header className='pt-2 absolute right-0'>
			<nav className='container'>
				<Burger
					status={isMenu}
					className='z-200'
					onClick={() => setIsMenu(!isMenu)}
				/>
				<Menu
					logout={logout}
					clearData={clearData}
					openModal={openModal}
					isMenu={isMenu}
					closeMenu={closeMenu}
				/>
			</nav>
			{isModal && <Popup onClick={closeModal} className='z-300' />}
			{isModal && <AuthModal close={closeModal} />}
			{isMenu && <Popup onClick={() => setIsMenu(false)} className='z-50' />}
		</header>
	)
}

export default Header
