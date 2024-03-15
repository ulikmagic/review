import clsx from 'clsx'
import { FC } from 'react'
import ExitIcon from '../../../assets/icons/exit.svg'
import CommentIcon from '../../../assets/icons/comment.svg'
import RefreshIcon from '../../../assets/icons/refresh.svg'
import AdminIcon from '../../../assets/icons/admin.svg'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../store/hooks'
import { Languages } from '../../../types/language'

interface MenuProps {
	isMenu: boolean
	clearData: () => void
	closeMenu: () => void
	openModal: () => void
	logout: () => void
}

const Menu: FC<MenuProps> = ({
	isMenu,
	clearData,
	closeMenu,
	openModal,
	logout,
}) => {
	const isAuth = useAppSelector(state => state.admin.isAuth)
	const language = useAppSelector(state => state.language.language)
	return (
		<div
			className={clsx(
				'w-menu fixed h-full bg-white top-0 duration-500 z-100 pt-20 flex flex-col items-center',
				isMenu ? 'right-0' : 'right-[-350px]'
			)}
		>
			<ul className='flex flex-col gap-4'>
				<li>
					<NavLink
						to='/'
						onClick={clearData}
						className='flex items-center gap-1'
					>
						<div className='w-8'>
							<img className='w-7' src={RefreshIcon} alt='refresh' />
						</div>
						<p className='text-dark-blue font-medium font-poppins'>
							{language === Languages.ru
								? 'Вернуться в начало'
								: 'Return to start'}
						</p>
					</NavLink>
				</li>
				{isAuth && (
					<li>
						<NavLink
							to='/review-list'
							onClick={closeMenu}
							className='flex items-center gap-1'
						>
							<div className='w-8'>
								<img className='w-7' src={CommentIcon} alt='comment' />
							</div>
							<p className='text-dark-blue font-medium font-poppins'>
								{language === Languages.ru
									? 'Список отзывов'
									: 'List of reviews'}
							</p>
						</NavLink>
					</li>
				)}
				{!isAuth && (
					<li className='flex items-center gap-1' onClick={openModal}>
						<div className='w-8'>
							<img src={AdminIcon} alt='admin' className='w-7' />
						</div>
						<p className='text-dark-blue font-medium font-poppins'>
							{language === Languages.ru ? 'Авторизация' : 'Login'}
						</p>
					</li>
				)}
				{isAuth && (
					<li className='flex items-center gap-1' onClick={logout}>
						<div className='w-8'>
							<img src={ExitIcon} alt='admin' className='w-7' />
						</div>
						<p className='text-dark-blue font-medium font-poppins'>
							{language === Languages.ru ? 'Выйти' : 'Exit'}
						</p>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Menu
