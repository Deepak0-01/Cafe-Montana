import React ,{useState} from 'react';
import { logIn} from './features/userSlice';
import { setPreview} from './features/previewSlice';
import db, { auth, storage } from './Firebase';
import './Registerform.css';
import {useDispatch,useSelector} from 'react-redux';
import {  Link, Redirect, useHistory } from 'react-router-dom';
import { removeLoader, selectLoader, setLoader } from './features/loaderSlice';


function Registerform() {

   

    const dispatch = useDispatch();

    const loader = useSelector(selectLoader);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [org, setOrg] = useState("");
    const [empid, setEmpid] = useState("");
    const [mobile, setMobile] = useState("");
    const [image, setImage] = useState(null);



    
    


    const history = useHistory();


    



    
    

   

    const handlePreview = async(e)=>{

        e.preventDefault();

       


       

      



        dispatch(setPreview({
            previd:{email},
            name:{name}
        }));


        


        if(name&&empid&&mobile&&org&&email)
        {

     

        auth.createUserWithEmailAndPassword(email,password)
      
        .catch(error=>alert(error.message));

    

        if(name&&password)
        {
            
        if(image)

        {

           
           

        

        const storageRef = storage.ref();
        const fileRef = storageRef.child(image.name);
         await fileRef.put(image);
       

         



     await   db.collection("users").doc(email).set({

            name:name,
            email:email,
            org:org,
            empid:empid,
            mobile:mobile,
            imgurl: await fileRef.getDownloadURL(),
           



        


        })  .then(history.push("/"));

        



    }

    else{

      

     await   db.collection("users").doc(email).set({

            name:name,
            email:email,
            org:org,
            empid:empid,
            mobile:mobile,
            
           






        })  .then(history.push("/"));
        

    }


   

        


        
   


       
        }


      setImage(null);
        setName("");
        setEmail("");
        setEmpid("");
        setMobile("");
        setOrg("");
        setPassword("");
       
       
      

    }

    else{

        alert("Please fill all fields");
    }

       


    };



    return (
        <div className="registerform">

      

        <div className="container c1">

        <form onSubmit={handlePreview}>

        <input onChange={(e)=>setName(e.target.value)} className="ip1" type="text" placeholder="Full Name"/>
        <input  onChange={(e)=>setEmail(e.target.value)} className="ip1" type="email" placeholder="Enter Your Email"/>
        <input  onChange={(e)=>setOrg(e.target.value)} className="ip1" type="text" placeholder="Organization Name"/>
        <input onChange={(e)=>setPassword(e.target.value)} className="ip1" type="password" placeholder="Password"/>
        <input  onChange={(e)=>setEmpid(e.target.value)} className ="ip1" type="text" placeholder="Employee Id Number"/>
        <input  onChange={(e)=>setMobile(e.target.value)} className="ip1" type="text" placeholder="Mobile Number"/>
        
         <div className="idcard">
         <p>Upload Id</p>
        <input label="Valid Id Card"  onChange={(e)=>setImage(e.target.files[0])} type="file" placeholder="Only png and jpeg"/>
        </div>

       
    <Link to="/preview"> <button onClick={handlePreview}>Register Now!</button></Link>

        
        
        </form>
        


        </div>

        
            
        </div>
    )
}

export default Registerform
