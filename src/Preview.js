import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { selectPreview } from './features/previewSlice';
import { selectUser } from './features/userSlice';

import db from './Firebase';
import Header from './Header';
import './Preview.css';

function Preview() {

   

    const [userinfo, setUserinfo] = useState([]);

    const previewid = useSelector(selectPreview);

   


   const history = useHistory();
   const user = useSelector(selectUser);

   


   useEffect(() => {

    db.collection('users').onSnapshot((snapshot)=>{

        setUserinfo(snapshot.docs.map((doc)=>({

            id:doc.id,
            data:doc.data(),
        })))
    })

   
     
   }, []);

    

   const previd =  previewid.previd.empid;


  

    return (
       previd? < div className="preview">

      

      
       <h3 className="h3heading">User need to register for seeing the profile</h3>


        {userinfo.map((eachuser)=>  eachuser.id===previd?(
      
    <div className="previewcard" >

         
       <div className="previewbox">

           <span>Name: </span>
          <h3>{eachuser.data.name}</h3>

          </div>
          <div className="previewbox">
          <span>Mobile: </span>
          <h3>{eachuser.data.mobile}</h3>

          </div>

          <div className="previewbox">
          <span>Email: </span>
          <h3>{eachuser.data.email}</h3>

          </div>


     
          <div className="previewbox">
          <span>Organization: </span>
          <h3>{eachuser.data.org}</h3>

          </div>
          <div className="previewbox">
          <span>Employee Id: </span>
          <h3>{eachuser.data.empid}</h3>

          </div>
          <div className="previewbox">
          <span>Id Preview: </span>

          <img className="profile_img" src={eachuser.data.imgurl} alt="img"/>
         
          </div>
       

       <Link to="/"> <button  className="ok_button">Ok</button></Link>
        

        </div>
      
      
      ):"")}

         
        </div>:alert("Not Available You have to Register First")
    )
}

export default Preview
