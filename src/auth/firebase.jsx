import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apikey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service

//? New User
const auth = getAuth(app);

export const createUser = async(email,password,navigate) => {
    
    try {
       let userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password)
        navigate("/")
        console.log(userCredential);
    } catch (err) {
        console.log(err)
    }
}

//email/password ile girişi enable yap

export const signIn =async(email,password,navigate) => {

    try {
        let userCredential = await signInWithEmailAndPassword(
         auth, 
         email, 
         password
         );
         navigate("/")
         console.log(userCredential);
     } catch (err) {
         console.log(err)
     }
    
}
