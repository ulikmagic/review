import { IReview } from "../store/features/review.slice"

export interface IComment extends IReview {
  name: string
  id: string | number
  firebase_id?: string | number
}