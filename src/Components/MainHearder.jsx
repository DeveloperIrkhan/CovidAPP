import React, { Component } from 'react'
import logo from '../Pics/covid.png'
import covidtext from '../Pics/virus.png'
export default class MainHearder extends Component {
    render() {
        return (
            <div className='w-199 mainheader'>
                <div className="row px-4  ">
                <div className="col-lg-6 col-md-5 col-12 order-lg-1 order-2">
                    <div className="left-side w-100 h-100 d-flex justify-content-center align-items-center">
                        <img className="image-fluid " width="500px" height="500px" src={logo} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-7 col-12 order-lg-2 order-1">
                    <div className="right-side w-100 h-100 d-flex justify-content-center align-items-center text-center">
                        <h1>Let Stay's Safe and Fight Together with C<span className="covid-root m-3">
                            <img width="100px" height="100px" src={covidtext}/></span>RONA VIRUS</h1>
                    </div>
                </div>

                </div>
            </div>
            )
    }
}
