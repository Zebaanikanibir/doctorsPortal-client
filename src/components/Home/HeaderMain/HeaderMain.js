import React from 'react';
import chair from '../../../images/professional-dentist-tools-chair-dental-office_128319-10.jpg';
const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
        <h1>Your New Smiles <br/> Starts Here</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, animi odio! Eveniet voluptatem nulla dolores aliquid vel, necessitatibus rerum molestias a ipsum fuga, similique explicabo itaque animi molestiae ex. Numquam laborum nulla eum commodi id, ad aperiam et consequuntur placeat.</p>
        <button className="btn-dark">GET APPOINTMENT</button>
          </div>  
          <div className="col-md-6">
              <img src={chair} alt="" className="img-fluid"/>
          </div>
        </main>
    );
};

export default HeaderMain;