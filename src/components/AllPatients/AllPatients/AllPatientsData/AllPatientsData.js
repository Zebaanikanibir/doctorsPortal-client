import React from 'react';

const AllPatientsData = ({patients}) => {
    console.log('patients',patients)
    return (
        <div>
           <table className="table">
           <thead>
               <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Weight</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Address</th>
               </tr>
           </thead>
           <tbody>
            
                {

                    patients.map(patient =>
                        
                        <tr>
                    <td>{patient.name}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.weight}</td>
                    <td>{patient.age}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.service}</td>
                    
                    
                    </tr>
                        
                        )
                }
           </tbody>

           </table>
        </div>
    );
};

export default AllPatientsData;