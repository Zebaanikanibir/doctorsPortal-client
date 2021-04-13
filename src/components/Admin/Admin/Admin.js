import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './Admin.css';
const Admin = () => {
    return (
       <div className="container-fluid row">
           <div className="col-md-2">
            <Sidebar></Sidebar>
           </div>
           <div className="col-md-10">
            <div className="row container-fluid mt-5">
                <div className="col-md-3">
                    <div className="box bg-warning d-flex align-items-center justify-content-around">
                        <h1>00</h1>
                        <p>Pending Appointment</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box bg-primary d-flex align-items-center justify-content-around">
                        <h1>00</h1>
                        <p>Pending Appointment</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box bg-info d-flex align-items-center justify-content-around">
                        <h1>00</h1>
                        <p>Pending Appointment</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box bg-success d-flex align-items-center justify-content-around">
                        <h1>00</h1>
                        <p>Pending Appointment</p>
                    </div>
                </div>
            </div>
           </div>
       </div>
    );
};

export default Admin;