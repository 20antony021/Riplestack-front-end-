import { createSlice } from '@reduxjs/toolkit'

export const platformSlice = createSlice({
  name: 'platforms',
  initialState: {
    facebook: null,
    twitter: null,
    instagram: null,
    tiktok: null
  },
  reducers: {
    setPlatform: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    updatePlatform: (state, action) => {
        const { account, data } = action.payload;
      state[account] = data;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlatform, updatePlatform } = platformSlice.actions

export default platformSlice.reducer