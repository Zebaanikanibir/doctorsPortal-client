import React from 'react';
import Header from '../Header/Header'
import Services from '../Services/Services'
import FeathuredServices from '../FeathuredServices/FeathuredServices'
import Testimonials from '../Testimonials/Testimonials';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <FeathuredServices></FeathuredServices>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;