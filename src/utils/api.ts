import { DB } from "@/constants/firebase";
import { IComment } from "@/types/api";
import { child, get, push, ref, remove, update } from "firebase/database";

const parseData = (data: any) =>
  Object.keys(data)
    .map((key: string) => ({ firebase_id: key, ...data[key] }))

export const getReviewList = () =>
  get(child(ref(DB), 'review-list'))
    .then((snapshot) => snapshot.exists() ? parseData(snapshot.val()) : [])

export const addReview = (data: IComment) => {
  const newPostKey = push(child(ref(DB), 'posts')).key;

  const updates: { [key: string]: any } = {};
  updates['review-list/' + newPostKey] = data;

  return update(ref(DB), updates);
}

export const deleteReview = (id: string | number) => {
  const reviewRef = ref(DB, `review-list/${id}`);
  return remove(reviewRef)
}