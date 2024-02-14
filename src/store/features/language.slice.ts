import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Languages } from '../../types/language'

interface ILanguage {
  language: Languages
}

const initialState: ILanguage = {
  language: Languages.ru
}

export const languageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Languages>) => {
      state.language = action.payload
    },
  }
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer