import React, { useState, useEffect } from 'react'
import { fetchDailyData } from "../API/index"
import { Line, Bar } from 'react-chartjs-2'
import Loader from 'react-loader-spinner'

const Chart = () => {
    const [DailyData, setDailyData] = useState([]);
    useEffect(() => {
        const FetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        FetchAPI();
    }, { DailyData })


    const LineChart =(
        (DailyData.length) ? (
            
            <Line
            type='pie'
             style={{color:'white'}} data={{
                labels: DailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: DailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#f39c12',
                        backgroundColor: '#ecf0f1',
                        color:'#fff',
                        fill: true
                    }, 
                    {
                        data: DailyData.map(({ recovered }) => recovered),
                        label: 'recoverd',
                        borderColor: 'yellow',
                        backgroundColor: 'lightyellow',
                        color:'#fff',
                        fill: true
                    }, 
                    {
                        data: DailyData.map(({ deaths }) => deaths),
                        label: 'deaths',
                        borderColor: '#d63031',
                        color:'white',
                        backgroundColor: '#ff7675',
                        fill: true
                    }
                ],
            }} />):
            (<div className="">
            <Loader className='text-center m-5' type="Rings" color="#00BFFF" height={120} width={120} />
            <h4 className="text-info" style={{color:"#00BFFF"}}>data is loading....</h4>
        </div> )
                
            
        
)
    return (
        <>
            <h1 className="text-white">Chart data</h1>
            <div className="container">
            <div className="col-lg-12 text-center">
                {LineChart}
            </div>
            </div>
        </>
    )
    
}
export default Chart







    // const LineChart=()=>{
    //    ( DailyData.length ?
    //         <Line data={{ 
    //             labels: DailyData.map(({date }) => date),
    //             datasets:[{
    //                 data: DailyData.map(({confirmed }) => confirmed),
    //                 label:'Infected',
    //                 borderColor:'#333ff',
    //                 fill:true
    //             },{
    //                 data: DailyData.map(({deaths }) => deaths),
    //                 label:'Infected',
    //                 borderColor:'#333ff',
    //                 fill:true
    //             }],
    //         }}/> : null)
