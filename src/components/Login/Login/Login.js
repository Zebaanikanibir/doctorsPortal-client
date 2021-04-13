import React, { useContext, useState } from 'react';
import loginbg from '../../../images/Group 140.png'
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

const handleGoogleSignIn = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
  
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email:email }
      setLoggedInUser(signedInUser);
      storeAuthToken()
      const user = result.user;
     console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
}

const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
          console.log(idToken)
        sessionStorage.setItem('token',idToken)
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 shadow p-5 mt-5">
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="from-group mt-5">
                            <button onClick={handleGoogleSignIn} className="btn btn-brand">Google Sign in</button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                      <img style={{width: '500px'}} src={loginbg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;