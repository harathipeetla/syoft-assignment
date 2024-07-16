import { Component } from "react";
import { Link } from "react-router-dom";
import MoneyManager from "../MoneyManager";

import './index.css'

class Dashboard extends Component{
state ={
    user: JSON.parse(localStorage.getItem('user'))
}


    render(){
        const {user} = this.state 
        if(!user){
            return <p>You dont have an access please <Link to ="/login">login here</Link></p>
        }
        return(
            <div className="dashboard">
                <div>
                    <h1>Welcome , {user.user_firstname} {user.user_lastname}</h1>
                </div>
               <MoneyManager/>

            </div>
        )
    }
}
export default Dashboard


