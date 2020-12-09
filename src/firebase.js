import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  /*apiKey: "AIzaSyBrLx6BYC2fcGOmHBwiD62XbHJEanFP9K0",
  authDomain: "fireadmdemo.firebaseapp.com",
  databaseURL: "https://fireadmdemo.firebaseio.com",
  projectId: "fireadmdemo",
  storageBucket: "fireadmdemo.appspot.com",
  messagingSenderId: "580599297550",
  appId: "1:580599297550:web:ac0e9cfe622bb8d9222e5f",
  measurementId: "G-X6MT010CXS",*/
  /*apiKey: "AIzaSyDWRuVy_c1IX6aqBlbGGEYbxbAPMylmFjU",
  authDomain: "vehogo.firebaseapp.com",
  databaseURL: "https://vehogo.firebaseio.com",
  projectId: "vehogo",
  storageBucket: "vehogo.appspot.com",
  messagingSenderId: "513489463111",
  appId: "1:513489463111:web:217e394809526df22a8e62",
  measurementId: "G-KE1CZ8G8MD",*/
  apiKey: "AIzaSyDLRxxJBbx_GcVT63rcxx-hkKiEYKKp1Ss",
  authDomain: "gogreen-41e6e.firebaseapp.com",
  databaseURL: "https://gogreen-41e6e.firebaseio.com",
  projectId: "gogreen-41e6e",
  storageBucket: "gogreen-41e6e.appspot.com",
  messagingSenderId: "146975137401",
  appId: "1:146975137401:web:d2d01651920c376952fea8",
});

export const auth = app.auth();

export default app;
