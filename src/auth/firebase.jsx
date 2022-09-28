import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider } from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

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

export const createUser = async(email,password,navigate,displayName) => {
    
    try {
       let userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password)
        //?kullanıcı proflini güncellemek için kull. firebase metodu
        await updateProfile(auth.currentUser, {
            displayName:displayName, 
          })
        navigate("/")
        toastSuccessNotify("Register succesfuly")
        console.log(userCredential);
    } catch (err) {
        toastErrorNotify(err.message)
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
         toastSuccessNotify("Logged in succesfuly'")
         navigate("/")
         console.log(userCredential);
     } catch (err) {
         toastErrorNotify(err.message)
         console.log(err);
     }
    
}

//? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yenş kullanıcıyı response olarak dönen firebase metodu.
export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
     setCurrentUser(user)
        } else {
     setCurrentUser(false)
        }
      });
}


export const logOut = () => {
    signOut(auth)
}


//?Google ile giriş için
export const signUpProvider =(navigate) => {
    const provider = new GoogleAuthProvider();

//? Açılır pencere ile giriş yapılması için kull metod
    signInWithPopup(auth, provider)
  .then((result) => {
 console.log(result)
 navigate("/")
 toastSuccessNotify("Logged out succesfuly")
  }).catch((error) => {
    toastErrorNotify(error.message)
 console.log(error);
  });
}