import React, {useState} from 'react';

// this login form is work in progress. At the moment it console.logs the 
// username and email address
// I still need to implement the login endpoint in the backend api
const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, email)
    }
    return (
        
        <form className='Login-form' onSubmit={handleSubmit}>
            <label htmlFor='username' >Username: </label>
            <input type='text' id='username' value={username} 
            required
            onChange={(event) => {
                setUsername(event.target.value)
            }} />
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' value={email}
            required
            onChange={(event) => {
                setEmail(event.target.value)
            }} />
            <button className='login-button'>Login</button>
        </form>
    );
};

export default Login;