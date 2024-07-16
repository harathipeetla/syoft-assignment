
import {BrowserRouter ,Route, Switch, Redirect } from "react-router-dom";

import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

const App =() =>(
  <BrowserRouter>
    <div>
        <Switch>
          <Route path = "/signup" component = {SignUpPage}/>
          <Route path = "/login" component ={LoginPage}/>
          <Route path ="/dashboard" component ={Dashboard}/>
          <Route path ="/" exact>
            <Redirect to = "/signup"/>
          </Route>
        </Switch>
    </div>
  </BrowserRouter>
)

export default App