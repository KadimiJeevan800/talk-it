

import { createSlice } from "@reduxjs/toolkit";

var count=2;
const postSlice=createSlice({
    name:'post',
    initialState:{value:[{pid:1,msg:"The man who does not read books has no advantage over the one who cannot read them.” —Mark Twain",like:1,comments:["Super"," nice"]},
                        {pid:2,msg:"Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” —Malcolm X",like:3,comments:["Good"]}
                    ] 
                },
    reducers:{
        add:(state,action)=>
        {
            // state.value=action.payload;
                state.value.push({pid:++count,msg:action.payload.msg,like:0,comments:[]});
        },
        remove:(state,action)=>
        {
            // console.log(action.payload);
            // state.value.splice(action.payload.id-1,1);
             state.value.forEach(function(item, index, object) {
                if (item.pid === action.payload.id) {
                   state.value.splice(index, 1);    
                }        
              });
        },
        edit:(state,action)=>
        {
            // console.log(action.payload);
            state.value.forEach(function(item, index, object) {
                if (item.pid === action.payload.id) {
                    // console.log("editing : ",state.value[index].msg);
                   state.value[index].msg=action.payload.data;    
                }        
              });
        },
        like:(state,action)=>
        {
            // console.log("like"+action.payload.id);
            state.value.forEach(function(item, index, object) {
                if (item.pid === action.payload.id) {
                    // console.log("editing : ",state.value[index].msg);
                   state.value[index].like++;   
                }        
              });

        },
        comment:(state,action)=>
        {
            // console.log("Cmts are working...")
            state.value.forEach(function(item, index, object) {
                if (item.pid === action.payload.id) {
                  
                   state.value[index].comments.push(action.payload.cmts);  
                }        
              });
        }
        
    }
});

export const {add,remove,edit,like,comment} =postSlice.actions
export default postSlice.reducer

