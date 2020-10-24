import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button } from '@material-ui/core';

firebase.initializeApp(// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  {
    apiKey: "AIzaSyBIVo6pQ2LQJzVJ3nKmiWfOXk9HMb5-iic",
    authDomain: "fourzerotwo-402.firebaseapp.com",
    databaseURL: "https://fourzerotwo-402.firebaseio.com",
    projectId: "fourzerotwo-402",
    storageBucket: "fourzerotwo-402.appspot.com",
    messagingSenderId: "219373099131",
    appId: "1:219373099131:web:02469148b073cb2b436ade",
    measurementId: "G-JKXN7R0NNE"
  })
const provider = new firebase.auth.GoogleAuthProvider();


function App() {

  const signIn = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result)

      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential;
        // The signed-in user info.
        var user = result.user;
        // ...

      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  return (
    <div>
      <Button onClick={signIn}>Log in</Button>
    </div>
  );
}

export default App;

