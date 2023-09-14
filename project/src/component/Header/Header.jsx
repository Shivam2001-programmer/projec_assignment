import React from 'react';
import './Header.css'; // You can create your CSS file for styling

function Header () {
  return (
    <>
    <div className="container">
      <img className="left-image" src="man.jpg" alt="Left Image" />
      <div className="content">
        <h1>From College Admission to 1st job placement</h1>
        <h3 >we are with you..</h3>
     
        <h3></h3>
      </div>
      <img className="right-image" src="man.jpg" alt="Right Image" />
    </div>


<div className='contener'>
  <h5 className='text'>Jee Answer Key 2023 realeased</h5>
  <h5 className='text1'>DU to realese new course list</h5>
  <h5 className='text2'>LPU Application Form Live</h5>
  <h5 className='text2'>Parul to conduct convocation</h5>
</div>



<div className='conteners'>
  <h1 className='tex'>10,000 Application Registered</h1>
  <h1 className='tex1'>1000 Admission Registerd</h1>
  <h1 className='tex2'>100000 Student Free Counselled</h1>
 
</div>
    </>
  );
}

export default Header;

