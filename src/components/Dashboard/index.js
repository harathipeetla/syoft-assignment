import { Component } from "react";
import { Link } from "react-router-dom";
import MoneyManager from "../MoneyManager";

import './index.css'

class Dashboard extends Component{
state ={
    user: JSON.parse(localStorage.getItem('user'))
}

 handleLogOut=()=>{
    localStorage.removeItem('user')
    const {history} = this.props 
    history.replace('/login')
 }


    render(){
        const {user} = this.state 
        if(!user){
            return <p>You dont have an access please <Link to ="/login">login here</Link></p>
        }
        return(
            <div className="dashboard">
                 <h1>Welcome , {user.user_firstname}</h1>
                 <p><strong>Here is your full details</strong></p>
                <div className="details-dashboard">
                   <div>
                        <p><strong>Your FirstName: {''}</strong>{user.user_firstname}</p>
                        <p><strong>Your LastName: {''}</strong>{user.user_lastname}</p>
                   </div>
                  <div>
                    <p><strong>Your Password: {''}</strong>{user.user_password}</p>
                    <p><strong>Your Number: {''}</strong>{user.user_phone}</p>
                  </div>
                   
                </div>
                <button type="button" onClick={this.handleLogOut} >Logout</button>
               <MoneyManager/>

            </div> 
        )
    }
}
export default Dashboard


