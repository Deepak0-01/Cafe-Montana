import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { clearPreview } from './features/previewSlice';
import { logOut, selectUser } from './features/userSlice';
import { auth } from './Firebase';
import Hamburger from './Hamburger';
import './Header.css';





function Header() {
    const handleClick = ()=>{
        

        setClick(!click);


    }

     const [click, setClick] = useState(false);
     const history = useHistory();

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogOut =() => {

        if(user)
        {

            auth.signOut().catch((error)=>alert(error.message))
            .then(dispatch(logOut()));


        }

        dispatch(clearPreview());

        history.push("/");

      
    }

   

    const activeclick="header active";
    const notactiveclick = "header notactive";


    return (
        <div className={click?activeclick:notactiveclick}>

        <div onClick={handleClick}><Hamburger /></div>

        <div>

            <img className="logo" src="logo.png"/>
        </div>

        <div className="navlinks">

            <ul className={click?"ulactive": "ulnotactive"} >

               <Link to="/home"> <li>Home</li></Link>
           <Link to="/preview"><li>Profile</li></Link> 
                <Link to="/orders"><li>Your Orders</li></Link>
               {user? <li className="navlinks__logout" onClick={handleLogOut}>Logout</li>:<Link to="/login"><li className="navlinks__logout" onClick={handleLogOut}>LogIn</li></Link>}
            </ul>
        </div>
            
        </div>
    )
}

export default Header;
