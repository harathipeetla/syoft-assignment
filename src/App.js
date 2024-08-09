
import {BrowserRouter ,Route, Switch, Redirect } from "react-router-dom";

import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

import './App.css'

const App =() =>(
  <BrowserRouter>
    <div className="app">
        <Switch>
          <Route path = "/signup" component = {SignUpPage}/>
          <Route path = "/login" component ={LoginPage}/>
          <ProtectedRoute path ="/dashboard" component ={Dashboard}/>
          <Route path ="/" component={LoginPage}/>
        </Switch>
    </div>
  </BrowserRouter>
)

export default App