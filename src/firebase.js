// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ3hq3vpYJ0LXEF7VjT56zFW1FcRF69ms",
  authDomain: "v-project-b5f53.firebaseapp.com",
  projectId: "v-project-b5f53",
  storageBucket: "v-project-b5f53.appspot.com",
  messagingSenderId: "595786563903",
  appId: "1:595786563903:web:93353e7023d296f58c138a"
};

// Variable que representa a la plataforma en si
const app = initializeApp(firebaseConfig);

//Vrialbe que representa la pestaña de Firestore Database
export const db = getFirestore(app)