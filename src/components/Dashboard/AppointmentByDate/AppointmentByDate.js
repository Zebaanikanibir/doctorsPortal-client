import React from 'react';
import AppointmentsShortList from '../../Appointment/AppointmentsShortList/AppointmentsShortList';

const AppointmentByDate = ({appointments,date}) => {
  console.log('app',appointments)
    return (
        <div>
          <h1>Appointments</h1>
         <h5>{date}</h5>
         
          {
            appointments.length?
          <AppointmentsShortList appointments={appointments} ></AppointmentsShortList>
          :
          <div className="p-5">
            <h4>No Appointments</h4>
          </div>
          }
        </div>
    );
};

export default AppointmentByDate;