import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
      state!.user = action?.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    }
  }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
