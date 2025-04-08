import React, { useContext, useRef, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import { FaArrowTrendUp } from "react-icons/fa6";
import { coinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const { setCurrency } = useContext(coinContext);
    const handleCurrency = (event) => {
        switch (event.target.value) {
            case 'usd': {
                setCurrency({ name: 'usd', symbol: '$' });
                break;
            }
            case 'eur': {
                setCurrency({ name: 'eur', symbol: '€' });
                break;
            }
            case 'inr': {
                setCurrency({ name: 'inr', symbol: '₹' });
                break;
            }
            default: {
                setCurrency({ name: 'usd', symbol: '$' });
            }
        }
    }
    return (
        <div className='nav-bar'>
            <Link to={'/'}>
                <img src={logo} alt="" className='logo' />
            </Link>
            <ul>
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right" onChange={handleCurrency}>
                <select>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <Link to={'/sign-up'} >
                    <button>Sign Up <FaArrowTrendUp /></button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
