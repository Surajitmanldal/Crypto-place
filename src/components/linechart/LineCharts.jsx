import React, { useEffect, useState } from 'react'
import './LineCharts.css'
import Chart from 'react-google-charts'
const LineCharts = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Prices"]])

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        historicalData.prices.map((item) => {
            dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
        })
        setData(dataCopy);
    }, [historicalData])

    return (
        <Chart
            chartType='Line'
            width="100vw"
            height="300px"
            data={data}
            legendToggle
        />

    )
}

export default LineCharts
