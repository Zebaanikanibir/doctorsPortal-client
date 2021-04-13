import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar'
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import './Appointment.css';
import BookAppointment from '../BookAppointment/BookAppointment';
const Appointment = () => {

    const [selectedDate , setSelectedDate] =useState(new Date().toLocaleDateString())
    const handleDateChange = date => {
        const newDate = date.toLocaleString().split(',')[0]
        setSelectedDate(newDate)
     console.log(newDate)
    }
    return (
        <div className="Header">
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;