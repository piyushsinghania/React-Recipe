import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnzyb5Pf3Kjbul7P-fl8nh-iXb5h7ebag",
  authDomain: "cooking-blog-site-c42b6.firebaseapp.com",
  projectId: "cooking-blog-site-c42b6",
  storageBucket: "cooking-blog-site-c42b6.appspot.com",
  messagingSenderId: "1030935371936",
  appId: "1:1030935371936:web:151b68f2b814485628e9c5"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };