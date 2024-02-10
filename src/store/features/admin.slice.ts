import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IReview {
  isAuth: boolean
}

const initialState: IReview = {
  isAuth: false
}

export const adminSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  }
})

export const { setIsAuth } = adminSlice.actions

export default adminSlice.reducer