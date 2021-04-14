import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useEffect } from 'react';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(true)
     
    useEffect(()=>{

    fetch('https://dry-forest-66504.herokuapp.com/isDoctor', {

    method:'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify({email: loggedInUser.email})

    }).then(res => res.json())
    .then(data => setIsDoctor(data));


    },[])

    return (
        <div className="side d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <h6>{loggedInUser.email}</h6>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                {isDoctor && <div>
                 
                  <li>
                    <Link to="/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/patients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
                </div>}
                <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
                </ul>
                
               
                
                
            
           
           
        </div>
    );
};

export default Sidebar;