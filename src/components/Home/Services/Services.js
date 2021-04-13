import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitenings from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const ServicesData = [
    {
    name: 'Fluoride Treatment',
    img:fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whithening',
        img:whitenings
    }
]
const Services = () => {
    return (
        <section>
           <div className="text-center mt-5">
           <h5 style={{color: '#1CC7C1'}}>Our Services</h5> 
           <h2 className="mt-5">
               Services We Provided
           </h2>
           </div>
           <div className="d-flex justify-content-center">
            <div className="w-75 row pt-5">
            {
            ServicesData.map(service=> <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;