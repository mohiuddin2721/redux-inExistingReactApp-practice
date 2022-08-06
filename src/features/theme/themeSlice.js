import { createSlice } from '@reduxjs/toolkit'

const initialColor = {
  color: "",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialColor,
  reducers: {
    autoColorChange: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { autoColorChange } = themeSlice.actions

export default themeSlice.reducer