import { FC } from 'react'
import DeleteIcon from '../../../assets/icons/delete.svg'
import { IComment } from '../../../types/api'
import { useAppSelector } from '../../../store/hooks'
import { feelings } from '../../../constants/feelings'
import { MyEvent } from '../../../types/event'

interface ListProps {
	list: IComment[]
	remove: (id: string | number) => void
	openModal: (id: string | number) => void
}

const List: FC<ListProps> = ({ list, remove, openModal }) => {
	const isAuth = useAppSelector(state => state.admin.isAuth)

	return (
		<ul className='flex flex-col gap-4'>
			{list.map(comment => {
				const feel = feelings.find(
					item => item.id === comment.feelingsBeforeMary
				)
				return (
					<li
						key={comment.id}
						className='w-full relative min-h-20 bg-white rounded-md relative p-3'
						onClick={() => openModal(comment.id)}
					>
						<div className='flex items-center gap-2'>
							{isAuth && (
								<button
									className='absolute top-2 right-2'
									onClick={(e: MyEvent) => {
										e.stopPropagation() // Останавливаем распространение события
										comment.firebase_id && remove(comment.firebase_id)
									}}
								>
									<img src={DeleteIcon} alt='delete' className='w-5' />
								</button>
							)}
							<img className='w-8 h-8' src={feel?.emoji} alt='emoji' />
							<p className='font-poppins text-dark-blue font-rubik font-medium text-md'>
								{comment.name}
							</p>
						</div>
						<p>{comment.comment}</p>
					</li>
				)
			})}
		</ul>
	)
}

export default List
