import React from 'react';
import { selectBasket } from './features/basketSlice';
import './Orders.css';
import {useSelector }  from 'react-redux';
import Product from './Product';
import BillCard from './BillCard';
import Header from './Header';
import { selectUser } from './features/userSlice';
import Loginform from './Loginform';
import BasketProduct from './BasketProduct';
import { selectPreview } from './features/previewSlice';
import Registerform from './Registerform';


function Orders() {

    const basket = useSelector(selectBasket);
    const user = useSelector(selectUser);
    console.log(basket);
  
 
    return (

       <>

     

            
        {user? <div className="orders">

           

      

        <div className="orders_dishes">

        {
           
           
            basket.map((item)=> (<BasketProduct className="orders_product" id={item.id}  url={item.imgurl.url} drinkName = {item.drinkName.drinkName} price={item.price.price}/>))
            

        }

      


        </div>

       

        <BillCard/>


            
            
        </div>:<Registerform/>}


        </>

        
    )
}

export default Orders








