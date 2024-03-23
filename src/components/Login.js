import React from "react";
import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameInput = (event) => {
        setUsername(event.target.value);
        console.log('userName:', event.target.value);
    }

    const passwordInput = (event) => {
        setPassword(event.target.value);
        console.log('Password:', event.target.value);
    }
}

function Login() {
    return( 
        <>
            <div className="text-center font-bold">
                <h1>Login</h1>
            </div>
            <div className="flex justify-center">
                <label htmlFor="username"></label>
                <input type="text" id="username" placeholder="Username" name="uname" required className="border border-blue-500 rounded-md p-1"/>
            </div>
            <div className="flex justify-center">
                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="Password" name="pass" required className="border border-blue-500 rounded-md p-1"/>
            </div>
            <div>

            </div>
        </>
    )
}

export default Login;