import { createContext, useEffect, useState } from "react";

export const coinContext = createContext();

const CoinContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fecthAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-t2Dpec6oB3VPoSkjpzYY1Ssx' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => {
                setAllCoin(res);
                setLoader(false);
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        const timeout = setTimeout(() => { fecthAllCoin() }, 1000)
        return (() => clearTimeout(timeout));
    }, [currency])
    const contextValue = {
        allCoin, currency, setCurrency, loader
    }
    return (
        <coinContext.Provider value={contextValue}>
            {children}
        </coinContext.Provider>
    )
}
export default CoinContextProvider;