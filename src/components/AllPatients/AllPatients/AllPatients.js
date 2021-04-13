import React, { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllPatientsData from './AllPatientsData/AllPatientsData';
import './AllPatients.css';
const AllPatients = () => {


   const [patients, setPatients] = useState([])

   useEffect(() =>{
   fetch('http://localhost:5003/appointments')
   .then(res => res.json())
   .then(data => setPatients(data))
   },[])

    return (
        <div className="container-fluid row containerStyle">
            
            <div className="col-md-2">
            <Sidebar className="side"></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AllPatientsData patients={patients}></AllPatientsData>
            </div>

           


            
        </div>
    );
};

export default AllPatients;