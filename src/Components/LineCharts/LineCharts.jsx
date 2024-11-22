import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const LineCharts = ({historicalData}) => {
    const[data , setData] = useState([["Dates","Prices"]]);

    useEffect(()=>{
        let datacopy =  [["Dates","Prices"]];
        if(historicalData.prices){
              historicalData.prices.map((item)=>{
                datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
              })
              setData(datacopy);
        } 
       },[historicalData])
  return (
   <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
   />
  );
}

export default LineCharts;
