import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loader: null,
  },
  reducers: {
   
    setLoader: (state, action) => {
      state.loader = action.payload;
    },

       
  

    removeLoader:(state,action)=>{

      state.loader=null;
    },

    
  },
});

export const { setLoader ,removeLoader} = loaderSlice.actions;





export const selectLoader = state => state.loader.loader;

export default  loaderSlice.reducer;
