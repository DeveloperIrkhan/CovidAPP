import React from 'react'
import CountUp from 'react-countup';
import Loader from 'react-loader-spinner'
import Chart from './Chart';


const Update = ({data:{deaths,recovered,confirmed,lastUpdate}}) => {
    if(!lastUpdate){
        return (
            <div className='update-div '>
            
            {/* <Loader className='text-center m-5' type="ThreeDots" color="#00BFFF" height={120} width={120} /> */}
            <Loader className='text-center m-5' type="TailSpin" color="#00BFFF" height={120} width={120} />
            {/* <Loader className='text-center m-5' type="Rings" color="#00BFFF" height={120} width={120} /> */}
            {/* <Loader className='text-center m-5' type="Puff" color="#00BFFF" height={120} width={120} /> */}
            {/* <Loader className='text-center m-5' type="Oval" color="#00BFFF" height={120} width={120} /> */}
            {/* <Loader className='text-center m-5' type="Grid" color="#00BFFF" height={120} width={120} /> */}
            {/* <Loader className='text-center m-5' type="Circles" color="#00BFFF" height={120} width={120} /> */}
            {/* <Loader className='text-center m-5' type="Bars" color="#00BFFF" height={120} width={120} /> */}
            {/* <Loader className='text-center m-5' type="BallTriangle" color="#00BFFF" height={200} width={200} /> */}
            {/* <Loader className='text-center m-5' type="Audio" color="#00BFFF" height={120} width={120} /> */} 
            <h1 className="text-center text-white">Loding data from api</h1>
           </div>
        )
    }
    else
    return (
        <div className='update-div' id="update">
           <div className="Updates-div h-100 px-3 container">
           <div className="Updates row justify-content-center">
                <h1 className="text-capitalized">Covid 19 World wide updates</h1>
            </div>
            <div className="row py-5 text-danger d-flex text-center justify-content-around">
            <div className="content col-lg-6 col-md-6 col-12"
                style={{color:"white"}}>
                <h1>
                   { new Date(lastUpdate).toLocaleDateString()}
                    </h1>
                <p className="py-3">Last Update</p>
                </div>
                <div className="content col-lg-6 col-md-6 col-12"
                style={{color:"#e74c3c"}}>
                <h1>
                    <CountUp
                    start={0}
                    separator=","
                    duration={3}
                    end={confirmed.value}/>
                </h1>
                <p className="py-3">Total Across the Globe</p>
                </div>
                
                <div className="content col-lg-6 col-md-6 col-12"
                style={{color:"#ff793f"}}>
                <h1>
                <CountUp
                    start={0}
                    separator=","
                    duration={3}
                    end={recovered.value}/></h1>
                <p className="py-3">Total Recovered Across the Globe</p>
                </div>
                <div className="content col-lg-6 col-md-6 col-12"
                style={{color:"red"}}>
                <h1><CountUp
                    start={0}
                    separator=","
                    duration={3}
                    end={deaths.value}/>
                </h1>
                <p className="py-3">Total Deaths Across the Globe</p>
                </div>
            </div>
           </div>
           <div className="text-center">
           <Chart/>
           </div>
        </div>
    );
}

export default Update;