import React  from 'react';
import './Product.css';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { itemIn } from './features/basketSlice';
import {useDispatch} from 'react-redux';




function Product({id,url,drinkName,price}) {

   
    const dispatch = useDispatch();
  
   


    const handleOrderIn = () =>{
       

        dispatch(itemIn({

            id:id,
            imgurl:{url},
            drinkName:{drinkName},
            price:{price}

        }))



        


    }

    

   
    return (
        <div className="product" >

        <img className="product_img1" src={url} />
       <div className="overlay">

        <h1>{drinkName}</h1>
        <p className="product_para">Perfect For A Perfect Day</p>
        <p className="product_price">Price : ${price}</p>
       <Link to="/orders"> <Button onClick={handleOrderIn} className="Button" variant="contained" color="red"> <BorderColorOutlinedIcon/> Order Now</Button></Link>

    

        
        </div> 
        

       
        
            
        </div>

    )
}

export default Product
