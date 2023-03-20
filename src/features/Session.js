import { createSlice } from "@reduxjs/toolkit";


const LoginSlice=createSlice({
    name:'userLogin',
    initialState:{value:{id:1,name:"Alien",password:"Alien",isLogin:0} },
    reducers:{
        login:(state,action)=>
        {
            state.value=action.payload;
        },
        logout:(state,action)=>
        {
            state.value=action.payload;
        }
    }
});



export const {login,logout} =LoginSlice.actions
export default LoginSlice.reducer

