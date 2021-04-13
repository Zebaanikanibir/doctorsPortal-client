import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const Dashboard = () => {
    const [selectedDate , setSelectedDate] =useState(new Date().toLocaleDateString())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date => {
        const newDate = date.toLocaleString().split(',')[0]
        setSelectedDate(newDate)
     console.log(newDate)
    


        
    }
    useEffect(()=>{

        fetch('http://localhost:5003/appointmentsByDate',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({date: selectedDate})
        
            })
            .then(res => res.json())
            .then(data => setAppointments(data))

    },[selectedDate])




    return (
        <section>
            <div className="container-fluid row containerStyle">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 mt-5">
                    <h4 className="text-center mb-5">Appointments</h4>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;