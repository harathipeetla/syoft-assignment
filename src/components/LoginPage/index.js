import { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

class Login extends Component{
    state ={
        user_email:'',
        user_password:''
    }

    handleOnCahnge =(e)=>{
        const {name, value} = e.target 
        this.setState({[name]: value})
    }

    handleSubmit =(e) => {
        e.preventDefault()
        this.loginUser();
    }

    loginUser = async ()=>{
        const {user_email, user_password} = this.state

        try{
            const response = await fetch(" https://syoft.dev/Api/userlogin/api/userlogin" , {
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({user_email, user_password})
            })

            if(response.ok){
                const storedUser = JSON.parse(localStorage.getItem('user'));
                if(storedUser && storedUser.user_email === user_email && storedUser.user_password === user_password){
                    const {history} = this.props
                    history.replace('/dashboard')
                }else{
                    console.log("INavlid Credentials")
                }
            }else{
                console.log("Login failed")
            }
        }catch(err){
            console.log(err)
        }

    }

    render(){
        const {user_email, user_password} = this.state

        return(
            <div className='login-page-container'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p><label>Enter your email:</label></p>
                        <input type='email' name='user_email' value={user_email} onChange={this.handleOnCahnge}/>
                    </div>
                    <div>
                        <p><label>Enter your password:</label></p>
                        <input type='password' name='user_password' value={user_password} onChange={this.handleOnCahnge}/>
                    </div>
<button type='submit'>Login</button>
                </form>
                <p className='have-account'>Do not have an Account <Link to="/signup">Register here..</Link></p>
            </div>
        )
    }
}
export default withRouter(Login)