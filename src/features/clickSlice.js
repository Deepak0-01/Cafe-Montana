import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'click',
  initialState: {
    click: null,
  },
  reducers: {
   
    clickIn: (state, action) => {
      state.click = action.payload;
    },

       
  

    clickOut:(state,action)=>{

      state.click=null;
    },

    
  },
});

export const { clickIn ,clickOut} = clickSlice.actions;





export const selectClick = state => state.click.click;

export default  clickSlice.reducer;
