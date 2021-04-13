import React from 'react';
import women from '../../../images/young-woman-receiving-dental-check-up_1098-1512.jpg';
const FeathuredServices = () => {
    return (
        <section>
            <div className="container">
            <div className="row mb-5 mt-5">
            <div className="col-md-7">
             <img src={women} alt=""/>
            </div>
            <div className="col-md-5 align-self-center">
             <h1>Exceptional Dental <br/> Care, On Your Teeth</h1>
             <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sint provident, dignissimos inventore dolore illo error? Nesciunt, architecto voluptatem, voluptas doloribus neque accusantium tempora laborum esse soluta aut voluptate, distinctio fugiat sequi obcaecati debitis odit enim nihil atque natus. Suscipit amet animi eius illo laudantium commodi et delectus unde cupiditate?</p>
             <button className="btn-primary">Learn More</button>
            </div>
            </div>
            </div>
        </section>
    );
};

export default FeathuredServices;