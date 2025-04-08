import React from 'react'
import './SignUpForm.css'
import { Link } from 'react-router-dom'
const LoginForm = ({ setSignUp }) => {
    return (
        <div className="container">
            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <h2>Welcome Back</h2>
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <Link to={'/'} > <button type="submit" className='form-btn'>Login</button></Link>
                <p>Don't have an account? <span onClick={() => setSignUp("sign-up")}>Sign Up</span></p>
            </form>
        </div>

    )
}

export default LoginForm
