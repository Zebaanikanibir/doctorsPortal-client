import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeApponitment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment mt-5">
            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block mt-5">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-info text-uppercase ">Appointment</h5>
                        <h1 className="my-4 text-light">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;