import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from "js-cookie";

type TUser = {
  _id: string
  name: string
  role: string
  phoneNumber: string
  email: string
  address: string
  photo?: any
}
type TInitialState = {
  user: TUser | null
}

const currentUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;

const initialState: TInitialState = {
  user: currentUser ? JSON.parse(currentUser) : null
}
// console.log(initialState.user);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TUser>) => {
      state!.user = action?.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    removeUser: (state) =>{
      state.user = null;
      localStorage.removeItem("user");
      Cookies.remove("token", {path: "/"});
    }
  }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
