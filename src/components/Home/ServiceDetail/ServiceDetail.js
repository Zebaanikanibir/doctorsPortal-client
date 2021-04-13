import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt=""/>
            <h5 className="mt-5 mb-5">{service.name}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, placeat?</p>
        </div>
    );
};

export default ServiceDetail;