import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{value:{id:"1",name:"Alien"} },
    reducers:{
        login:(state,action)=>
        {
            state.value=action.payload;
        }
    }
});



export const {login} =userSlice.actions
export default userSlice.reducer

