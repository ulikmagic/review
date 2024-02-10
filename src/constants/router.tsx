import Header from '@/components/Header'
import Comment from '@/pages/Comment'
import Home from '@/pages/Home'
import Professionalism from '@/pages/Professionalism'
import ReviewList from '@/pages/ReviewList'
import СomfortLevel from '@/pages/СomfortLevel'

export const router = [
	{
		path: '/',
		element: (
			<>
				<Header />
				<Home />
			</>
		),
	},
	{
		path: '/professionalism',
		element: (
			<>
				<Header />
				<Professionalism />
			</>
		),
	},
	{
		path: '/comfort-level',
		element: (
			<>
				<Header />
				<СomfortLevel />
			</>
		),
	},
	{
		path: '/comment',
		element: (
			<>
				<Header />
				<Comment />
			</>
		),
	},
	{
		path: '/review-list',
		element: (
			<>
				<Header />
				<ReviewList />
			</>
		),
	},
]
