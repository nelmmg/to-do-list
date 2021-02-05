import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch((error) => alert(error.message));
    }

    return (
        <div className="Login">
            <Button type="submit" onClick={signIn}>Sign in With Google</Button>
        </div>
    );
}

export default Login
