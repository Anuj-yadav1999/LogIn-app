import React, { useState } from 'react';
import './Home.css';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (event) => {
        //event.preventDefault();
        if(userName === '' || userName === null){
            return
        }
        if(password === '' || password === null){
            return
        }
        fetch('http://localhost:5000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: userName,
                password: password
            })
        }).then(res => res.json())
        .then(data => console.log(data))
        .then(() => <Redirect to='/LoggedIn' />)
        .catch(error => console.log(error))

       
        resetInput();
        props.history.push("/LoggedIn");
    }

    function resetInput() {
        setUserName('');
        setPassword('');
    }

    return(
        <form onSubmit={handleClick} className='outerContainer'>
            <div className="header">
                <h1>Welcome, Back</h1>
            </div>
            <div className="dataContainer">
                <label className="labelContainer">User Name</label>
                <input className="inputContainer" type="text" value={userName} onChange={e => setUserName(e.target.value)} />
            </div>
            <div className="dataContainer">
                <label className="labelContainer">Password</label>
                <input className="inputContainer" type="text" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="button" type="submit">LogIn</button>
        </form>
    )
}

export default Home;