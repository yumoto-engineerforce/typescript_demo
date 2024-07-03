import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp(state, action: PayloadAction<{ email: string; password: string }>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { signUp } = userSlice.actions;
export default userSlice.reducer;