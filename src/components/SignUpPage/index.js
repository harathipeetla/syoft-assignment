import { Component } from 'react'


import {Link, withRouter}  from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import './index.css'

class SignUp extends Component{
    state ={
        user_firstname:'',
        user_email:'',
        user_password:'',
        user_phone:'',
        showPaswrd:false,
        err: "",
        registreErr:''
    }

    ontogglePassword=()=>{
        this.setState((prevstate) => ({showPaswrd: !prevstate.showPaswrd}))
    }

    handleOnCahnge=(e)=>{
        const {name, value} = e.target
        this.setState({[name]: value})

    }
    handleOnSubmit=(e)=>{
        e.preventDefault();
        this.registerUser();
    }

    registerUser = async ()=>{
        const {user_firstname, user_email, user_password, user_phone} = this.state
       if(user_firstname === "" || user_email === "" || user_password === "" || user_phone === ""){
            this.setState({registreErr: "Must fill all feilds"})

            return
         }

        const user_lastname = "Peetla";
        const user_city = "Ananthapuram";
        const user_zipcode='515761';

        const payload={
            user_firstname,
            user_email,
            user_city,
            user_lastname,
            user_password,
            user_phone,
            user_zipcode
        }
        try {
            const response = await fetch("https://syoft.dev/Api/user_registeration/api/user_registeration", {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            });

            if(response.ok && (user_firstname !== "" || user_email !== "" || user_password !== "" || user_phone !== "")  ){
                localStorage.setItem('user', JSON.stringify(payload))
                const {history} = this.props
                history.replace('/login')
            }
            
            else{
                console.log("Registration Failed")
            }
        }catch(err){
            console.log(err)
        }
    }

    onHandleBlur=(e)=>{
        const {name, value} = e.target
        this.setState({[name]: value})
        if(value === ''){
            this.setState({err:'Required'})
    }else{
        this.setState({err:""})
    }
    }

    render(){
        const {user_firstname, user_email, user_password, user_phone, showPaswrd, err, registreErr} = this.state
        return(
            <div className='signUp-page-container'>
                <div className='left-section'>
                    <h1>SYOFT</h1>
                </div>
                <div className='right-section'>
                    <div className='have-account'>
                    <p>Already have an Account? <Link to="/login">Login here...</Link></p>
                    </div>
               
                <div>
                <form onSubmit={this.handleOnSubmit}>
                <div>
                    <p><label>ENTER FIRST NAME:</label></p>
                    <input type='text' name='user_firstname' value={user_firstname} onChange={this.handleOnCahnge}/>
                    <p className='error-msg'>{err}</p>
                </div>
                <div>
                    <p><label>ENTER EMAIL:</label></p>
                    <input type='text' name='user_email' value={user_email} onChange={this.handleOnCahnge} onBlur={this.onHandleBlur}/>
                    <p className='error-msg'>{err}</p>
                </div>
                <div>
                    <p><label>ENTER PASSWORD:</label></p>
                    <input type={showPaswrd ? 'text' : 'password'} name='user_password' value={user_password}  onChange={this.handleOnCahnge} onBlur={this.onHandleBlur}/> <span>
                        {showPaswrd ? <FaEye onClick={this.ontogglePassword}/> : <FaEyeSlash onClick={this.ontogglePassword}/>}
                    </span>
                    <p className='error-msg'>{err}</p>
                </div>
                <div>
                    <p><label>ENTER PHONE NO:</label></p>
                    <input type='text' name='user_phone'  value={user_phone} onChange={this.handleOnCahnge} onBlur={this.onHandleBlur}/>
                    <p className='error-msg'>{err}</p>
                </div>
                <div>
                    <button type='submit'>Create Account</button>
                </div>
                </form>
                <p className='register-error'>{registreErr}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp)