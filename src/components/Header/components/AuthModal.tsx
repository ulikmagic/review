import clsx from 'clsx'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../store/hooks'
import { setIsLoader } from '../../../store/features/loader.slice'
import { setIsAuth } from '../../../store/features/admin.slice'
import { LocalStorage } from '../../../utils/localStorage'

interface AuthModalProps {
	close: () => void
}

interface IForm {
	username: string
	password: string
}

const inputClass = `
	border border-grey border-1 rounded-md 
	font-poppins py-1 px-2 bg-gray-50 outline-none
	hover:border-dark-blue text-sm
`

const labelClass = 'block text-sm font-poppins font-medium text-dark-blue'

const AuthModal: FC<AuthModalProps> = ({ close }) => {
	const [form, setForm] = useState<IForm>({ username: '', password: '' })
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const isDisabled = Object.values(form).some(text => text.length <= 2)

	const changeForm = (key: string, value: string) =>
		setForm({ ...form, [key]: value })

	const sendRequest = () => {
		close()
		dispatch(setIsLoader(true))
		if (form.username === 'admin' && form.password === '1204admin') {
			dispatch(setIsAuth(true))
			LocalStorage.setData(true, 'isAuth')
		}
		setTimeout(() => {
			dispatch(setIsLoader(false))
			navigate('/review-list')
		}, 1500)
	}

	return (
		<div
			className={`
				fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
				bg-white w-[300px] z-400 rounded-lg min-h-52 py-4 px-3 pb-8 flex flex-col items-center
			`}
		>
			<button
				onClick={close}
				className='text-black w-4 h-4 absolute top-2 right-4'
			>
				&#10006;
			</button>
			<h1 className='text-lg font-poppins font-bold text-dark-blue mt-2'>
				Админка для Мэры
			</h1>
			<div className='flex flex-col gap-3 mt-3'>
				<div>
					<label className={labelClass}>Логин</label>
					<input
						type='text'
						value={form.username}
						onChange={(e: any) => changeForm('username', e.target.value)}
						className={inputClass}
					/>
				</div>
				<div>
					<label className={labelClass}>Пароль</label>
					<input
						type='password'
						className={inputClass}
						value={form.password}
						onChange={(e: any) => changeForm('password', e.target.value)}
					/>
				</div>
				<button
					onClick={sendRequest}
					disabled={isDisabled}
					className={clsx(
						'w-full mt-1 py-1 rounded-md text-white font-poppins cursor-pointer',
						isDisabled ? 'bg-white-orange' : 'bg-orange'
					)}
				>
					Войти
				</button>
			</div>
		</div>
	)
}

export default AuthModal
