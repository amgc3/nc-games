import React, {useState} from 'react';


const Login = () => {
    const [username, setUsername] = useState('')
    const email = "thiandthat@gmail.com"
    return (
        
        <form className='Login-form'>
            <label htmlFor='username' >Username: </label>
            <input type='text' id='username' value={username} />
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' value={email}/>
            <button className='login-button'>Login</button>
        </form>
    );
};

export default Login;