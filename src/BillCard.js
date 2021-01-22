import React,{useState,useEffect} from 'react';
import './BillCard.css';
import { selectUser} from './features/userSlice';
import {useSelector,useDispatch} from "react-redux";
import { basketEmpty, selectBasket } from './features/basketSlice';
import { selectPreview } from './features/previewSlice';
import { useHistory } from 'react-router-dom';
import db from './Firebase';

function BillCard() {

    const user = useSelector(selectUser);
    const basket =  useSelector(selectBasket);
    const previewid = useSelector(selectPreview);
    const history = useHistory();
    const [userinfo, setUserinfo] = useState([]);
    const dispatch = useDispatch();
   

    
   useEffect(() => {

    db.collection('users').onSnapshot((snapshot)=>{

        setUserinfo(snapshot.docs.map((doc)=>({

            id:doc.id,
            data:doc.data(),
        })))
    })

   
     
   }, []);


    const handleOrder =()=>{

      

        history.push("/home");
        alert("Order placed");

        dispatch(basketEmpty());
    }
  
    var totalp = 0;

    for(var i=0;i< basket.length;i++)
    {
        totalp+= parseInt(basket[i].price.price,10);

    }





 


    
    return (

        
        <div className="billcard">

        <div className="billcard_details">
        {previewid.name.name? <span className="sp1">Name:</span>:""}
          {previewid?<h2>{previewid.name.name}</h2>:""}
        
        </div>
        <div className="billcard_details">
            <span>Employee Id: </span>
            {previewid?<h2 className="empemail">{previewid.previd.empid}</h2>  :""   }   
        </div>
        <div className="billcard_details">
            <span>Total Items:</span>
            <h2>{basket.length}</h2>
        
        </div>

        <div className="billcard_details">
            <span>Total Amount: </span>
            <h2>${totalp}</h2>
        
        </div>
       
                  
      

       

        <button className="billcard_button" onClick={handleOrder}>Order Now</button>


            
        </div>
    )
}

export default BillCard
