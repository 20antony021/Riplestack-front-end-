import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    platforms: [],
    token: null,
    user: null
  },
  reducers: {
    login: (state, action) => {
      const { platforms, token, user } = action.payload;
      state.platforms = platforms;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.platforms = [];
      state.token = null;
      state.user = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer