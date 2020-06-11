import React from 'react'
import './LogIn.css'

const LogIn = (props) => {
    const handleClick = (event) => {
        props.history.push("/");
    }

    return(
        <form className="outaContainer" onSubmit ={handleClick}>
            <label className="headinContainer">LoggedIn Sucessfully</label>
            <div className="buttonContainer">
                <button className="buttonCont" type="submit">LogOut</button>
            </div>
        </form>
    )
}

export default LogIn;