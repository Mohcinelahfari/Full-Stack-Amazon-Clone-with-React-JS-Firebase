import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginPage.css"
import LoginLogo from "../../../assets/images/logo-login.png"
function LoginPage() {
  return (
    <div className='login'>
        <Link to={"/"}>
          <img src={LoginLogo} alt="" className='login-logo'/>
        </Link>
        <div className="login-container">
          <h1>Sign In</h1>
          <form action="">
            <h5>Email</h5>
            <input type="text" value="" />
            <h5>Password</h5>
            <input type="text"  />
            <button type='submit' className='login-signInBtn'>Sign In</button>
            <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
            </p>
            <button className='login-registerBtn'>
              Create your Amazon Account
            </button>
          </form>

        </div>
    </div>
  )
}

export default LoginPage