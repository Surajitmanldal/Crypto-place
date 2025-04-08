import React from 'react'
import './SignUpForm.css'
import { Link } from 'react-router-dom';
const SignUpForm = ({ setSignUp }) => {
    return (
        <div className="container">
            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                <h2>Create Account</h2>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <Link to={'/'} > <button type="submit" className='form-btn'>Sign Up</button></Link>
                <p>Already have an account? <span onClick={() => setSignUp("login")}>Login</span></p>
            </form>
        </div>
    )
}

export default SignUpForm;
