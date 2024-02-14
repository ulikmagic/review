import { configureStore } from '@reduxjs/toolkit'
import reviewReducer from './features/review.slice'
import adminReducer from './features/admin.slice'
import loaderReducer from './features/loader.slice'
import languageReducer from './features/language.slice'


export const store = configureStore({
  reducer: {
    review: reviewReducer,
    admin: adminReducer,
    loader: loaderReducer,
    language: languageReducer
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch