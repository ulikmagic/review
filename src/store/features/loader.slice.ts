import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ILoader {
  isLoader: boolean
}

const initialState: ILoader = {
  isLoader: false
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setIsLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoader = action.payload
    },
  }
})

export const { setIsLoader } = loaderSlice.actions

export default loaderSlice.reducer