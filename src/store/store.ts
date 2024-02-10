import { configureStore } from '@reduxjs/toolkit'
import reviewReducer from '@/store/features/review.slice'
import adminReducer from '@/store/features/admin.slice'
import loaderReducer from '@/store/features/loader.slice'


export const store = configureStore({
  reducer: {
    review: reviewReducer,
    admin: adminReducer,
    loader: loaderReducer,
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch