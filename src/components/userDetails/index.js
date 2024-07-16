const userDetails =({user})=>{
    <div className="user-details">
        <h1>User Details</h1>
        <p>{user.user_firstname}</p>
        <p>{user.user_email}</p>
        <p>{user.user_phone}</p>
        <p>{user.user_city}</p>
    </div>
}

export default userDetails