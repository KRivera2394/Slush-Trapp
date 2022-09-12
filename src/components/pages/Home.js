import React from 'react';
import pic1 from '../images/pic1.JPG';
import pic2 from '../images/pic2.JPG';
import pic3 from '../images/pic3.JPG';
import pic4 from '../images/pic4.JPG';
import pic5 from '../images/pic5.JPG';







  

export default function Home() {
  
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <h1 className='homeHeading mb-5 '>SLUSH TRAP</h1>
      {/* <div className='lineDiv lineHead'> HEY </div> */}
      
      <p className='homeText px-3'>Check in with us below to see where we will be next!
      </p>

<div id='fDiv'>
      <div class="fb-page fbPost" data-href="https://www.facebook.com/SlushTrap/" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/SlushTrap/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/SlushTrap/">Slush Trap</a></blockquote></div>

     

      
      </div>
      <h1 id='menuList' className='homeHeading mb-5'>MENU</h1>
      <div className='container menuCont'>
     <div className='card'>
      <div className='card-header scFlavors'>
        SNOW CONE FLAVORS
        <div>$5.00</div>
      </div>
      <ul className='menuUL'>
        
        <li>STRAWBERRY</li>
    <li>CHERRY</li>
    <li>BUBBLEGUM</li>
    <li>PINA COLADA</li>
    <li>PINEAPPLE</li>
    <li>COTTON CANDY</li>
    </ul>
      
      </div>
      <div className='card'>
      <div className='card-header'>
        SNOW CONE FLAVORS
        <div>$5.00</div>
      </div>
      <ul>
        
        <li>STRAWBERRY</li>
    <li>CHERRY</li>
    <li>BUBBLEGUM</li>
    <li>PINA COLADA</li>
    <li>PINEAPPLE</li>
    <li>COTTON CANDY</li>
    </ul>
      
      </div>
      </div>
      
      
     
        
      

      
      <h1 className='homeHeading mb-5'>GALLERY</h1>
{/* <div className='lineDiv'> HEY </div> */}

<div className='allPics container'>
  <img className='homePic' src= {pic1} alt='pic'/>
  <img className='homePic' src= {pic2} alt='pic'/>
  <img className='homePic' src= {pic3} alt='pic'/>
  <img className='homePicLG' src= {pic4} alt='pic'/>
  <img className='homePicLG' src= {pic5} alt='pic'/>

</div>

    </div>
   
  );
}
