import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'cname',
  initialState: {
    cname: null,
  },
  reducers: {
   
    setClassName: (state, action) => {
      state.cname = action.payload;
    },

    removeClassName:(state,action)=>{

      state.cname=null;
    }

    
  },
});

export const { setClassName ,removeClassName} = toggleSlice.actions;





export const selectToggle = state => state.name.cname;

export default toggleSlice.reducer;
