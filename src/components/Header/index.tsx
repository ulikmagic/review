import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useNavigate } from 'react-router-dom'
import { saveReviewData } from '../../store/features/review.slice'
import { LocalStorage } from '../../utils/localStorage'
import { setIsAuth } from '../../store/features/admin.slice'
import Burger from '../UI/Burger'
import Popup from '../UI/Popup'
import Menu from './components/Menu'
import AuthModal from './components/AuthModal'
import LanguageIcon from '../../assets/icons/language.svg'
import { Languages } from '../../types/language'
import { changeLanguage } from '../../store/features/language.slice'

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
	const language = useAppSelector(state => state.language.language)

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

	const setLanguage = () => {
		const current = language === Languages.en ? Languages.ru : Languages.en
		dispatch(changeLanguage(current))
		LocalStorage.setData(current, 'language')
	}

	return (
		<header className='pt-2 absolute right-0'>
			<nav className='container flex gap-4 items-center'>
				<button className='cursor-pointer z-10' onClick={setLanguage}>
					<img className='w-8' src={LanguageIcon} alt="language" />
				</button>
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
