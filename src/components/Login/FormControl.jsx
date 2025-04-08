import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'
const FormControl = () => {
    const [signUp, setSignUp] = useState('sign-up');
    return (
        <div>
            {signUp === "sign-up" ? <SignUpForm setSignUp={setSignUp} /> : <LoginForm setSignUp={setSignUp} />}
        </div>
    )
}

export default FormControl
