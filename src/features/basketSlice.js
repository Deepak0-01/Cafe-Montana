import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
  },
  reducers: {
   
    itemIn: (state, action) => ({

      ...state,
      basket:[...state.basket, action.payload]
      

      
    }),


    itemOut:(state,action)=>{

       const index = state.basket.findIndex(
        (basketitem) => basketitem.id===action.payload.id);
    
    

    let newbasket = [...state.basket];

    if(index>=0)
    {
        newbasket.splice(index,1);
    }

    else{
        console.warn(`cant remove item (id: ${action.id}) as it is not in the basket`);
    }

    return({
        ...state,
        basket:newbasket,
    });

    
     

    },
    
     basketEmpty:(state,action)=>({

      basket:[]
    }),

  }
  
});

export const { itemIn ,itemOut,basketEmpty} = basketSlice.actions;





export const selectBasket = state => state.basket.basket;

export default  basketSlice.reducer;


/*
  const index = state.basket.findIndex(
        (basketitem) => basketitem.id===action.id);
    
    

    let newbasket = [...state.basket];

    if(index>=0)
    {
        newbasket.splice(index,1);
    }

    else{
        console.warn(`cant remove item (id: ${action.id}) as it is not in the basket`);
    }

    return({
        ...state,
        basket:newbasket,
    });*/