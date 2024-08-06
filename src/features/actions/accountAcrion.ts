import { createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constans"
import type { userRequest, userUpdatePassword, userUpdateRequest } from "../../utils/interface"




export const registerFetch = createAsyncThunk(
  "account/registerFetch",
  async (registerUser: userRequest, thunkAPI) => {

      const res = await fetch(`${BASE_URL}/account/user`, {
        method: "POST",
        body: JSON.stringify(registerUser),
        headers: { "Content-Type": "application/json" }
      })
      if(!res.ok){
        throw new Error(`Failed to register user: ${res.status}`);
      }
      const data = await res.json()
      return data
  }
)


export const loginFetch = createAsyncThunk(
  "account/loginFetch2",
  async (token: string, thunkAPI) => {
    // const token = `Basic ${btoa(`${loginUser.userName}:${loginUser.password}`)}`;
    try{
      const response = await fetch(`${BASE_URL}/account/login`, {
        method: 'POST',
        headers: {
          Authorization: token
        }
      });
      if(!response.ok){
        throw new Error('Error: 401');
      }
      return await response.json()
    }catch(error: any){
      const state: any = thunkAPI.getState();
      console.log(state)
      if(error.message === 'Error: 401' && state.user.counterRejected >= 0 ){
        if(state.user.counterRejected === 3){
          throw new Error('You need wait 5 minutes');
        }else{
          throw new Error(`you have ${state.user.counterRejected + 1}/3 attempts`);
        }
      }
      console.log(error);
      throw error;
    }

  }
);


export const updateFetch = createAsyncThunk(
  "account/updateFetch",
  async (updateUser:userUpdateRequest, thunkAPI) => {
    const user = `Basic ${btoa(`${updateUser.userName}:${updateUser.password}`)}`;
    const body = {
      firstName: updateUser.firstName,
      lastName: updateUser.lastName
    };

    const response = await fetch(`${BASE_URL}/account/user`, {
      method: 'Put',
      headers: {
        Authorization: user,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      redirect: 'follow'
    });

    if(!response.ok) {
      throw new Error('Error, try again!');
    }
    const data = response.json();
    console.log(data);
    return data;
  }
)


export const passwordFetch = createAsyncThunk(
  "account/passwordFetch",
  async (passwordChange:userUpdatePassword, thunkAPI)=> {
    const user = `Basic ${btoa(`${passwordChange.userName}:${passwordChange.password}`)}`;
    try {
      const response = await fetch(`${BASE_URL}/account/user/password`, {
        method: 'Put',
        headers: {
          Authorization: user,
          'X-Password': passwordChange.newPassword,
        },
      });

      console.log(response);
      console.log(passwordChange.newPassword)

      if(response.status === 401){
        throw new Error('Error 401 try again');
      }
      if(!response.ok){
        throw new Error('Error, something went wrong, or the password is incorrect... try again!' + response.status);
      }
    }
    catch(error: any){
      if (error.message === "Error 401 try again") {
        throw new Error('Password not try')
      }
    }
  }
)