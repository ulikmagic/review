import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IReview {
  feelingsBeforeMary: number
  professionalismRating: number
  comfortLevelWithMary: number
  comment: string
}

export const initialState: IReview = {
  feelingsBeforeMary: 0, // Как вы чувствовали себя до работы с психологом Мэри?
  professionalismRating: 0, // Оцените профессионализм психолога
  comfortLevelWithMary: 0, // Насколько комфортно вы чувствовали себя в работе с Мэри?
  comment: ""
}

export const reviewSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeFeelingsBeforeMary: (state, action: PayloadAction<number>) => {
      state.feelingsBeforeMary = action.payload
    },
    changeProfessionalismRating: (state, action: PayloadAction<number>) => {
      state.professionalismRating = action.payload
    },
    changeComfortLevelWithMary: (state, action: PayloadAction<number>) => {
      state.comfortLevelWithMary = action.payload
    },
    changeComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload
    },

    saveReviewData: (state, action) => {
      const { feelingsBeforeMary, professionalismRating, comfortLevelWithMary, comment } = action.payload;
      state.feelingsBeforeMary = feelingsBeforeMary;
      state.professionalismRating = professionalismRating;
      state.comfortLevelWithMary = comfortLevelWithMary;
      state.comment = comment;
    },
  }
})

export const { changeFeelingsBeforeMary, changeProfessionalismRating, changeComfortLevelWithMary, changeComment, saveReviewData } = reviewSlice.actions

export default reviewSlice.reducer