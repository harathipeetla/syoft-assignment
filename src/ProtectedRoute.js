import { Route, Redirect } from "react-router-dom";

const ProtectedRoute =({component:Component, ...rest})=>{

    const isAuthenticated = localStorage.getItem('user')

    return(
        <Route
            {...rest}
            render= {props => 
                isAuthenticated ? (
                    <Component  {...props}/>
                ) : (
                    <Redirect to={{pathname:'/login', state : {from : props.location}}}/>
                )
            }
        
        
        />
    )

}

export default ProtectedRoute