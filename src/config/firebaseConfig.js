import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCpiyLdHN8EARmnKIh-u3iXm0DgsDpxwH4",
  authDomain: "mytshirtapp-f682f.firebaseapp.com",
  databaseURL: "https://mytshirtapp-f682f.firebaseio.com",
  projectId: "mytshirtapp-f682f",
  storageBucket: "mytshirtapp-f682f.appspot.com",
  messagingSenderId: "120209486579",
  appId: "1:120209486579:web:e1d4ce6c67fd2d5f623d86",
  measurementId: "G-JL4R9CFZN2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();
export { storage, firebase as default };
