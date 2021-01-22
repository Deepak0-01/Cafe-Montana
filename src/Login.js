import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from './Firebase';
import {Link, useHistory} from "react-router-dom";
import { selectUser } from './features/userSlice';
import {useSelector,useDispatch} from 'react-redux';
import { setPreview } from './features/previewSlice';
import { clickIn } from './features/clickSlice';





function Login() {

   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   console.log(user);

    const handleLogin = ()=> {

      dispatch(clickIn({
          onclick:true,
      }));

        
    
        auth.signInWithPopup(provider)
       
        .catch((error)=>alert(error.message));
        

       



    
    }
    return (
        <div className="login">

        <img className="login_logo" src="logo.png" alt="cafe-logo"/>
        <h2>Enjoy Your Favourite Food </h2>

       <Link to="/register"> <button className="register__button" >Register</button></Link>

       <Link to="/login"> <button className="login__button--direct" >Login</button></Link>
        

        <div className="login__button">

        <img className="google__logo" src="google.png" />
        
<button className="login__button" onClick={handleLogin}>Login With Google</button>


        </div>

      


            
        </div>
    )
}



export default Login
