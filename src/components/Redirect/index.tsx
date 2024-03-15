import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/', { replace: true })
	}, [])
	return <></>
}

export default Redirect
