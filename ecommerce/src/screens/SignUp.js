import React from "react";
import LoginScreen from "./LoginScreen";
import  styles from"./signup.module.css"
import { BrowserRouter as Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

const SignUp = ()=>{
    const [name ,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('')
    // const [conformPassword,setConformPassword]= useState('')
     const nameHandler = (event)=>{
        event.preventDefault();
        setName(event.target.value)
    }
    // const emailHandler = (event)=>{
    //     event.preventDefault();
    //     setEmail(event.target.value)
    // }
    // const passwordHandler = (event)=>{
    //     event.preventDefault();
    //     setPassword(event.target.value)
    // }
    // const conformPasswordHandler = (event)=>{
    //     event.preventDefault();
    //     setConformPassword(event.target.value)
    // }

    const formHandler = (event)=>{
        event.preventDefault();
        const obj = {
            "name": name,
            // "Email": email,
            // "password": password,
            // "confirmPassword": conformPassword
        }
        console.log(obj)
        const url = 'http://localhost:3002/customer'
        // axios.post(url,obj)
    }

        return(
            <div className={styles.signup}>
                <h2>Sign Up</h2>
                <form className={styles.inside_form} onSubmit={formHandler}>
                    <label>Name</label>
                    <input type='text'name='name' placeholder="Enter name" onChange={nameHandler}/>
                    {/* <label>Email Address</label>
                    <input tyoe='email' name='email' placeholder="Enter email" onChange={emailHandler}/>
                    <label>PassWord</label>
                    <input type='password' placeholder="Enter password"onChange={passwordHandler}/>
                    <label>Confirm Password</label>
                    <input type='password' placeholder="Confirm Password" onChange={conformPasswordHandler}/>
                    <button type="submit" className={styles.btn}>Register</button> */}
                </form>
                <h3 className="bottom">Have an Account?<Link to="/login" onClick={LoginScreen} className="link">login</Link></h3>
            </div>
        );
}
export default SignUp