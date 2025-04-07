import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { coinContext } from '../../context/CoinContext';
import Loader from '../../components/Loader/Loader';
import './coin.css'
import LineCharts from '../../components/linechart/LineCharts';
const Coin = () => {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState()
    const [historicalData, setHistorycalData] = useState()
    const { currency } = useContext(coinContext);
    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': '	CG-t2Dpec6oB3VPoSkjpzYY1Ssx'
            }
        };
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(res => res.json())
            .then(data => setCoinData(data))
            .catch(err => console.log(err))
    }
    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': '	CG-t2Dpec6oB3VPoSkjpzYY1Ssx'
            }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
            .then(res => res.json())
            .then(res => {
                setHistorycalData(res);
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchCoinData();
        fetchHistoricalData();
    }, [currency])
    if (coinData && historicalData) {
        return (
            <div className='coin'>
                <div className="coin-name">
                    <img src={coinData.image.large} alt="" />
                    <p>{coinData.name} ({coinData.symbol.toUpperCase()})</p>
                </div>
                <div className="coin-chart">
                    <LineCharts historicalData={historicalData} />
                </div>
                <div className="coin-info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour High</li>
                        <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour Low</li>
                        <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
                    </ul>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="coinCenter"> <Loader /></div>

        )
    }
}

export default Coin
