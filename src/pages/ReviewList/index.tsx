import { FC, useEffect, useState } from 'react'
import List from './components/List'
import { IComment } from '../../types/api'
import { deleteReview, getReviewList } from '../../utils/api'
import Popup from '../../components/UI/Popup'
import CommentReview from '../../components/CommentReview'
import Loader from '../../components/UI/Loader'
import { useAppSelector } from '../../store/hooks'
import { Languages } from '../../types/language'

const ReviewList: FC = () => {
	const [modalComment, setModalComment] = useState<string | number | null>(null)
	const [list, setList] = useState<IComment[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const language = useAppSelector(state => state.language.language)

	const current: IComment | undefined = list?.find(
		item => item.id === modalComment
	)

	const getList = () => {
		setIsLoading(true)
		getReviewList()
			.then((data: IComment[]) => setList(data))
			.finally(() => setIsLoading(false))
	}

	const removeReview = (id: string | number) => {
		setIsLoading(true)

		deleteReview(id).finally(() => {
			setIsLoading(false)
			getList()
		})
	}

	useEffect(getList, [])

	return (
		<div className='h-screen'>
			<div className='container pt-16 pb-7'>
				<div className='absolute w-28 h-28 bg-pink rounded-ss-full bottom-0 right-0 z-[-1]' />
				<div className='absolute w-28 h-28 bg-pink rounded-ee-full top-0 left-0 z-[-1]' />
				<h1 className='font-rubik text-2xl text-white font-medium text-center mb-5'>
					{language === Languages.ru ? 'Список отзывов' : 'List of reviews'}
				</h1>
				{isLoading ? (
					<Loader className='w-14 h-14 m-auto mt-10' />
				) : list.length === 0 ? (
					<h1 className='text-lg font-rubik text-center text-dark-blue'>
						{language === Languages.ru
							? 'Ничего не найдено...'
							: 'Nothing found...'}
					</h1>
				) : (
					<List list={list} remove={removeReview} openModal={setModalComment} />
				)}
			</div>
			{current && (
				<>
					<Popup onClick={() => setModalComment(null)} className='z-600' />
					<CommentReview close={() => setModalComment(null)} review={current} />
				</>
			)}
		</div>
	)
}

export default ReviewList
