import React from 'react'
import Cold from '../Pics/cold.png'
import cough from '../Pics/cough.png'
import fever from '../Pics/fever.png'
import mucus from '../Pics/mucus.png'
import breathing from "../Pics/breathing.png"
import fatigue from "../Pics/fatigue.png"
class CoronaSymptom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id='symp'>
                <div className="container-fluid py-5">
                    <div className="row">
                        <h1 className="mx-auto py-5">
                            Corona Virus Symptoms
                </h1>
                    </div>
                    <div className="row mx-5 ">
                        <div className="sympdiv col-lg-4 col-md-4 col-6 p-4">
                            <figure className="text-center"><img src={Cold} alt="" className="img-fluid sympimg" />
                                <figcaption className="mt-2">Cold</figcaption>
                            </figure>
                        </div>
                        <div className="sympdiv col-lg-4 col-md-4 col-6 p-4">
                            <figure className="text-center"><img src={fever} alt="" className="img-fluid sympimg" />
                                <figcaption className="mt-2">Fever</figcaption>
                            </figure>
                        </div>
                        <div className="sympdiv col-lg-4 col-md-4 col-6 p-4">
                            <figure className="text-center"><img src={mucus} alt="" className="img-fluid sympimg" />
                                <figcaption className="mt-2">Running Nose</figcaption>
                            </figure>
                        </div>
                        <div className="sympdiv col-lg-4 col-md-4 col-6 p-4">
                            <figure className="text-center"><img src={fatigue} alt="" className="img-fluid sympimg" />
                                <figcaption className="mt-2">Tiredness</figcaption>
                            </figure>
                        </div>
                        <div className="sympdiv col-lg-4 col-md-4 col-6 p-4">
                            <figure className="text-center"><img src={cough} alt="" className="img-fluid sympimg" />
                                <figcaption className="mt-2">Cough</figcaption>
                            </figure>
                        </div>
                        <div className="sympdiv col-lg-4 col-md-4 col-6 p-4">
                            <figure className="text-center"><img src={breathing} alt="" className="img-fluid sympimg" />
                                <figcaption className="mt-2">Difficulty in breathing</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoronaSymptom;