import React from 'react'
import handwash from '../Pics/handwash.png'
import medicine from '../Pics/medicine.png'
import prayer from '../Pics/prayer.png'
import stayathome from '../Pics/stayathome.png'
import woman from '../Pics/woman.png'
import socialdistancing from '../Pics/socialdistancing.png'
class Prevention extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div className="preventions p-5" id='prev'>
                    <div className="row">
                        <h1 className="mx-auto py-5">
                                6 Steps Prevention Against Corona Virus
                        </h1>
                    </div>
                   <div className="container">
                    <div className="row">

                    <div className="preventiondivs p-3 col-lg-4 col-md-4 col-12 ">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <figure className=''>
                                        <img src={prayer} alt="" className="img-fluid mx-3"
                                        height='120' width="120"/>
                                    </figure>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <p>If you are Muslims Keep
                                       All your Prayers on Time.
                                        Do Zakat Donation.
                                        Orphans Relief. 
                                        Trusted Muslim Charity.
                                        Sadaqah Jariyah.</p>
                                </div>
                            </div>
                        </div> 
 

                        <div className="preventiondivs p-3 col-lg-4 col-md-4 col-12 ">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <figure className=''>
                                        <img src={handwash} alt="" className="img-fluid mx-3"
                                        height='120' width="120"/>
                                    </figure>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <p>Regular handwashing is one of the best ways to remove germs,
                                         avoid getting sick, and prevent the spread of germs to others. 
                                         </p>
                                </div>
                            </div>
                        </div> 
 

                        <div className="preventiondivs p-3 col-lg-4 col-md-4 col-12 ">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <figure className=''>
                                        <img src={medicine} alt="" className="img-fluid mx-3"
                                        height='120' width="120"/>
                                    </figure>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <p>Medicines are chemicals or compounds used to cure, 
                                        halt, or prevent disease; ease symptoms;
                                         or help in the diagnosis of illnesses. 
                                    </p>
                                </div>
                            </div>
                        </div> 
 

                        <div className="preventiondivs p-3 col-lg-4 col-md-4 col-12 ">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <figure className=''>
                                        <img src={socialdistancing} alt="" className="img-fluid mx-3"
                                        height='120' width="120"/>
                                    </figure>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <p>Protect yourself and others from COVID-19. 
                                        If COVID-19 is spreading in your community, 
                                         such as physical distancing,</p>
                                </div>
                            </div>
                        </div> 
 

                        <div className="preventiondivs p-3 col-lg-4 col-md-4 col-12 ">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <figure className=''>
                                        <img src={stayathome} alt="" className="img-fluid mx-3"
                                        height='120' width="120"/>
                                    </figure>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <p>
                                        Your symptoms could mean you have the infection and
                                         could spread it to others. Also,
                                          hospitals and doctor's offices are 
                                          dealing with many cases of COVID-19.</p>
                                </div>
                            </div>
                        </div> 
 

                        <div className="preventiondivs p-3 col-lg-4 col-md-4 col-12 ">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <figure className=''>
                                        <img src={woman} alt="" className="img-fluid mx-3"
                                        height='120' width="120"/>
                                    </figure>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <p>Masks help stop the spread of COVID-19 to others. Find out how to ... DO choose masks that fit snugly against the sides of your face</p>
                                </div>
                            </div>
                        </div> 
 

                    </div>
                   </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Prevention;