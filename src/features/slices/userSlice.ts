import { createSlice } from "@reduxjs/toolkit"
import { loginFetch, passwordFetch, registerFetch, updateFetch } from "../actions/accountAcrion"
import type { User } from "../../utils/interface"


const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: {} as User,
    status: "",
    counterRejected: 0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerFetch.pending, (state) => {
        state.status = "Pending...."
      })
      .addCase(registerFetch.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'Register';
        console.log(action)
      })
      .addCase(registerFetch.rejected, (state , {error}) => {
        state.status = 'Error...!!!' + error.message;
      })
      .addCase(loginFetch.pending, (state) => {
        state.status = 'Pending...'
      })
      .addCase(loginFetch.fulfilled, (state,action) => {
        state.status = 'LogIn';
        state.data = action.payload

      })
      .addCase(loginFetch.rejected, (state,action) => {
        state.status = 'Message :' + action.error.message;
        state.counterRejected ++;
        console.log(state.counterRejected)
      } )
      .addCase(passwordFetch.pending, (state) => {
        state.status = 'Pending...';
      })
      .addCase(passwordFetch.fulfilled, (state, {payload}) => {
        state.status = 'Password is change, thx. Have nice day';
        console.log(payload)
      })
      .addCase(passwordFetch.rejected, (state, action) => {
        state.status = 'Error: ' + action.error.message
      })
      .addCase(updateFetch.pending , (state)=> {
        state.status = 'Pending...'
      })
      .addCase(updateFetch.fulfilled, (state, {payload}) => {
        state.status = 'UpDate your Date';
        state.data = payload;
      })
      .addCase(updateFetch.rejected, (state, action) => {
        state.status = 'Error: ' + action.error.message;
      })
  }
})



export default UserSlice;
