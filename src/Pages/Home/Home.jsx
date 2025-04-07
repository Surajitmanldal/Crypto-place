import React, { useContext, useEffect, useRef, useState } from 'react'
import './Home.css'
import { IoSearchOutline } from "react-icons/io5";
import { coinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
const Home = () => {
    const { allCoin, currency, loader } = useContext(coinContext);
    const [disPlayCoin, setDisplayCoin] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    // /  this is a good practice to prevent multiple calls, this is known as debouncing
    useEffect(() => {
        const timeout = setTimeout(() => {
            const filtered = allCoin.filter((item) => {
                return (item.name.toLowerCase().includes(searchItem.toLowerCase()))
            })
            const matches = allCoin.filter((item) => {
                return (item.name.toLowerCase().startsWith(searchItem.toLowerCase()))
            })
            setSuggestion(matches);
            setDisplayCoin(filtered);
        }, 300);
        return (() => clearTimeout(timeout));
    }, [allCoin, searchItem]);

    const handleSubmitClick = (e) => {
        e.preventDefault();
    }
    const setSuggestionClick = (coinName) => {
        const suggestionResult = allCoin.filter((item) => {
            return (item.name.toLowerCase().includes(coinName.toLowerCase()))
        })
        setDisplayCoin(suggestionResult);
        setSuggestion([]);
    }
    return (
        <div className='home'>
            <div className="hero">
                <h1>Largest <br />Crypto Marketplace</h1>
                <p>Welcome to world largest Cryptocurrency marketplace.<br /> Sign up to explore more about cryptos</p>
                <form className='search-form' onClick={handleSubmitClick}>
                    <input type="text" placeholder='Search crypto...' onChange={(e) => setSearchItem(e.target.value)} />
                    {searchItem &&
                        <ul className="suggestion-dropdown">
                            {suggestion.slice(0, 5).map((item, index) => <li key={index} onClick={() => setSuggestionClick(item.name)}>{item.name}</li>)}
                        </ul>}
                    <button type='submit'><IoSearchOutline /></button>
                </form>
            </div>
            <div className="crypto-table">
                <div className="table-layout">
                    <p>#</p>
                    <p className='coin-heading'>Coins</p>
                    <p className='price'>Price</p>
                    <p style={{ textAlign: "center" }} className='change'>24H Change </p>
                    <p style={{ textAlign: "right" }} className='market-cap'>Market Cap</p>
                </div>
                {loader && (
                    <Loader />
                )}
                {disPlayCoin.length === 0 ? (<div className="no-results">
                    <p>No cryptocurrencies found matching "{searchItem}"</p>
                </div>) :
                    (disPlayCoin.slice(0, 10).map((item, index) => (
                        <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                            {disPlayCoin.length == 0 && <p>Hello</p>}
                            <p>{item.market_cap_rank}</p>
                            <div className='coins'>
                                <img src={item.image} alt="" width={"35px"} />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p className='price'>{currency.symbol}{item.current_price.toLocaleString()}</p>
                            <p style={{ textAlign: "center" }} className={item.price_change_percentage_24h > 0 ? " green" : " red"}>{Math.floor(item.price_change_percentage_24h * 100) / 100}%</p>
                            <p style={{ textAlign: "right" }} className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
                        </Link>
                    ))
                    )}
            </div>
        </div>
    )
}

export default Home
