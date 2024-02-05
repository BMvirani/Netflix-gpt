
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgkUZa0Wqm5s6OmNiKmQeJiFq5cT4RfvU",
  authDomain: "netflix-clone-b8165.firebaseapp.com",
  projectId: "netflix-clone-b8165",
  storageBucket: "netflix-clone-b8165.appspot.com",
  messagingSenderId: "18929267076",
  appId: "1:18929267076:web:b49a17c6f74078e13a2dd1",
  measurementId: "G-FXTE6Q44Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
