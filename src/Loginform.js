import React ,{useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { logIn } from './features/userSlice';
import {useDispatch} from 'react-redux';


import { auth } from './Firebase';
import './Loginform.css';
import { setPreview } from './features/previewSlice';



function Loginform() {

    const history = useHistory();
    const dispatch = useDispatch();
  


    const [email, setEmail] = useState(null);
  
   
    const [password,setPassword] = useState(null);
  

    const handleLogin = (e) =>{

        e.preventDefault();

        




        if(email && password  )

        {
           
     

    
            try{

            
            auth.signInWithEmailAndPassword(email,password)
            .then()
            .catch(error=>alert(error.message));

            history.push("/");

            }catch{
                alert("Invalid Credentials")
                history.push("/");
            }
           

          

            setEmail(null);
            setPassword(null);
         

        }

        else alert("Please Fill your credentials");

        

      
    }

    return (
        <div className="loginform">
 
        <section>

        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>

        </section>


        <div className="container containerfill">
            <div className="formbox">
                <form className="formfill">
                 <h1>Login Form</h1>

               <div className="inputBox">
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email"></input>
                </div>

                <div className="inputBox">
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"></input>
                </div>

                <button className="login-button" onClick={handleLogin} >Login</button>

                </form>
                    
                
            </div>
        </div>
            
        </div>
    )
}

export default Loginform
