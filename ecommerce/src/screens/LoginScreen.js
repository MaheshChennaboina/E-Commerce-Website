import React from 'react'
import { BrowserRouter as Router , Route,Link, Switch } from "react-router-dom";
import SignUp from './SignUp'
import {Row, Col } from 'react-bootstrap'
import loop from './loginscreen.module.css'
// import { Link } from 'react-router-dom'
// import { Form, Button, Row, Col } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import FormContainer from '../components/FormContainer'
// import { login } from '../actions/userActions'



const LoginScreen = ()=>{
    return(
         <div className={loop.LoginScreen}>
            <h2 className={loop.title}>Sign In</h2>
           <form className={loop.form}>
              <label>Email Address</label>
              <input type='email' placeholder='Enter email'></input>
              <label>password</label>
              <input type='password' placeholder='password'></input>
              <button type='submit' className={loop.btn1}>Sign In</button>
             </form>
            <h3>New Customer <Link to="/signup" onClick={SignUp}>Register</Link></h3> 
         
         </div>
         
)
}
export default LoginScreen;