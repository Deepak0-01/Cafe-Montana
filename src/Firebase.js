import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCKb0kFU0tmUYyLCTyJdT8ikPJqnRu2DLo",
    authDomain: "cafe-montana.firebaseapp.com",
    projectId: "cafe-montana",
    storageBucket: "cafe-montana.appspot.com",
    messagingSenderId: "818724499981",
    appId: "1:818724499981:web:5fd70b0f5f7e083759db44",
    measurementId: "G-D5H5C6N22G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

 export{auth, provider,storage};
  export default db;