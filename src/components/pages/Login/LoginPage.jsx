import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./LoginPage.css"
import LoginLogo from "../../../assets/images/logo-login.png"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../../firebase"
import {useAuth} from '../../../context/GlobalSttate'
function LoginPage() {
  const {user} = useAuth()
  const  [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const registerUser = async (e) => {
    e.preventDefault();
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   console.log("User created successfully!");
    // } catch (error) {
    //   console.error("Error creating user:", error.message);
    //   alert("Error: " + error.message);  // Show error to user
    // }
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      if(user){
        navigate('/')
      }
    }).catch((error) => {
      alert(error.message)
    })
  };
  const SignInHandel = (e)=> {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      if(user){
        navigate("/")
      }
    })
  }
  return (
    <div className='login'>
        <Link to={"/"}>
          <img src={LoginLogo} alt="" className='login-logo'/>
        </Link>
        <div className="login-container">
          <h1>Sign In</h1>
          <form action="">
            <h5>Email</h5>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' className='login-signInBtn' onClick={SignInHandel}>Sign In</button>
            <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
            </p>
            <button className='login-registerBtn' onClick={registerUser}>
              Create your Amazon Account
            </button>
          </form>

        </div>
    </div>
  )
}

export default LoginPage