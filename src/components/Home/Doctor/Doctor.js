import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    console.log('Doctor',doctor)
    return (
        <div className="col-md-4 text-center">
    
            <img src={`data:image/png;base64, ${doctor.image.img}`} alt=""/>
            
            
            <h4>Name: {doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;