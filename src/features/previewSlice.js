import { createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
  name: "previewid",
  initialState: {
    previewid: null,
  },
  reducers: {
   
    setPreview: (state, action) => {
      state.previewid = action.payload;
    },

    clearPreview:(state,action)=>{

      state.previewid=null;
    },

  

    
  },
});

export const { setPreview ,clearPreview} = previewSlice.actions;





export const selectPreview = state => state.previewid.previewid;

export default  previewSlice.reducer;
