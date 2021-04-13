import React from 'react';

const AppointmentsShortList = ({appointments}) => {
    return (
        <div>
            <table className="table">
                <thead >
                    <tr >
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                {

                    appointments.map((app, index) =>
                    
                <tr >
                    
                    <td >{app.name}</td>
                    <td >{app.phone}</td>
                    <td >{app.email}</td>
                </tr>
                    
                    
                    
                    )
                }


                </tbody>


            </table>
           
        </div>
    );
};

export default AppointmentsShortList;