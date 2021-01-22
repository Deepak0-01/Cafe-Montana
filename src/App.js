import React,{useEffect} from 'react';



import './App.css';
import Sidebar from './Sidebar';
import Hamburger from './Hamburger';
import Landing from './Landing';
import {useSelector,useDispatch} from 'react-redux';
import { logIn, logOut, selectUser } from './features/userSlice';
import { auth } from './Firebase';
import Home from './Home';
import {BrowserRouter as Router , Route, Link, Switch, useHistory} from 'react-router-dom';
import Orders from './Orders';
import Loginform from './Loginform';
import Register from './Register';
import Preview from './Preview';
import { basketEmpty } from './features/basketSlice';
import Header from './Header';
import { clearPreview, selectPreview, setPreview } from './features/previewSlice';
import { clickOut, selectClick } from './features/clickSlice';



function App() {

  const user = useSelector(selectUser);
  const click = useSelector(selectClick);
 
  const dispatch = useDispatch();

  const history = useHistory();



  useEffect(()=>{

    auth.onAuthStateChanged((authUser)=>{

      if(authUser) //user id logged in
      {

        dispatch(logIn({

          uid:authUser.uid,
          photo:authUser.profileURL,
          email:authUser.email,
          displayName:authUser.displayName,
          
        }));


       
        dispatch(setPreview({

          previd:{empid:authUser.email},
          name:{name:authUser.displayName},
           
        }));



      

    




      }

      else{  //User is Logged out

        dispatch(logOut());

        dispatch(basketEmpty());

        dispatch(clearPreview());

        dispatch(clickOut({
          onclick:false,
        }));

      };

    });


   

  },[]);


  return (
    <div className="App">

   
      
       
   

   <Router>

  

    <Switch>

    <Route exact path ="/">

    { user?<Home/>:<Landing/>}


    </Route>

    <Route path="/home">

    
    { user?<Home/>:<Landing/>}
   </Route>

    <Route path="/orders">

    <Header/>

     {user?<Orders/>:<Loginform/>}
    </Route>
    <Route path="/register">

     <Register/>
    </Route>

    <Route path="/preview">

 

       {user?<Preview/>:<Landing/>}

       
   </Route>


    

    <Route path="/login">

    <Loginform/>
    </Route>




    </Switch>



    </Router>
  

    
  
    
  
     
    </div>
  );
}

export default App;
