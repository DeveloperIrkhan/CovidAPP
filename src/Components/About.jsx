import React from 'react'
import image from '../Pics/covid19.png'
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id='about'>
                <div className=" about-us container-fluid py-5 ">
                   <div className="m-auto">
                   <div className="about row justify-content-center align-items-center">
                        <h1 className="text-center py-5">
                            About COVID-19
                        </h1>
                    </div>
                    <div className="row px-5">
                        <div className="col-lg-6 col-md-5 col-12 justify-content-center align-items-center px-3">
                            <img className='img-fluid' src={image} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-5 col-12 justify-content-center center my-auto">
                            <h2 className=''>The COVID-19 coronavirus pandemic</h2>
                            <p className="">
                                The COVID-19 coronavirus pandemic has led to mass scientific conference cancellations, travel restrictions, social distancing, and other unprecedented prevention measures. How did we get to this point?
                    </p>
                            <h2>
                                What are coronaviruses?
                    </h2>
                            <p>
                                Coronaviruses are a large family of zoonotic viruses that cause illness ranging from the common cold to severe respiratory diseases. Zoonotic means these viruses are able to be transmitted from animals to humans. There are several coronaviruses known to be circulating in different animal populations that have not yet infected humans. COVID-19 is the most recent to make the jump to human infection.
                    </p>
                        </div>
                    </div>
                   </div>
                </div>

            </div>
        );
    }
}
export default About;