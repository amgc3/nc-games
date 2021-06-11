import React, {useState} from 'react';


const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    //const email = "thiandthat@gmail.com"
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, email)
    }
    return (
        
        <form className='Login-form' onSubmit={handleSubmit}>
            <label htmlFor='username' >Username: </label>
            <input type='text' id='username' value={username} 
            onChange={(event) => {
                setUsername(event.target.value)
            }} />
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' value={email}
            onChange={(event) => {
                setEmail(event.target.value)
            }} />
            <button className='login-button'>Login</button>
        </form>
    );
};

export default Login;