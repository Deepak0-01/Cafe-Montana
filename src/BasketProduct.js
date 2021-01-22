import React  from 'react';
import './Product.css';
import './BasketProduct.css';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { itemIn, itemOut } from './features/basketSlice';
import {useDispatch} from 'react-redux';




function Product({id ,url,drinkName,price}) {

    
  
   
    

   
    const dispatch = useDispatch();
   
   

    const handleOrderOut = () =>{

     
    

        dispatch(itemOut({

            id:id,

           

        }));



        


    }

    

   
    return (
        <div className="product" >

        <img className="product_img1" src={url} />
       <div className="overlay">

        <h1>{drinkName}</h1>
              <p className="product_para">Perfect For A Perfect Day</p>
        <p className="product_price">Price : ${price}</p>
      
        
       <button onClick={handleOrderOut} className="remove_button">Remove from Cart</button>

    

        
        </div> 
        

       
        
            
        </div>

    )
}

export default Product
